import Logo from "../logo/Logo"
import NavIcon from "./navIcon/NavIcon"
import { default as NavLinks } from "./navLinks/NavLinks"

const Header = () => {
    return (
        <div className="bg-white flex items-center justify-center py-2 border-2 border-solid border-slate-100 container-app ">
            <Logo />
            <NavLinks />
            <NavIcon />
        </div>
    )
}
export default Header