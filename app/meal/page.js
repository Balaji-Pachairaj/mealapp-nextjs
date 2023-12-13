import Link from "next/link";
import React from "react";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/MealGrid";

import { getMeals } from "@/lib/meal";

const page = async () => {
     const meals = await getMeals();
     return (
          <>
               <header className={classes.header}>
                    <h1>
                         Delicious meals, created{" "}
                         <span className={classes.highlight}>by you</span>
                    </h1>
                    <p>
                         Choose your favorite recipe and cook it yourself. It is
                         easy and fun!
                    </p>
                    <p className={classes.cta}>
                         <Link href="/meal/share">
                              Share Your Favorite recipe
                         </Link>
                    </p>
               </header>
               <main className={classes.main}>
                    <MealGrid meals={[]} />
               </main>
          </>
     );
};

export default page;
