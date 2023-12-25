import CartCount from "./CartCount";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Search from "./Search";
import User from "./User";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap3 md:gap-10 px-3 md:px:10 h-16 bg-orange-600 text-slate-100">
      <Logo />
      <Search />
      <CartCount />
      <User />
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
