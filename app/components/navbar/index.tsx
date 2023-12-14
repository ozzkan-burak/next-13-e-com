import CartCount from "./CaartCount";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Search from "./Search";
import User from "./User";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <Search />
      <CartCount />
      <User />
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
