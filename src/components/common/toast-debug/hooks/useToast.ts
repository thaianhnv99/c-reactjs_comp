import { useState } from 'react';
import { useDialog } from './useDialog';
import { type DialogDisplayDuration } from '../constant';
import { type ToastProps } from '../toast/Toast';

type OpenToastOption = {
  displayDuration?: DialogDisplayDuration;
  displayDelay?: number;
};

type OpenToast = (text: string, OpenToastOption?: OpenToastOption) => void;

type UseToastProps = {
  toastProps: ToastProps;
  openToast: OpenToast;
};

export function useToast(): UseToastProps {
  const [toastProps, setToastProps] = useState<ToastProps>({ open: false, text: '' });

  const { openDialog } = useDialog({ setDialogProps: setToastProps });

  const openToast: OpenToast = (...props) => {
    openDialog(...props);
  };

  return { toastProps, openToast };
}
