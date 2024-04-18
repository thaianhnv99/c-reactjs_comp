import Stack, { type StackProps } from '@mui/material/Stack';
import { type PropsWithChildren } from 'react';
import IconUI from 'src/icons/IconUI';

const IconsPage = () => {
  return (
    <Stack direction="column" gap={2}>
      <WrapperStackRowBottom>
        <IconUI name="icon_star" />
        <IconUI name="icon_star" size={32} />
        <IconUI name="icon_star" size={32} />
      </WrapperStackRowBottom>
      <WrapperStackRowBottom>
        <IconUI name="icon_search" fill="red" />
        <IconUI name="icon_search" size={32} fill="red" />
        <IconUI name="icon_search" size={48} fill="red" />
      </WrapperStackRowBottom>
      <WrapperStackRowBottom>
        <IconUI name="icon_document" />
        <IconUI name="icon_document" size={32} />
        <IconUI name="icon_document" size={48} />
      </WrapperStackRowBottom>
      <WrapperStackRowBottom>
        <IconUI name="icon_reload" />
        <IconUI name="icon_reload" size={32} />
        <IconUI name="icon_reload" size={48} />
      </WrapperStackRowBottom>
      <WrapperStackRowBottom>
        <IconUI name="icon_user" />
        <IconUI name="icon_user" size={32} />
        <IconUI name="icon_user" size={48} />
      </WrapperStackRowBottom>
    </Stack>
  );
};

export default IconsPage;

const WrapperStackRowBottom = ({ children, ...props }: PropsWithChildren<StackProps>) => {
  return (
    <Stack direction="row" gap={2} alignItems="flex-end" {...props}>
      {children}
    </Stack>
  );
};
