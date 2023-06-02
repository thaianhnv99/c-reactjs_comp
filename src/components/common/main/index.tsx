import { Container } from "@mui/material";
import { AppBox } from "../../base";

export function Main({ children }: any) {
  return (
    <AppBox>
      <Container sx={{ padding: "0 1rem", height: "100%" }}>
        {children}
      </Container>
    </AppBox>
  );
}
