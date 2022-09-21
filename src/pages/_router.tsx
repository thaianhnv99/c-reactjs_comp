import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./home/home";
import {Example} from "./example/example";
import {Header} from "../component/common/header";
import {Main} from "../component/common/main";

export default function Router() {
    return (
        <BrowserRouter>
            <Header/>
            <Main>
                <Routes>
                    <Route path={'/'} element={<Example/>}></Route>
                    <Route path={'/home'} element={<Home/>}></Route>
                    <Route path={'/example'} element={<Example/>}></Route>
                </Routes>
            </Main>
        </BrowserRouter>
    )
}
