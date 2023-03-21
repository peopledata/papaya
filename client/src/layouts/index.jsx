import { Outlet, useLocation } from "umi";
import { Header, Wrapper } from "../components";
import { pathToRegexp } from "path-to-regexp";

export default function Layout() {
  const location = useLocation();
  if (
    pathToRegexp("/market").exec(location.pathname) ||
    pathToRegexp("/market/:id").exec(location.pathname)
  ) {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }

  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
}
// 通过 Outlet 渲染子路由
