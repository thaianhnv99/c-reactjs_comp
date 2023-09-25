import { Container } from "@mui/material";
import { AppBox } from "src/base";
import SideBar from "./SideBar";
import StarIcon from "src/icons/StarIcon";
import { MenuItem } from "src/types";
import AcademicCapIcon from "src/icons/AcademicCapIcon";

export function Main({ children }: any) {
  const menu = [
    {
      title: "Component",
      isSub: true,
      subItem: [
        {
          title: "Home",
          url: "/home",
          icon: <StarIcon />,
        },
        {
          title: "Example",
          url: "/example",
          icon: <AcademicCapIcon />,
        },
      ],
    },
    {
      title: "Hooks",
      isSub: true,
      subItem: [
        {
          title: "useTransition",
          url: "/transition",
          icon: <AcademicCapIcon />,
        },
      ],
    },
  ] as MenuItem[];
  return (
    <Container
      sx={{
        display: "flex",
        minHeight: "calc(100vh)",
        boxShadow: "0px 1px 2px #888888",
      }}
    >
      <SideBar menu={menu} />
      <AppBox flex={1} p={2}>
        {children}
      </AppBox>
    </Container>
  );
}
