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
import MainTemplate from 'src/components/layout/MainTemplate';
import HeaderSubTitle from 'src/components/layout/HeaderSubTitle';

export default function Router() {
  return (
    <Routes>
      {/* <Route element={<PrivateRouter />}> */}
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="home"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="Home"
                />
              }
            >
              <Home />
            </MainTemplate>
          }
        />
        <Route
          path="example"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="Examle"
                />
              }
            >
              <Example />
            </MainTemplate>
          }
        />
        <Route
          path="slider"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="Slider"
                />
              }
            >
              <SliderWrapper />
            </MainTemplate>
          }
        />
        <Route
          path="accordion"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="Accordion"
                />
              }
            >
              <AccordionWrapper />
            </MainTemplate>
          }
        />
        <Route
          path="/responsive-layout"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="Responsive layout"
                />
              }
            >
              <ResponsiveLayout />
            </MainTemplate>
          }
        />
        <Route
          path="date"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="Date"
                />
              }
            >
              <DateWrapper />
            </MainTemplate>
          }
        />
        <Route
          path="list-debounce"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="List debounce"
                />
              }
            >
              <SearchList />
            </MainTemplate>
          }
        />
        <Route
          path="react-query"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="React query"
                />
              }
            >
              <List />
            </MainTemplate>
          }
        />
        <Route
          path="swr"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="SWR"
                />
              }
            >
              <SWR />
            </MainTemplate>
          }
        />
        <Route
          path="toast"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="Toast"
                />
              }
            >
              <Toast />
            </MainTemplate>
          }
        />
        <Route
          path="icons"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="Icons"
                />
              }
            >
              <IconsPage />
            </MainTemplate>
          }
        />
        <Route
          path="scroll"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="Scroll"
                />
              }
            >
              <ScrollUI />
            </MainTemplate>
          }
        />
        <Route
          path="pagination"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="Pagination"
                />
              }
            >
              <PaginationUI />
            </MainTemplate>
          }
        />
        <Route
          path="chat"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="Chat UI"
                />
              }
            >
              <ChatDebug />
            </MainTemplate>
          }
        />
        <Route
          path="issue"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="Issue for dev"
                />
              }
            >
              <IssuesForDev />
            </MainTemplate>
          }
        >
          <Route index element={<ForDev />} />
          <Route path="flicker-loading" element={<IssueFlickerLoading />} />
        </Route>
        {/* hooks */}
        <Route
          path="use-transition"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="useTransition"
                />
              }
            >
              <DemoUseTransition />
            </MainTemplate>
          }
        />
        <Route
          path="use-deferred-value"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="useDeferredValue"
                />
              }
            >
              <DemoUseDeferredValue />
            </MainTemplate>
          }
        />
        <Route
          path="white-page"
          element={
            <MainTemplate
              headerTitle={
                <HeaderSubTitle
                  description="Serializing AdonisJS models to camelCase globally"
                  title="White page"
                />
              }
            >
              <WhitePage />
            </MainTemplate>
          }
        />
      </Route>
      {/* </Route> */}

      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
    </Routes>
  );
}
