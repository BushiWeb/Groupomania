import { createSelector } from '@reduxjs/toolkit';
import { THEMES_NAMES } from '../features/theme/theme.slice.js';

export const selectTheme = (state) => state.theme;

export const selectIsDarkTheme = createSelector(
    selectTheme,
    theme => [THEMES_NAMES.dark].includes(theme)
);

export const selectTooltipCoordinates = (state) => ({
    targetX: state.tooltip.targetX,
    targetY: state.tooltip.targetY,
    targetWidth: state.tooltip.targetWidth,
    targetHeight: state.tooltip.targetHeight,
});

export const selectTooltipLabel = (state) => state.tooltip.label;

export const selectIsTooltipvisible = (state) => state.tooltip.show;