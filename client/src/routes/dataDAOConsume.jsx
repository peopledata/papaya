import OrderList from "../components/order/OrderList";
import useFetch from "../hooks/useFetch";

const DataDAOConsume = () => {
  const {
    data: orderlist,
    isPending,
    error,
  } = useFetch("http://localhost:8002/orderlist");
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {orderlist && <OrderList orderlist={orderlist} />}
    </div>
  );
};

export default DataDAOConsume;
