import { Link } from "react-router-dom";
import AlbumCard from "./AlbumCard";

const AlbumsList = ({ albums }) => {
  return (
    <div className='albums-container'>
      {albums.map((album) => (
        <Link to={`/albums/${album.id}`}>
          <AlbumCard key={album.albumCover} {...album} />
        </Link>
      ))}
    </div>
  );
};

export default AlbumsList;
