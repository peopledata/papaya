import useFetch from "../hooks/useFetch";
import BankData from "../components/bank/BankData";

const DataBank = () => {
  const {
    data: banks,
    isPending,
    error,
  } = useFetch(
    "http://localhost:5005/fake/datom/get/?key=1e657976fa6660ae659835446d884bdec9cf722bbb1ef64aab09bcb185b7ea92"
  );
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {banks && <BankData banks={banks} />}
    </>
  );
};

export default DataBank;
