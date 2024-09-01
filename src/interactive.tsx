import { ArgTypes } from "storybook/internal/types";

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
export const interactiveArgTypes: ArgTypes = {
  themeColors: {
    options: themeColors,
  },
} as const;

export interface InteractiveProps {
  themeColor?: (typeof themeColors)[number];
}
