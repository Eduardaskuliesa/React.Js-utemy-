import Places from "./Places.jsx";
import { sortPlacesByDistance } from "../loc.js";
import Error from "./Error.jsx";
import { fetchAvailablePlaces } from "../http.js";
import useFetch from "../hooks/useFetch.js";

const fetchSortedPlaces = async () => {
  const places = await fetchAvailablePlaces();

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.longitude,
        position.coords.latitude
      );
      resolve(sortedPlaces);
    });
  });
};

export default function AvailablePlaces({ onSelectPlace }) {
  const { error, fetchedData, isFetching, setFetchedData } = useFetch(
    fetchSortedPlaces,
    []
  );

  if (error) {
    return <Error title="An error occured" message={error.message}></Error>;
  }

  return (
    <Places
      title="Available Places"
      places={fetchedData}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
