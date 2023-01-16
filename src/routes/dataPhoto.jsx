import PhotoList from "../components/photo/PhotoList";
import useFetch from "../hooks/useFetch";

const DataPhoto = () => {
  const {
    data: photos,
    isPending,
    error,
  } = useFetch("http://localhost:8002/photos");
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {photos && <PhotoList photos={photos} />}
    </>
  );
};

export default DataPhoto;
