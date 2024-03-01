import { useState } from 'react';
import { useDialog } from './useDialog';
import { type DialogDisplayDuration } from '../constant';
import { type ToastProps } from '../toast/Toast';

type ToastDisplayDuration = DialogDisplayDuration;

type OpenToastOptions = {
  displayDelay?: number;
  displayDuration?: ToastDisplayDuration;
};

type OpenToast = (text: string, openToastOptions?: OpenToastOptions) => void;

export function useToast() {
  const [toastProps, setToastProps] = useState<ToastProps>({
    text: '',
    open: false,
  });

  const { openDialog } = useDialog({ setDialogProps: setToastProps });

  const openToast: OpenToast = (...props) => {
    openDialog(...props);
  };

  return {
    toastProps,
    openToast,
  };
}
