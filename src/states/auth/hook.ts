import { useDispatch } from "react-redux";
import { useAppSelector } from "../hook";
import { userLogin, userLogout } from "./reducer";

export const useAuth = () => {
    const dispatch = useDispatch();
    const state = useAppSelector((state) => state.auth);
    return {
        state,
        async login(data: User) {
            dispatch(userLogin(data));
        },
        async logout() {
            dispatch(userLogout())
        }
    };
}