import { useParams, Link, Outlet } from "react-router-dom";

const DogDetails = () => {
   const {dogId} = useParams();

     //   useEffect(() => {
//      HTTP request make, if you need
//   }, [])

  return <>
           <h1 style={{fontSize: 50}}>DogDetails: {dogId}</h1>
           <ul>
               <li>
                  <Link to="subbreeds">Subbreeds</Link>
               </li>
               <li>
                  <Link to="gallery">Gallery</Link>
               </li>
           </ul>
           <Outlet />
         </>
};

export default DogDetails;