import { Outlet } from "react-router-dom";
import Header from "./Header";
import ContentInner from "./ContentInner";

export default function Content () {
    return(
        <div className="content">
            <Header />
            <ContentInner>
                <Outlet />
            </ContentInner>
        </div>
    )
}