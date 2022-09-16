import {useDispatch, useSelector} from "react-redux";
import {_increaseCount} from "../state";

export function Home() {
    const title = 'Home for reactjs + ant design'

    const dispatch = useDispatch();
    const {info} = useSelector((state: any) => state);
    console.log(info)
    return (<>
        <div>{title}</div>
        <div>
            Count: {info.count}
            <button onClick={() => dispatch(_increaseCount())}>Triggle</button>
        </div>
    </>)
}
