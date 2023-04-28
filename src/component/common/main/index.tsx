import { Container } from "@mui/material";
import { AppBox } from "../../Base";

export function Main({ children }: any) {
  return (
    <AppBox color="gray10">
      <Container sx={{ padding: "0 1rem", height: "100%" }}>
        {children}
      </Container>
    </AppBox>
  );
}
