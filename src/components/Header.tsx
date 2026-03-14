import { globalActions } from "../store/store"
import { useDispatch } from "react-redux"

export default function Header(){

    const dispatch = useDispatch();

    const toggleThemeHandler = () => {
        dispatch(globalActions.toggleTheme())
    }

    return(
        <header>
            <div className="header-inner">
                <button onClick={toggleThemeHandler}>Toggle Theme</button>
            </div>
        </header>
    )
}