import { socialLinks } from "@/lib/data";
import Link from "next/link";
import Logo from "./Logo";
import Socials from "./Socials";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="layout !py-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            <div className="flex flex-col gap-2">
              <Link href="/" scroll>
                <Logo className="h-[63px] w-[160px] text-white" />
              </Link>
              <span className="small text-white">
                文化咨询 | 解惑人生
              </span>
            </div>
            <ul className="small text-left text-white sm:text-right">
              <li>
                <Link href="mailto:mumingter@gmail.com">
                  mumingter@gmail.com
                </Link>
              </li>
              <li>
                <Link href="电话：80678577"> 电话：80678577</Link>
                <span> / </span>
                <Link href="QQ:1810297072"> QQ:1810297072</Link>
              </li>
              <li>
                <Link href="https://www.google.com/maps/place/The+Plaza/@1.299739,103.8582347,17z/data=!3m2!4b1!5s0x31da19cb74849851:0xf2fa3952cd1a6c56!4m6!3m5!1s0x31da19b1c7ff1ef5:0xd6bbfc39eaed8804!8m2!3d1.299739!4d103.860815!16s%2Fm%2F04047mz?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D">
                  7500A BEACH ROAD, #04-311, THE PLAZA, SINGAPORE 199591
                </Link>
              </li>
              <li>
                  工作时间：周一至周五 9:30-18:30
              </li>
            </ul>
          </div>
          <hr className="my-2" />
          <div className="flex flex-wrap items-center justify-between">
            <p className="small text-white">
              Copyright © {new Date().getFullYear()} Mumingter. All rights
              reserved.
            </p>
            <Socials
              links={socialLinks}
              className="mt-2 flex gap-2 text-white sm:mt-0"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
