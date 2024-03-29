import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import SliderWrapper from './slider/SliderWapper';
import AccordionWrapper from './accordion/AccordionWrapper';
import { Login, Register } from './auth';
// import PrivateRouter from './_privateRouter';
import DataGrid from './data-grid/DataGrid';
import DateWrapper from './date/DateWrapper';
import Transition from 'src/components/demo/Transition';
import Layout from 'src/components/layout/Layout';
import SearchList from './debounce/SearchList';
import List from './react-query/List';
import { Example } from './example/example';
import SWR from './swr/SWR';
import Toast from './toast/Toast';
import IconsPage from './icons/Icons';

export default function Router() {
  return (
    <Routes>
      {/* <Route element={<PrivateRouter />}> */}
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="example" element={<Example />}></Route>
        <Route path="slider" element={<SliderWrapper />}></Route>
        <Route path="transition" element={<Transition />}></Route>
        <Route path="accordion" element={<AccordionWrapper />} />
        <Route path="grid" element={<DataGrid />} />
        <Route path="date" element={<DateWrapper />} />
        <Route path="list-debounce" element={<SearchList />} />
        <Route path="react-query" element={<List />} />
        <Route path="swr" element={<SWR />} />
        <Route path="toast" element={<Toast />} />
        <Route path="icons" element={<IconsPage />} />
      </Route>
      {/* </Route> */}

      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
    </Routes>
  );
}
