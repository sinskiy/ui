export declare const themeColors: readonly ["surface", "primary", "secondary", "tertiary", "error", "primary-container", "secondary-container", "tertiary-container", "error-container"];
export declare const containerModifiers: readonly ["surface-container-lowest", "surface-container-low", "surface-container", "surface-container-high", "surface-container-highest"];
export interface InteractiveProps {
    themeColor?: (typeof themeColors)[number];
    containerModifier?: (typeof containerModifiers)[number];
}
