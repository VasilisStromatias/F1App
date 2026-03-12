import { NavLink } from "react-router-dom"

export default function Sidebar(){
    return(
        <>
        <nav>
            <ul>
                <li><NavLink to="/" className={({isActive}) => (isActive ? 'active' : '') }>Home</NavLink></li>
                <li><NavLink to="/standings" className={({isActive}) => (isActive ? 'active' : '') }>Standings</NavLink></li>
            </ul>
        </nav>
        </>
    )
}