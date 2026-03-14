import { NavLink } from "react-router-dom"

import logo from '../assets/f1-logo.svg'

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => (isActive ? 'active' : '') }>Home</NavLink></li>
                    <li><NavLink to="/standings" className={({isActive}) => (isActive ? 'active' : '') }>Standings</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}