import Image from "next/image";
import otalogo from "./assets/images/OTA-logo.png";
import kingdom from "../app/assets/images/Kingdom.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Link from "next/link";
export default function Home() {
  return (
    <main className="container h-screen w-full ">
      <div className=" flex justify-center gap-[750px] items-center">
        <Image
          src={otalogo}
          alt="OTA-logo"
          className="size-32 object-contain"
        ></Image>
        <div className="flex gap-10">
          <div className="flex items-center justify-center gap-1">
            <span>
              <FaPhoneAlt />
            </span>
            <p>+971509517784</p>
          </div>
          <button className="text-sm border-2 px-3  py-1 rounded-3xl">
            Register as an agent
          </button>
        </div>
      </div>
      <div className="max-w-[900px] h-[600px] bg-secondary grid grid-cols-2 items-center gap-20 p-5 rounded-2xl mx-auto">
        <div>
          <Image
            className="w-[400px] h-[500px] object-cover rounded-2xl"
            src={kingdom}
            alt="dubai"
          ></Image>
        </div>
        <div className="max-w-80 grid gap-5">
          <h1 className="text-5xl font-bold text-brand-color">Login</h1>
          <p className="text-gray-400">
            Welcome to our login page its new travel
          </p>
          <form action="" className="space-y-6 text-white">
            <div className="relative">
              <div className="absolute top-1 left-1 text-brand-color rounded-full flex items-center justify-center">
                <MdOutlineEmail className="size-7" />
              </div>
              <input
                className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-primary focus:drop-shadow-lg"
                type="email"
                name="email"
                placeholder="Enter Your Email id"
              />
            </div>

            <div className="relative">
              <div className="absolute top-1 left-1 text-brand-color rounded-full flex items-center justify-center">
                <RiLockPasswordLine className="size-7" />
              </div>
              <input
                className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-primary focus:drop-shadow-lg"
                type="password"
                name="email"
                placeholder="Enter your Passowrd"
              />
            </div>
            <button className="rounded-full w-80 flex text-center items-center bg-primary py-2 pl-32 ">
              Sign in{" "}
              <span className="pl-3">
                <HiArrowLongRight />
              </span>
            </button>
          </form>
          <div className="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
            <p>
              Don`t Have an Account{" "}
              <Link href={""}>
                <span className="text-brand-color">Signup</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* <svg className="size-10 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1qopiqq" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GppGoodOutlinedIcon"><path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.12 6 2.12v4.78zm-9.18-.5L7.4 12l3.54 3.54 5.66-5.66-1.41-1.41-4.24 4.24-2.13-2.12z"></path></svg> */}
    </main>
  );
}
