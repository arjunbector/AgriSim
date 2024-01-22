import Image from "next/image";
import logo from "../../public/assets/logos/logo.svg";
const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between">
      <div className="left h-14 w-1/2">
        <Image src={logo} alt="logo" className="h-full" />
      </div>
      <div className="hidden sm:block right w-1/2 font-medium text-xl">
        <ul className="flex gap-16 justify-end mr-10">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Farms</li>
          <li className="cursor-pointer">About Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
