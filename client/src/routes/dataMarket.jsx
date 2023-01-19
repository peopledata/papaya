import useFetch from "../hooks/useFetch";
import MarketList from "../components/market/MarketList";

const DataMarket = () => {
  const {
    data: markets,
    isPending,
    error,
  } = useFetch(`${process.env.REACT_APP_API_BASE_URL}/market`);
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {markets && <MarketList markets={markets} />}
    </>
  );
};

export default DataMarket;
