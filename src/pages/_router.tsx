import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import SliderWrapper from './slider/SliderWapper';
import AccordionWrapper from './accordion/AccordionWrapper';
import { Login, Register } from './auth';
// import PrivateRouter from './_privateRouter';
import DateWrapper from './date/DateWrapper';
import Layout from 'src/components/layout/Layout';
import SearchList from './debounce/SearchList';
import List from './react-query/List';
import { Example } from './example/example';
import SWR from './swr/SWR';
import Toast from './toast/Toast';
import IconsPage from './icons/Icons';
import ScrollUI from 'src/components/scroll/ScrollUI';
import PaginationUI from 'src/components/base/Pagination/PaginationUI';
import ChatDebug from './chat-debug/ChatDebug';
import WhitePage from './white-page/WhitePage';
import IssuesForDev from './issues-for-dev/IssuesForDev';
import ForDev from 'src/components/issues-for-dev/ForDev';
import IssueFlickerLoading from './issues-for-dev/IssueFlickerLoading';
import ResponsiveLayout from './responsive-layout/ResponsiveLayout';
import DemoUseTransition from 'src/components/component-for-hook/useTransition/Demo';
import DemoUseDeferredValue from 'src/components/component-for-hook/useDeferredValue/Demo';

export default function Router() {
  return (
    <Routes>
      {/* <Route element={<PrivateRouter />}> */}
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="example" element={<Example />} />
        <Route path="slider" element={<SliderWrapper />} />
        <Route path="accordion" element={<AccordionWrapper />} />
        <Route path="/responsive-layout" element={<ResponsiveLayout />} />
        <Route path="date" element={<DateWrapper />} />
        <Route path="list-debounce" element={<SearchList />} />
        <Route path="react-query" element={<List />} />
        <Route path="swr" element={<SWR />} />
        <Route path="toast" element={<Toast />} />
        <Route path="icons" element={<IconsPage />} />
        <Route path="scroll" element={<ScrollUI />} />
        <Route path="pagination" element={<PaginationUI />} />
        <Route path="chat" element={<ChatDebug />} />
        <Route path="issue" element={<IssuesForDev />}>
          <Route index element={<ForDev />} />
          <Route path="flicker-loading" element={<IssueFlickerLoading />} />
        </Route>
        {/* hooks */}
        <Route path="use-transition" element={<DemoUseTransition />} />
        <Route path="use-deferred-value" element={<DemoUseDeferredValue />} />
        <Route path="white-page" element={<WhitePage />} />
      </Route>
      {/* </Route> */}

      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
    </Routes>
  );
}
