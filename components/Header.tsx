import Link from "next/link";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import NavMenu from "./NavMenu";
import { navData } from "@/lib/data";
import { cn } from "@/lib/utils";
import Socials from "./Socials";
import { socialLinks } from "@/lib/data";
import HeaderAnimation from "./animations/HeaderAnimation";

const Header = () => {
  return (
    <>
      <HeaderAnimation>
        <div className={cn("inner-header layout !overflow-visible !py-0")}>
          <Link href="/">
            <Logo className="h-[50px] w-[100px] text-primary-500 md:h-[60px] md:w-[120px]" objectFit="contain" />
          </Link>
          <NavMenu items={navData.items} className="hidden md:flex" />
          <Socials
            links={socialLinks}
            className="hidden gap-2 text-lg text-black md:flex"
          />
          <HamburgerMenu className="md:hidden">
            <div className="flex h-full flex-col">
              <Link href="/">
                <Logo className="h-[50px] text-black" variant="icon" objectFit="contain" />
              </Link>
              <NavMenu items={navData.items} isMobile={true} className="mt-5" />
              <Socials
                links={socialLinks}
                className="my-4 flex gap-2 px-5 text-xl text-black md:hidden"
              />
            </div>
          </HamburgerMenu>
        </div>
      </HeaderAnimation>
    </>
  );
};

export default Header;