import Image from "next/image";
import logo from "../../public/assets/logos/logo.svg";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-center sm:justify-between">
      <div className="left h-10 sm:h-14 w-1/2">
        <Image src={logo} alt="logo" className="h-full" />
      </div>
      <div className="hidden sm:block right w-1/2 font-medium text-xl">
        <ul className="flex gap-16 justify-end mr-10">
          <Link href={"/"}><li className="cursor-pointer">Home</li></Link>
          <Link href={"/"}><li className="cursor-pointer">Farms</li></Link>
          <Link href={"/"}><li className="cursor-pointer">About Us</li></Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
