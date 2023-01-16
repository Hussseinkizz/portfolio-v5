import Button from "components/Button";
import { useStore } from "hooks/useStore";
import Link from "next/link";
import * as Icons from "react-icons/hi";
import NavMenu from "./NavMenu";

const AppBar = () => {
  const {
    store: { showNav },
    setStore,
  } = useStore();

  const toggleNav = () => {
    setStore({ type: "TOGGLE_NAV" });
  };

  return (
    <header className="_fixed-on-mobile w-full rounded-b-3xl bg-black text-white shadow-lg">
      <nav className="py-4 px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Nav Left */}
          <Link
            href="/"
            passHref
            className="flex items-center justify-center gap-2"
          >
            <h1 className="text-xl font-bold tracking-wider transition-opacity ease-in-out hover:opacity-80 md:text-2xl">
              👨‍💻Hussein Kizz
            </h1>
          </Link>
          {/* Nav Center */}
          <div className="hidden items-center justify-center gap-8 lg:flex">
            <Link
              href="/#about"
              passHref
              className="flex items-center justify-center gap-2"
            >
              <span className="_navbar-link--hoverable">About</span>
            </Link>
            <Link
              href="/#projects"
              passHref
              className="flex items-center justify-center gap-2"
            >
              <span className="_navbar-link--hoverable">Projects</span>
            </Link>
            <Link
              href="/#contact"
              passHref
              className="flex items-center justify-center gap-2"
            >
              <span className="_navbar-link--hoverable">Contact</span>
            </Link>
            <Link
              href="/#services"
              passHref
              className="flex items-center justify-center gap-2"
            >
              <span className="_navbar-link--hoverable">Services</span>
            </Link>
          </div>
          {/* Nav Right */}
          <div className="hidden items-center justify-center gap-8 md:flex">
            <Link
              href="/guestbook"
              passHref
              className="flex items-center justify-center gap-2"
            >
              <span className="group flex items-center gap-2 bg-gradient-to-r from-rose-400  via-fuchsia-500 to-indigo-500 bg-clip-text text-lg font-semibold text-transparent transition-colors ease-linear hover:bg-gradient-to-r hover:from-rose-200 hover:via-fuchsia-300 hover:to-indigo-300 hover:bg-clip-text hover:text-transparent">
                <Icons.HiAnnotation className="h-6 w-6 text-rose-400 group-hover:text-rose-200" />
                Guest Book
              </span>
            </Link>
            <a
              download=""
              href="../../public/assets/Hussein_Kizza_August_2022.pdf"
            >
              <Button>
                <Icons.HiArrowDown className="absolute left-0 mx-3 h-6 w-6 rounded-full bg-amber-400 p-1" />
                <span className="ml-6">Resume</span>
              </Button>
            </a>
          </div>
          {/* Mobile Nav */}
          <div className="relative flex items-center justify-center gap-4 lg:hidden">
            <Link
              href="/guestbook"
              passHref
              className="flex items-center justify-center gap-2"
            >
              <Icons.HiAnnotation className="h-6 w-6 text-rose-400 hover:text-rose-200" />
            </Link>
            <a
              download=""
              href="../../public/assets/Hussein_Kizza_August_2022.pdf"
            >
              <Icons.HiArrowCircleDown className="h-6 w-6 text-fuchsia-400 hover:text-fuchsia-200" />
            </a>
            {!showNav ? (
              <Icons.HiMenuAlt3
                className="h-6 w-6 text-indigo-400 hover:text-indigo-200"
                onClick={toggleNav}
              />
            ) : (
              <Icons.HiXCircle
                className="h-6 w-6 text-indigo-400 hover:text-indigo-200"
                onClick={toggleNav}
              />
            )}
            {showNav && <NavMenu />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
