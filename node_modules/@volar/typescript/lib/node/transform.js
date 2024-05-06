"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toGeneratedOffset = exports.toSourceOffset = exports.transformTextSpan = exports.transformTextChange = exports.transformSpan = exports.transformDocumentSpan = exports.transformFileTextChanges = exports.transformDiagnostic = exports.transformCallHierarchyItem = void 0;
const language_core_1 = require("@volar/language-core");
const utils_1 = require("./utils");
const transformedDiagnostics = new WeakMap();
function transformCallHierarchyItem(files, item, filter) {
    const span = transformSpan(files, item.file, item.span, filter);
    const selectionSpan = transformSpan(files, item.file, item.selectionSpan, filter);
    return {
        ...item,
        span: span?.textSpan ?? { start: 0, length: 0 },
        selectionSpan: selectionSpan?.textSpan ?? { start: 0, length: 0 },
    };
}
exports.transformCallHierarchyItem = transformCallHierarchyItem;
function transformDiagnostic(files, diagnostic) {
    if (!transformedDiagnostics.has(diagnostic)) {
        transformedDiagnostics.set(diagnostic, undefined);
        const { relatedInformation } = diagnostic;
        if (relatedInformation) {
            diagnostic.relatedInformation = relatedInformation
                .map(d => transformDiagnostic(files, d))
                .filter(utils_1.notEmpty);
        }
        if (diagnostic.file !== undefined
            && diagnostic.start !== undefined
            && diagnostic.length !== undefined) {
            const [virtualCode, sourceFile, map] = (0, utils_1.getVirtualFileAndMap)(files, diagnostic.file.fileName);
            if (virtualCode) {
                const sourceSpan = transformTextSpan(sourceFile, map, { start: diagnostic.start, length: diagnostic.length }, language_core_1.shouldReportDiagnostics);
                if (sourceSpan) {
                    transformedDiagnostics.set(diagnostic, {
                        ...diagnostic,
                        start: sourceSpan.start,
                        length: sourceSpan.length,
                    });
                }
            }
            else {
                transformedDiagnostics.set(diagnostic, diagnostic);
            }
        }
        else {
            transformedDiagnostics.set(diagnostic, diagnostic);
        }
    }
    return transformedDiagnostics.get(diagnostic);
}
exports.transformDiagnostic = transformDiagnostic;
function transformFileTextChanges(files, changes, filter) {
    const [_, source] = (0, utils_1.getVirtualFileAndMap)(files, changes.fileName);
    if (source) {
        return {
            ...changes,
            textChanges: changes.textChanges.map(c => {
                const span = transformSpan(files, changes.fileName, c.span, filter);
                if (span) {
                    return {
                        ...c,
                        span: span.textSpan,
                    };
                }
            }).filter(utils_1.notEmpty),
        };
    }
    else {
        return changes;
    }
}
exports.transformFileTextChanges = transformFileTextChanges;
function transformDocumentSpan(files, documentSpan, filter, shouldFallback) {
    let textSpan = transformSpan(files, documentSpan.fileName, documentSpan.textSpan, filter);
    if (!textSpan && shouldFallback) {
        const [virtualCode] = (0, utils_1.getVirtualFileAndMap)(files, documentSpan.fileName);
        if (virtualCode) {
            textSpan = {
                fileName: documentSpan.fileName,
                textSpan: { start: 0, length: 0 },
            };
        }
    }
    if (!textSpan) {
        return;
    }
    const contextSpan = transformSpan(files, documentSpan.fileName, documentSpan.contextSpan, filter);
    const originalTextSpan = transformSpan(files, documentSpan.originalFileName, documentSpan.originalTextSpan, filter);
    const originalContextSpan = transformSpan(files, documentSpan.originalFileName, documentSpan.originalContextSpan, filter);
    return {
        ...documentSpan,
        fileName: textSpan.fileName,
        textSpan: textSpan.textSpan,
        contextSpan: contextSpan?.textSpan,
        originalFileName: originalTextSpan?.fileName,
        originalTextSpan: originalTextSpan?.textSpan,
        originalContextSpan: originalContextSpan?.textSpan,
    };
}
exports.transformDocumentSpan = transformDocumentSpan;
function transformSpan(files, fileName, textSpan, filter) {
    if (!fileName || !textSpan) {
        return;
    }
    const [virtualFile, sourceFile, map] = (0, utils_1.getVirtualFileAndMap)(files, fileName);
    if (virtualFile) {
        const sourceSpan = transformTextSpan(sourceFile, map, textSpan, filter);
        if (sourceSpan) {
            return {
                fileName,
                textSpan: sourceSpan,
            };
        }
    }
    else {
        return {
            fileName,
            textSpan,
        };
    }
}
exports.transformSpan = transformSpan;
function transformTextChange(sourceFile, map, textChange, filter) {
    const sourceSpan = transformTextSpan(sourceFile, map, textChange.span, filter);
    if (sourceSpan) {
        return {
            newText: textChange.newText,
            span: sourceSpan,
        };
    }
}
exports.transformTextChange = transformTextChange;
function transformTextSpan(sourceFile, map, textSpan, filter) {
    const start = textSpan.start;
    const end = textSpan.start + textSpan.length;
    const sourceStart = toSourceOffset(sourceFile, map, start, filter);
    const sourceEnd = toSourceOffset(sourceFile, map, end, filter);
    if (sourceStart !== undefined && sourceEnd !== undefined && sourceEnd >= sourceStart) {
        return {
            start: sourceStart,
            length: sourceEnd - sourceStart,
        };
    }
}
exports.transformTextSpan = transformTextSpan;
function toSourceOffset(sourceFile, map, position, filter) {
    for (const [sourceOffset, mapping] of map.getSourceOffsets(position - sourceFile.snapshot.getLength())) {
        if (filter(mapping.data)) {
            return sourceOffset;
        }
    }
}
exports.toSourceOffset = toSourceOffset;
function toGeneratedOffset(sourceFile, map, position, filter) {
    for (const [generateOffset, mapping] of map.getGeneratedOffsets(position)) {
        if (filter(mapping.data)) {
            return generateOffset + sourceFile.snapshot.getLength();
        }
    }
}
exports.toGeneratedOffset = toGeneratedOffset;
//# sourceMappingURL=transform.js.map