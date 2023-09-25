import { Container } from "@mui/material";
import { AppBox } from "src/base";
import SideBar from "./SideBar";
import { MenuItem } from "src/types";
import DocumentIcon from "src/icons/DocumentIcon";

export function Main({ children }: any) {
  const menu = [
    {
      title: "Component",
      isSub: true,
      subItem: [
        {
          title: "Home",
          url: "/home",
          icon: <DocumentIcon />,
        },
        {
          title: "Example",
          url: "/example",
          icon: <DocumentIcon />,
        },
        {
          title: "Slider",
          url: "/slider",
          icon: <DocumentIcon />,
        },
        {
          title: "Accordion",
          url: "/accordion",
          icon: <DocumentIcon />,
        },
        {
          title: "Grid",
          url: "/grid",
          icon: <DocumentIcon />,
        },
        {
          title: "Date",
          url: "/date",
          icon: <DocumentIcon />,
        },
        {
          title: "List debounce",
          url: "/list-debounce",
          icon: <DocumentIcon />,
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
          icon: <DocumentIcon />,
        },
      ],
    },
  ] as MenuItem[];
  return (
    <Container
      sx={{
        display: "flex",
        minHeight: "calc(100vh)",
      }}
    >
      <AppBox flex={1} p={2}>
        {children}
      </AppBox>
      <SideBar menu={menu} />
    </Container>
  );
}
