import { globalActions, type RootStateType } from "../store/store"
import { useDispatch, useSelector } from "react-redux"
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";



export default function Header(){

    const dispatch = useDispatch();

    const theme = useSelector((state: RootStateType) => state.global.theme);

    const toggleThemeHandler = () => {
        dispatch(globalActions.toggleTheme())
    }

    return(
        <header>
            <div className="header-inner">
                <button className="toggle-theme-button" onClick={toggleThemeHandler}>
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                </button>
            </div>
        </header>
    )
}