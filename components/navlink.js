"use client";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./navlink.module.css";
import Link from "next/link";
const Navlink = ({ href, children }) => {
     const path = usePathname();
     console.log(path);
     return (
          <nav className={classes.nav}>
               <Link
                    href={href}
                    className={path.startsWith(href) ? classes.active : ""}
               >
                    {children}
               </Link>
          </nav>
     );
};

export default Navlink;
