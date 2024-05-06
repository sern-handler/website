import { FileRegistry, CodeInformation, SourceMap, SourceFile } from '@volar/language-core';
import type * as ts from 'typescript';
export declare function transformCallHierarchyItem(files: FileRegistry, item: ts.CallHierarchyItem, filter: (data: CodeInformation) => boolean): ts.CallHierarchyItem;
export declare function transformDiagnostic<T extends ts.Diagnostic>(files: FileRegistry, diagnostic: T): T | undefined;
export declare function transformFileTextChanges(files: FileRegistry, changes: ts.FileTextChanges, filter: (data: CodeInformation) => boolean): ts.FileTextChanges | undefined;
export declare function transformDocumentSpan<T extends ts.DocumentSpan>(files: FileRegistry, documentSpan: T, filter: (data: CodeInformation) => boolean, shouldFallback?: boolean): T | undefined;
export declare function transformSpan(files: FileRegistry, fileName: string | undefined, textSpan: ts.TextSpan | undefined, filter: (data: CodeInformation) => boolean): {
    fileName: string;
    textSpan: ts.TextSpan;
} | undefined;
export declare function transformTextChange(sourceFile: SourceFile, map: SourceMap<CodeInformation>, textChange: ts.TextChange, filter: (data: CodeInformation) => boolean): ts.TextChange | undefined;
export declare function transformTextSpan(sourceFile: SourceFile, map: SourceMap<CodeInformation>, textSpan: ts.TextSpan, filter: (data: CodeInformation) => boolean): ts.TextSpan | undefined;
export declare function toSourceOffset(sourceFile: SourceFile, map: SourceMap, position: number, filter: (data: CodeInformation) => boolean): number | undefined;
export declare function toGeneratedOffset(sourceFile: SourceFile, map: SourceMap, position: number, filter: (data: CodeInformation) => boolean): number | undefined;
