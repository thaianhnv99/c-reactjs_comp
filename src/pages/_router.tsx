import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./home";
import {Example} from "./example/example";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/example'} element={<Example/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
