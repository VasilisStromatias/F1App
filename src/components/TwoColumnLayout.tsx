import Sidebar from "./Sidebar"
import Content from "./Content"


export default function TwoColumnLayout() {
    return(
        <div className="two-column-layout">
            <Sidebar />
            <Content />
        </div>
    )
}