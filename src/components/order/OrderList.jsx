import "./OrderList.css";

const OrderList = ({ orderlist }) => {
  return (
    <div className="order-list">
      <div className="order-header">
        <h1>我的订单</h1>
      </div>
      <table className="order-tb">
        {orderlist.map((order) => {
          return (
            <tbody className="order-item" key={order.id}>
              <tr className="sep-row">
                <td colspan="5"></td>
              </tr>
              <tr className="tr-th">
                <td colspan="5">
                  <span className="gap"></span>
                  <span className="dealtime" title={order.pay_time}>
                    {order.pay_time}
                  </span>
                  <span className="number">订单号：{order.order_id}</span>

                  <div className="tr-operate">
                    <span className="order-shop">
                      <span className="shop-txt">{order.platform}</span>
                    </span>
                  </div>
                </td>
              </tr>
              {order.products.map((product) => {
                return (
                  <tr className="tr-bd" key={product.id}>
                    <td>
                      <div className="goods-item">
                        <div className="p-img">
                          <a
                            href={product.url}
                            target="_blank"
                            title={product.name}
                          >
                            <img
                              src={product.image_url}
                              alt={product.name}
                              width="300"
                              height="300"
                            />
                          </a>
                        </div>
                        <div className="p-name">
                          <a
                            href={product.url}
                            className="a-link"
                            target="_blank"
                            title={product.name}
                          >
                            {product.name}
                          </a>
                        </div>
                        <div class="p-extra"></div>
                      </div>
                      <div className="goods-number">x{product.num}</div>

                      <div className="goods-repair"></div>
                      <div className="clr"></div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default OrderList;
