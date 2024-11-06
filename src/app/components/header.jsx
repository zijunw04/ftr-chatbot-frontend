import Image from "next/image";


export default function Header() {
  return (
    <div className="bg-white z-50 max-w-screen max-w-[100%] overflow-hidden border h-20 grid grid-cols-3 items-center font-medium justify-between">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between items-center">
          <Image alt="" src="/logo.png" width={271} height={228}  className="w-[36px] h-[30px]" />
        </div>

        <ul className=" md:flex hidden font-bold text-black mx-auto gap-20">
          <li className="flex items-center">
            <a className="text-center font-bold text-black hover:text-blue-500 ">Home</a>
          </li>
          <li className="flex items-center">
            <a className="text-center font-bold text-black hover:text-blue-500 ">NFL</a>
          </li>
          <li className="flex items-center">
            <a className="text-center font-bold text-black hover:text-blue-500 ">NBA</a>
          </li>
          <li className="flex items-center">
            <a className="text-center font-bold text-black hover:text-blue-500 ">MLB</a>
          </li>
        </ul>

      </div>
  );
}
