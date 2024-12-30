import { Link } from "react-router-dom";
import { BiLogoReact } from "react-icons/bi";

export default function NavBar() {
  return (
    <nav
      className="bg-slate-800 shadow-lg flex items-center 
    justify-around py-3 px-32 fixed top-0 left-0 w-full"
    >
      <Link to={"/"}>
        <span className="font-semibold text-lg flex items-center gap-3 text-blue-500">
          <BiLogoReact className="text-6xl hover:text-blue-300 hover:rotate-90 transition duration-300" />
          <span className="font-semibold text-2xl">React Router</span>
        </span>
      </Link>
      <div className="flex items-center gap-5 text-black">
        <Link
          to={"/"}
          className="py-1 px-3 text-large font-light text-white hover:text-sky-300 hover:bg-slate-700 transition duration-300"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="py-1 px-3 text-large font-light text-white hover:text-sky-300 hover:bg-slate-700 transition duration-300"
        >
          About
        </Link>
        <Link
          to={"/contact"}
          className="py-1 px-3 text-large font-light text-white hover:text-sky-300 hover:bg-slate-700 transition duration-300"
        >
          Contact
        </Link>
        <Link
          to={"/products"}
          className="py-1 px-3 text-large font-light text-white hover:text-sky-300 hover:bg-slate-700 transition duration-300"
        >
          Products
        </Link>
      </div>
    </nav>
  );
}
