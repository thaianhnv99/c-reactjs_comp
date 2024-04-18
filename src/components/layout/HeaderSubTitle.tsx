import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { type PropsWithChildren } from 'react';

type HeaderSubTitleProps = {
  title: string;
  description?: string;
};
const HeaderSubTitle = ({
  title,
  description,
  children,
}: PropsWithChildren<HeaderSubTitleProps>) => {
  if (!title) return null;
  return (
    <>
      <Typography color="#1e293b" variant="h1" fontWeight="700" lineHeight={1.1}>
        {title}
      </Typography>
      {description ? (
        <Typography mt={2} color="#475569">
          {description}
        </Typography>
      ) : null}
      <Divider
        sx={{
          mt: 3,
          mb: 3,
          borderColor: '#eaeaea',
        }}
      />
      {children}
    </>
  );
};

export default HeaderSubTitle;
