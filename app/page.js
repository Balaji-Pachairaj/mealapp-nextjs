import Link from "next/link";

export default function Home() {
     return (
          <main>
               <h1 style={{ color: "white", textAlign: "center" }}>
                    Time to get started!
               </h1>
               <p style={{
                textAlign : "center" ,
                fontSize : "40px"
               }}>
                    <Link href="/meal">Look at Meal page</Link>
               </p>
               <p style={{
                textAlign : "center" ,
                fontSize : "33px"
               }}>
                    <Link href="/meal/share">Share</Link>
               </p>
               <p style={{
                textAlign : "center" ,
                fontSize : "28px"
               }}>
                    <Link href="/community">Community</Link>
               </p>
          </main>
     );
}
