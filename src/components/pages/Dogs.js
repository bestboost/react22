import {Link} from 'react-router-dom';

const Dogs = () => {
     // useEffect(() => {
          //      HTTP request make, if you need
          //   }, [])

     return <div>{['dog-1', 'dog-2', 'dog-3', 'dog-4',
'dog-5' ].map(dog =>{
     return <Link key={dog} to={`${dog}`}>
                 {dog}
            </Link>
})}</div>     
};

export default Dogs;