import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="mb-6 bg-gray-50 shadow dark:bg-gray-800 md:mb-12">
      <div className="container mx-auto flex h-20 items-center justify-between px-5">
        <Logo />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
