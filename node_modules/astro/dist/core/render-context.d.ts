import type { APIContext, AstroGlobal, AstroGlobalPartial, ComponentInstance, MiddlewareHandler, RouteData, SSRResult } from '../@types/astro.js';
import { AstroCookies } from './cookies/index.js';
import { type Pipeline } from './render/index.js';
/**
 * Each request is rendered using a `RenderContext`.
 * It contains data unique to each request. It is responsible for executing middleware, calling endpoints, and rendering the page by gathering necessary data from a `Pipeline`.
 */
export declare class RenderContext {
    #private;
    readonly pipeline: Pipeline;
    locals: App.Locals;
    readonly middleware: MiddlewareHandler;
    readonly pathname: string;
    readonly request: Request;
    readonly routeData: RouteData;
    status: number;
    readonly cookies: AstroCookies;
    readonly params: import("../@types/astro.js").Params;
    readonly url: URL;
    private constructor();
    static create({ locals, middleware, pathname, pipeline, request, routeData, status, }: Pick<RenderContext, 'pathname' | 'pipeline' | 'request' | 'routeData'> & Partial<Pick<RenderContext, 'locals' | 'middleware' | 'status'>>): RenderContext;
    /**
     * The main function of the RenderContext.
     *
     * Use this function to render any route known to Astro.
     * It attempts to render a route. A route can be a:
     *
     * - page
     * - redirect
     * - endpoint
     * - fallback
     */
    render(componentInstance: ComponentInstance | undefined): Promise<Response>;
    createAPIContext(props: APIContext['props']): APIContext;
    createResult(mod: ComponentInstance): Promise<SSRResult>;
    /**
     * The Astro global is sourced in 3 different phases:
     * - **Static**: `.generator` and `.glob` is printed by the compiler, instantiated once per process per astro file
     * - **Page-level**: `.request`, `.cookies`, `.locals` etc. These remain the same for the duration of the request.
     * - **Component-level**: `.props`, `.slots`, and `.self` are unique to each _use_ of each component.
     *
     * The page level partial is used as the prototype of the user-visible `Astro` global object, which is instantiated once per use of a component.
     */
    createAstro(result: SSRResult, astroStaticPartial: AstroGlobalPartial, props: Record<string, any>, slotValues: Record<string, any> | null): AstroGlobal;
    createAstroPagePartial(result: SSRResult, astroStaticPartial: AstroGlobalPartial): Omit<AstroGlobal, 'props' | 'self' | 'slots'>;
    clientAddress(): string;
    computeCurrentLocale(): string | undefined;
    computePreferredLocale(): string | undefined;
    computePreferredLocaleList(): string[] | undefined;
}
