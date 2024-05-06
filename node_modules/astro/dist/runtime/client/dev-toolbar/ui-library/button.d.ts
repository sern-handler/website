declare const sizes: readonly ["small", "medium", "large"];
declare const styles: readonly ["ghost", "outline", "purple", "gray", "red", "green", "yellow", "blue"];
type ButtonSize = (typeof sizes)[number];
type ButtonStyle = (typeof styles)[number];
export declare class DevToolbarButton extends HTMLElement {
    _size: ButtonSize;
    _buttonStyle: ButtonStyle;
    get size(): "small" | "large" | "medium";
    set size(value: "small" | "large" | "medium");
    get buttonStyle(): "red" | "purple" | "gray" | "green" | "yellow" | "blue" | "ghost" | "outline";
    set buttonStyle(value: "red" | "purple" | "gray" | "green" | "yellow" | "blue" | "ghost" | "outline");
    static observedAttributes: string[];
    shadowRoot: ShadowRoot;
    constructor();
    connectedCallback(): void;
    updateStyle(): void;
    attributeChangedCallback(): void;
}
export {};
