import { Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/player">Player</Link>
        <br />
        <Link to="/reader">Reader</Link>
        <br />
        <Link to="images">Images</Link>
      </nav>
    </div>
  );
};
