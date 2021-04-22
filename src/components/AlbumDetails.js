const AlbumDetails = ({ routeProps, albums }) => {
  const foundAlbum = () => {
    return albums.find((album) => album.id === +routeProps.match.params.id);
  };

  return (
    <>
      <h1>{foundAlbum().name}</h1>
      <img src={foundAlbum().albumCover} alt='' width='200px' />
      <p>Release: {foundAlbum().release}</p>
      <p>Length: {foundAlbum().length}</p>
    </>
  );
};

export default AlbumDetails;
