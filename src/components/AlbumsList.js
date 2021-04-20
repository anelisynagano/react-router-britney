import AlbumCard from "./AlbumCard";

const AlbumsList = ({ albums }) => {
  return (
    <div className='albums-container'>
      {albums.map((album) => (
        <AlbumCard key={album.albumCover} {...album} />
      ))}
    </div>
  );
};

export default AlbumsList;
