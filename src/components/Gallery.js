import { useParams } from "react-router-dom"

export const Gallery = () => {
     const {dogId} = useParams();
          //   useEffect(() => {
//      HTTP request make, if you need
//   }, [])

     return <div> Gallery: {dogId}</div>
}