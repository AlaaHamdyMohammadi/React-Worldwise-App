import { Link } from "react-router-dom";

import AppNav from "../components/AppNav";
//import PageNav from "../components/PageNav"

function AppLayout() {
  return (
    <div>
      <AppNav />
      <h1>AppLayout</h1>
      <Link to="/">HomePage</Link>
    </div>
  );
}

export default AppLayout;
