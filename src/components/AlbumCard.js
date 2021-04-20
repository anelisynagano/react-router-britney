const AlbumCard = ({ albumCover, name }) => {
  return <img src={albumCover} alt={`${name} album cover`} />;
};

export default AlbumCard;
