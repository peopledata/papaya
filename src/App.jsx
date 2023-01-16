import { Link, Outlet } from "react-router-dom";
import { Header, Wrapper } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DataDAOConsume from "./routes/dataDAOConsume";
import DataBank from "./routes/dataBank";
import DataHome from "./routes/dataHome";
import DataPhoto from "./routes/dataPhoto";
import DataMarket from "./routes/dataMarket";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<DataHome />}></Route>
          <Route path="/bank" element={<DataBank />}></Route>
          <Route path="/photo" element={<DataPhoto />}></Route>
          <Route path="/consume" element={<DataDAOConsume />}></Route>
          <Route path="/market" element={<DataMarket />}></Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}
