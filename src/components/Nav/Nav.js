import "./Nav.scss"
import { NavLink } from "react-router-dom"

export default function Nav() {

    const ActiveLink = 'nav__activelink'

    return (
        <div className="nav">
            <NavLink to="/projects" className={({ isActive }) => isActive ? ActiveLink : 'tab'}>
                <p className="nav__titles">Projects</p>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? ActiveLink : 'tab'}>
                <p className="nav__titles">About Me</p>
            </NavLink>
            <NavLink to="/skills" className={({ isActive }) => isActive ? ActiveLink : 'tab'}>
                <p className="nav__titles">Skills</p>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? ActiveLink : 'tab'}>
                <p className="nav__titles">Contact</p>
            </NavLink>
        </div>
    )
}
