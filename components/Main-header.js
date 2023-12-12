import React from "react";
import Image from "next/image";
import classes from "@/components/main-header.module.css";
import logo from "@/assets/logo.png";
import Link from "next/link";
import HeaderBackground from "./HeaderBackground";

import Navlink from "./navlink";

const Mainheader = () => {
     return (
          <>
               <HeaderBackground />
               <header className={classes.header}>
                    <Link href="/" className={classes.logo}>
                         <Image src={logo} alt="asdf" priority />
                         Next js Order food and Eat
                    </Link>

                    <nav className={classes.nav}>
                         <ul>
                              <li>
                                   <Navlink href="/meal">Browse Meals</Navlink>
                              </li>
                         </ul>
                         <ul>
                              <li>
                                   <Navlink href="/community">
                                        Foodies Community
                                   </Navlink>
                              </li>
                         </ul>
                    </nav>
               </header>
          </>
     );
};

export default Mainheader;
