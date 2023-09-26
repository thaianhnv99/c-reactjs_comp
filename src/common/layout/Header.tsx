import {
  AppBar,
  Box,
  Container,
  Menu,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "src/assets/images/moodle-vector-logo.svg";
import Profile from "./Profile";

export function Header() {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: theme.color.bg2,
        border: "none",
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            height: "70px",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Link to="/">
              <img
                src={Logo}
                alt=""
                style={{
                  display: "block",
                  maxHeight: "50px",
                }}
              />
            </Link>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography color="white">Jon</Typography>
            <Profile />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
