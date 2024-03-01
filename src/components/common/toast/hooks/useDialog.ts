import { useRef } from 'react';
import { DIALOG_DISPLAY_DURATION, type DialogDisplayDuration } from '../constant';

export type DialogProps = {
  open: boolean;
  text: string;
};

type useDialogProps<P> = {
  setDialogProps: React.Dispatch<React.SetStateAction<P>>;
};

type CloseDialogOptions = {
  closeDelay: number;
};
export type CloseDialog = (closeDialogOptions?: CloseDialogOptions) => void;

type OpenDialogOptions = {
  displayDelay?: number;
  displayDuration?: DialogDisplayDuration;
};
type OpenDialog = (text: string, openDialogOptions?: OpenDialogOptions) => void;

export function useDialog<P extends DialogProps>({ setDialogProps }: useDialogProps<P>) {
  const openDialogTimeRef = useRef<ReturnType<typeof window.setTimeout>>();

  const closeDialog: CloseDialog = (closeDialogOptions) => {
    if (!closeDialogOptions) {
      openDialogTimeRef.current = undefined;
      setDialogProps((prevDialogProps) => ({
        ...prevDialogProps,
        text: '',
        open: false,
      }));
    } else {
      const { closeDelay } = closeDialogOptions;
      setTimeout(() => {
        openDialogTimeRef.current = undefined;
        setDialogProps((prevDialogProps) => ({
          ...prevDialogProps,
          text: '',
          open: false,
        }));
      }, closeDelay);
    }
  };

  const openDialog: OpenDialog = (
    text,
    {
      displayDelay = 0,
      displayDuration = DIALOG_DISPLAY_DURATION.SHORT,
      ...restOpenDialogOptions
    } = {}
  ) => {
    if (openDialogTimeRef.current) {
      return;
    }

    openDialogTimeRef.current = setTimeout(() => {
      setDialogProps((prevDialogProps) => ({
        ...prevDialogProps,
        text,
        open: true,
        ...restOpenDialogOptions,
      }));
    }, displayDelay);

    if (displayDuration === null) {
      return;
    }

    closeDialog({ closeDelay: displayDelay + displayDuration });
  };

  return { openDialog, closeDialog };
}
