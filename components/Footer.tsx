import Link from "next/link";
import Logo from "./Logo";
import Socials from "./Socials";
import { socialLinks } from "@/lib/data";
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
                <Link href="https://www.google.com/maps/place/Far+East+Finance+Building/@1.2820124,103.8482106,17z/data=!3m2!4b1!5s0x31da177b7280585d:0x630491f32506cf33!4m14!1m7!3m6!1s0x14cadd7659685b97:0x9f8ad867e6e6cc0e!2sReform+Marine!8m2!3d40.8183382!4d29.296018!16s%2Fg%2F11w3tk9ws3!3m5!1s0x31da190e80fc602f:0x72001abb75a9ab1b!8m2!3d1.2820124!4d103.8507909!16s%2Fg%2F11c1wynrlk?entry=ttu&g_ep=EgoyMDI1MDkwMi4wIKXMDSoASAFQAw%3D%3D">
                  14 ROBINSON ROAD #08-01A FAR EAST FINANCE BUILDING S(048545)
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
