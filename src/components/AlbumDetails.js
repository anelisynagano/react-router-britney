const AlbumDetails = ({ routerProps, albums }) => {
  console.log(routerProps.match.params.id);
  console.log(albums);

  const matchAlbum = albums.find(
    (album) => album.id === +routerProps.match.params.id
  );

  console.log(matchAlbum);

  return (
    <>
      <h1>{matchAlbum.name}</h1>
      <img src={matchAlbum.albumCover} alt='' width='200px' />
      <p>Release: {matchAlbum.release}</p>
      <p>Length: {matchAlbum.length}</p>
    </>
  );
};

export default AlbumDetails;
