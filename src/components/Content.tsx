import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Content () {
    return(
        <div className="content">
            <Header />
            <Outlet />
        </div>
    )
}