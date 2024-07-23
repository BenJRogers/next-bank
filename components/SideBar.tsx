'use client'

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = ({ user }: SiderbarProps) => {
const pathName = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
<Link href="/" className="mb-12 cursor-pointer items-center gap-2">
<Image src='/icons/logo.svg' width={34} height={34} alt="Next-Bank logo" className="size-[24px] max-xl:size-14"/>
<h1 className="sidebar-logo">Next Bank</h1>
</Link>
    {sidebarLinks.map((item) => {
      const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`);
        
      return (
        <Link href={item.route} key={item.label} className={cn('sidebar-link', {'bg-bank-gradient': isActive })}>
          {item.label}
        </Link>
      )
    })}
      </nav>
    </section>
  );
};

export default SideBar;
