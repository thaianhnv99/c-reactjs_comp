import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

type HomeWrapperProps = {
  children: ReactNode;
  title: string;
};

const HomeWrapper = ({ children, title }: HomeWrapperProps) => {
  return (
    <Box>
      <Typography variant="h3">{title}</Typography>
      <Box>{children}</Box>
    </Box>
  );
};

HomeWrapper.Item = ({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) => {
  return (
    <Box>
      <Typography>{title}</Typography>
    </Box>
  );
};

export default HomeWrapper;
