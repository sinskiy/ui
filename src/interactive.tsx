export const themeColors = [
  "surface",
  "primary",
  "secondary",
  "tertiary",
  "error",
  "primary-container",
  "secondary-container",
  "tertiary-container",
  "error-container",
] as const;

export const containerModifiers = [
  "surface-container-lowest",
  "surface-container-low",
  "surface-container",
  "surface-container-high",
  "surface-container-highest",
] as const;

export interface InteractiveProps {
  themeColor?: (typeof themeColors)[number];
  containerModifier?: (typeof containerModifiers)[number];
}
