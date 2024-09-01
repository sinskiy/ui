export const themeColors = [
  "primary",
  "secondary",
  "tertiary",
  "error",
  "primary-container",
  "secondary-container",
  "tertiary-container",
  "error-container",
  "surface-container",
  "surface-container-high",
] as const;

export interface InteractiveProps {
  themeColor?: (typeof themeColors)[number];
}
