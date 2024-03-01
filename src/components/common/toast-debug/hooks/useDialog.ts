import { useRef } from 'react';
import { DIALOG_DISPLAY_DURATION, type DialogDisplayDuration } from '../constant';

export type DialogProps = {
  open: boolean;
  text: string;
};

type CloseDialogOption = {
  closeDelay: number;
};

type CloseDialog = (closeDialogOption?: CloseDialogOption) => void;

type OpenDialogOption = {
  displayDuration?: DialogDisplayDuration;
  displayDelay?: number;
};

type OpenDialog = (text: string, openDialogOption?: OpenDialogOption) => void;

type UseDialogProps<P> = {
  setDialogProps: React.Dispatch<React.SetStateAction<P>>;
};
export function useDialog<P extends DialogProps>({ setDialogProps }: UseDialogProps<P>) {
  const openDialogTimeRef = useRef<ReturnType<typeof window.setTimeout>>();

  const closeDialog: CloseDialog = (closeDialogOption) => {
    if (!closeDialogOption) {
      openDialogTimeRef.current = undefined;
      setDialogProps((prevDialogProps) => ({
        ...prevDialogProps,
        open: false,
        text: '',
      }));
    } else {
      const { closeDelay } = closeDialogOption;
      setTimeout(() => {
        openDialogTimeRef.current = undefined;
        setDialogProps((prevDialogProps) => ({
          ...prevDialogProps,
          open: false,
          text: '',
        }));
      }, closeDelay);
    }
  };

  const openDialog: OpenDialog = (
    text,
    {
      displayDelay = 0,
      displayDuration = DIALOG_DISPLAY_DURATION.LONG,
      ...restOpenDialogOptions
    } = {}
  ) => {
    if (openDialogTimeRef.current) {
      return;
    }

    openDialogTimeRef.current = setTimeout(() => {
      setDialogProps((prevDialogProps) => ({
        ...prevDialogProps,
        open: true,
        text,
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
