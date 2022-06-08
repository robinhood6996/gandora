import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { MetaMaskProvider } from "metamask-react";

import Layout from "./layouts";
import store from "./core/store/store";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Product from "./pages/Products";
import ProductDetal from "./pages/Products/ProductDetail";
import Marketplace from "./pages/Marketplace";
import MarketProducts from "./pages/Marketplace/marketproducts";
import NFTProductDetail from "./pages/Marketplace/NFTProductDetail";
import ProductFilterModal from "./pages/Marketplace/ProductfilterModal";
import UserSetting from './pages/User/setting';
import UserProfile from './pages/User/profile';
import UserInventory from './pages/User/inventory';
import News from "./pages/News";
import Gameplays from "./pages/Gameplay";
import Shoppingcart from "./pages/shopcart";
import StayTuned from "./pages/Upcoming/StayTuned";
import ComingYellow from "./pages/Upcoming/ComingYellow";

import ComingSoon from "./pages/Upcoming/ComingSoon";
import AuthProvider from "./context/AuthProvider";
import Activity from "./pages/Dashboard/DashboardActivities";
import Offers from "./components/Offers/Offers";
import DashboardCollection from "./pages/Dashboard/DashboardCollection";
import Dashboard from "./pages/Dashboard/Dashboard";
import ItemDetails from "./pages/Dashboard/ItemDetails";
import DashboardFavourite from "./pages/Dashboard/DashboardFavourite";
import SingleCollection from "./pages/Dashboard/SingleCollection";
import DashboardActivities from "./pages/Dashboard/DashboardActivities";
import DashboardOffer from "./pages/Dashboard/DashboardOffer";
// const container = document.getElementById('root');
// // Create a root.
// const root = ReactDOM.createRoot(container);

ReactDOM.render(
  <MetaMaskProvider>
    <AuthProvider>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="map" element={<Map />} />
            <Route path="product" element={<Product />} />
            <Route path="product/detail/:id" element={<ProductDetal />} />

            <Route path="marketplace" element={<Marketplace />} />
            <Route path="marketplace/mproduct" element={<MarketProducts />} />
            <Route path="user/setting" element={<UserSetting />} />
            <Route path="user/profile" element={<UserProfile />} />
            <Route path="user/inventory" element={<UserInventory />} />
            <Route
              path="marketplace/productdetail/:id"
              element={<NFTProductDetail />}
            />
            <Route
              path="marketplace/ProductFilterModal"
              element={<ProductFilterModal />}
            />
            <Route path="news" element={<News />} />
            <Route path="gameplay" element={<Gameplays />} />
            <Route path="shopcart" element={<Shoppingcart />} />
            <Route path="stay" element={<ComingSoon />} />
            <Route path="swap" element={<ComingSoon />} />
            <Route path="activity" element={<Activity />} />
            <Route path="offers" element={<Offers />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/collection" element={<DashboardCollection />} />
            <Route path="dashboard/collection/id" element={<SingleCollection />} />
            <Route path="dashboard/collection/1/details" element={<ItemDetails />} />
            <Route path="dashboard/itemdetails" element={<ItemDetails />} />
            <Route path="dashboard/favourite" element={<DashboardFavourite />} />
            <Route path="dashboard/activity" element={<DashboardActivities />} />
            <Route path="dashboard/offers" element={<DashboardOffer />} />
          </Routes>
        </Layout>
      </Provider>
    </AuthProvider>
  </MetaMaskProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
