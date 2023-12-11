import Link from "next/link";
import React from "react";

const page = () => {
     return (
          <div>
               <h1> Meal page</h1>
               <Link href="/meal/mealno1">meal no 1</Link>
               <Link href="/meal/mealno2">meal no 2</Link>
               <Link href="/meal/mealno3">meal no 3</Link>
               <Link href="/meal/share">Share</Link>
          </div>
     );
};

export default page;
