import Link from "next/link";
import Image from "next/image";

interface Mobilenav {
  name: string;
  route: string;
}

const FullPageNav = ({ navList, setIsOpen }: any) => {
  return (
    <div className="fixed inset-0 bg-gray-800 p-4 flex flex-col items-center gap-12 z-50">
      <button
        onClick={() => setIsOpen(false)}
        className="self-end text-white"
      >
        <Image
          src="/cancel.png"
          alt="Close Menu"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </button>
      <ul className="grid grid-cols-2 gap-6">
        {navList.map((nav: Mobilenav) => (
          <li
            key={nav.name}
            className="text-white text-2xl md:text-4xl font-semibold transition-transform transform hover:scale-110 bg-gray-700 rounded-lg p-4 text-center"
          >
            <Link href={nav.route}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FullPageNav;
