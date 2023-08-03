import { useRef, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";

const DogDetails = () => {
   const {dogId} = useParams();
   const location = useLocation();
   const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');


     //   useEffect(() => {
//      HTTP request make, if you need
//   }, [])

  return <>
           <h1 style={{fontSize: 50}}>DogDetails: {dogId}</h1>
           <Link to={backLinkLocationRef.current}>Back to collection</Link>
           <ul>
               <li>
                  <Link to="subbreeds">Subbreeds</Link>
               </li>
               <li>
                  <Link to="gallery">Gallery</Link>
               </li>
           </ul>
             <Suspense fallback={<div>LOADIN SUBPAGE ...</div>}>
                <Outlet />
             </Suspense>
         </>
};

export default DogDetails;