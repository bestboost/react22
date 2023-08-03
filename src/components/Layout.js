import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
   return(
     <div>
          <header>
          <nav>
            <NavLink to="/" >Homework</NavLink>
              <br />
            <NavLink to="/dogs" >Collection</NavLink>
         </nav>
         </header>
         <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
         </main>
         <footer></footer>
     </div>
    
   )
};