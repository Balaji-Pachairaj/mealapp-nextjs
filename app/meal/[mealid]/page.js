import Link from "next/link";
import React from "react";

const page = ({ params }) => {
     return (
          <div>
               Meal id <p>{params.mealid} </p>
              
          </div>
     );
};

export default page;
