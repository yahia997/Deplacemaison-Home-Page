import React, {Suspense} from "react";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";

import { Loader } from "./loader";
import { NotFound } from "./404";

const Home = React.lazy(() => import('./home'));
const Nav = React.lazy(() => import('./nav'));
const Footer = React.lazy(() => import('./footer'));
const Cart = React.lazy(() => import('./cart'));
const Cursor = React.lazy(() => import('./cursor'));
const Shop = React.lazy(() => import('./shop-all'));
const Item = React.lazy(() => import('./product'));


const HomePage = () => {
  return (<Suspense fallback={<Loader/>}>
    <Home />
  </Suspense>);
}
const ShopPage = () => {
  return (<Suspense fallback={<Loader/>}>
    <Shop />
  </Suspense>);
}
const SingleItem = () => {
  return (<Suspense fallback={<Loader/>}>
    <Item />
  </Suspense>);
}

function App() {
  return <>
    <Router>
      <Nav/>
      <Cart/>
      <Cursor/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/product/:id" element={<SingleItem/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  </>
}

export default App;
