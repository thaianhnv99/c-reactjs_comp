import { useDispatch, useSelector } from "react-redux";
import { _increaseCount, fetchInfo } from "../../states";
import { useEffect, useRef, useState } from "react";
import "./home.scss";
import { useToggle } from "../../hooks/useToggle";
import { Demo } from "./demo";
import Cookie from "js-cookie";
import Button from "@mui/material/Button";
import { useAuth } from "src/states/auth/hook";
import Divider from "@mui/material/Divider";
import useContextTheme from "src/hooks/useContextTheme";
import { Typography } from "@mui/material";

export function Home() {
  const title = "Home for reactjs + ant design";
  const dispatch = useDispatch();
  const { info } = useSelector((state: any) => state);

  const [open, setOpen] = useToggle(false);
  const buttonRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleClickOutside = () => {
    console.log("123");
  };
  // useClickOutside(buttonRef, handleClickOutside);

  useEffect(() => {
    dispatch(fetchInfo());
  }, []);

  const {
    state: { loading },
    logout,
  } = useAuth();

  const handleToggleCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  const context = useContextTheme();

  console.log(context);

  return (
    <>
      Home update v8.2
      <Button variant="contained" onClick={logout}>
        Logout{loading ? "..." : ""}
      </Button>
      <Divider />
      <Button onClick={handleToggleCount}>Count {count}</Button>
      <Divider>useTheme</Divider>
      <Typography>{context.theme}</Typography>
      <Button onClick={() => context.setTheme("black")}>Change theme</Button>
    </>

    // <div className="homeContainer">
    //     <div>{title}</div>
    //     <div>
    //         Count: {info.count}
    //         <button onClick={() => dispatch(_increaseCount())}>Triggle</button>
    //     </div>
    //     <div className="listTodo">
    //         <Divider orientation="center" plain>
    //             List
    //         </Divider>
    //         {info && info.list.map((item: any, index: number) => {
    //             return (
    //                 <div key={index}>{item.name}</div>)
    //         })}
    //     </div>
    //
    //     {/*useToggle*/}
    //     <Divider plain>
    //         useToggle
    //     </Divider>
    //     <div>
    //         <Typography.Text>Status: {open ? 'open' : 'close'}</Typography.Text><br/>
    //         <Button onClick={() => setOpen(!open)}>Toggle</Button>
    //     </div>
    //
    //     {/*useClickOutside*/}
    //     <Divider plain>
    //         useClickOutside
    //     </Divider>
    //     <div ref={buttonRef}>
    //         Click Outside
    //     </div>
    // </div>
  );
}
