import {useDispatch, useSelector} from "react-redux";
import {_increaseCount, fetchInfo} from "../../state";
import {useEffect, useRef} from "react";
import "./home.scss"
import {useToggle} from "../../hooks/useToggle";
import useClickOutside from "../../hooks/useClickOutside";
import {Demo} from "./demo";
import {AppInput} from "../../component/Base";

export function Home() {
    const title = 'Home for reactjs + ant design'

    const dispatch = useDispatch();
    const {info} = useSelector((state: any) => state);

    const [open, setOpen] = useToggle(false);
    const buttonRef = useRef(null);

    const handleClickOutside = () => {
        console.log('123');
    }
    useClickOutside(buttonRef, handleClickOutside);

    useEffect(() => {
        dispatch(fetchInfo());
    }, []);
    return (
        <>
        Home update
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
    )
}
