import { Route, Routes } from "react-router-dom";
import { Home } from "./home/home";
import { Example } from "./example/example";
import SliderWrapper from "./slider/SliderWapper";
import AccordionWrapper from "./comps/accordion/AccordionWrapper";
import { Login, Register } from "./auth";
import Layout from "src/components/common/layout/Layout";
import PrivateRouter from "./_privateRouter";
import DataGrid from "./comps/data-grid/DataGrid";
import DateWrapper from "./comps/date/DateWrapper";

export default function Router() {
  return (
    <Routes>
      <Route element={<PrivateRouter />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Example />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="example" element={<Example />}></Route>
          <Route path="slider" element={<SliderWrapper />}></Route>
          <Route path="comps">
            <Route path="accordion" element={<AccordionWrapper />} />
            <Route path="grid" element={<DataGrid />} />
            <Route path="date" element={<DateWrapper />} />
          </Route>
        </Route>
      </Route>

      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
    </Routes>
  );
}
