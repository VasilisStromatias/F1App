import TwoColumnLayout from "./TwoColumnLayout";
import { useSelector } from "react-redux";
import { type RootStateType } from "../store/store";

export default function MainLayout() {

    const theme = useSelector((state : RootStateType) => state.global.theme);

    let themeClass = "";
    if(theme === 'light') {
        themeClass = "light-theme";
    }

    return(
        <div className={`main-layout ${themeClass}`}>
            <TwoColumnLayout />
        </div>
    )

}