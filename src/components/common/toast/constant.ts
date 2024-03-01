export const DIALOG_POSITIONS = {
  TOP: 'top',
  BOTTOM: 'bottom',
} as const;

export type DialogPositions = (typeof DIALOG_POSITIONS)[keyof typeof DIALOG_POSITIONS];

export const DIALOG_DISPLAY_DURATION = {
  SHORT: 1500,
  LONG: 3000,
  INDIFINITE: null,
} as const;

export type DialogDisplayDuration =
  (typeof DIALOG_DISPLAY_DURATION)[keyof typeof DIALOG_DISPLAY_DURATION];
