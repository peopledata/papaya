import { useNavigate } from "react-router-dom";
import "./MarketList.scss";

const MarketList = ({ markets }) => {
  const navigate = useNavigate();
  const goMint = (market) => {
    navigate(`/${market.type}`);
  };
  return (
    <div className="market-list">
      <div className="market-header">
        <h1>数据消费者</h1>
      </div>
      <div className="market-container">
        {markets.map((item, idx) => {
          return (
            <div className="market-item" key={idx}>
              <img className="market-logo" src={item.logo} alt={item.name} />
              <div className="market-content">
                <h2 className="market-title">{item.name}</h2>
                <span className="market-desc">{item.description}</span>
              </div>
              <div className="market-action">
                <button onClick={() => goMint(item)} className="btn-mint">
                  MINT
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketList;
