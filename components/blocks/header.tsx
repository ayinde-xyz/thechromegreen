import Image from "next/image";
import logo from "@/public/icon.png";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <Image
        src={logo}
        alt="The Chrome Green Club Logo"
        width={50}
        height={50}
      />
      <h1 className="text-2xl font-bold">The Chrome Green Club</h1>
    </header>
  );
};

export default Header;
