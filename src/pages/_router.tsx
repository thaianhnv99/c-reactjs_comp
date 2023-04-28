import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home/home";
import { Example } from "./example/example";
import { Header } from "../component/common/header";
import { Main } from "../component/common/main";
import SliderWrapper from "./slider/SliderWapper";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path={"/"} element={<Example />}></Route>
          <Route path={"/home"} element={<Home />}></Route>
          <Route path={"/example"} element={<Example />}></Route>
          <Route path={"/slider"} element={<SliderWrapper />}></Route>
        </Routes>
      </Main>
    </BrowserRouter>
  );
}
