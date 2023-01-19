import useFetch from "../hooks/useFetch";
import BankData from "../components/bank/BankData";

const DataBank = () => {
  const {
    data: banks,
    isPending,
    error,
  } = useFetch("http://localhost:5005/fake/datom/get");
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {banks && <BankData banks={banks} />}
    </>
  );
};

export default DataBank;
