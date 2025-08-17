import menuLinks from "../../db/menu.json";
import { NavLink } from "react-router";

const NavBar = ({ isMobile = false, onItemClick }) => {
    if (isMobile) {
        return (
            <div className="flex flex-col space-y-2">
                {menuLinks.map(link => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        onClick={onItemClick}
                        className="text-white hover:text-neon-yellow px-3 py-2 rounded-md text-base font-medium transition-colors block"
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
        );
    }

    return (
        <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                {menuLinks.map(link => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        className="text-white hover:text-neon-yellow px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default NavBar;