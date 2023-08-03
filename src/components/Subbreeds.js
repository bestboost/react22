import { useParams } from "react-router-dom";

export const Subbreeds = () => {
     const {dogId} = useParams();
          //   useEffect(() => {
//      HTTP request make, if you need
//   }, [])

  return <div>Subbreeds: {dogId}</div>
}