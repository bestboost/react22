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
           <Outlet />
         </main>
         <footer></footer>
     </div>
    
   )
};