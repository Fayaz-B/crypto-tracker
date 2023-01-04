import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Layout, ConfigProvider, Grid } from "antd";
import HeaderTop from "./components/HeaderTop";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import News from "./components/News";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";
import AllCurrencies from "./components/AllCurrencies";
import { Footer } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  FundOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to="/">Home</Link>, "/", <HomeOutlined />),
  getItem(
    <Link to="/exchanges">Exchanges</Link>,
    "/exchanges",
    <MoneyCollectOutlined />
  ),
  getItem(
    <Link to="/currencies">Crypto Currencies</Link>,
    "/currencies",
    <FundOutlined />
  ),
  getItem(<Link to="/news">Crypto News</Link>, "/news", <BulbOutlined />),
];

const { Content } = Layout;
const { useBreakpoint } = Grid;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  const screens = useBreakpoint();

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 4,
          colorTextBase: "#fff",
          fontFamily: "Inter",
          fontWeightStrong: 700,
          colorPrimary: "#AC6AEC",
          colorBgBase: "#2b2638",
          controlItemBgActive: "#AC6AEC",
        },
        components: {
          Button: {
            colorPrimary: "#AC6AEC",
            colorPrimaryHover: "#BB7FF5",
          },
          Table: {
            colorBgBase: "#ffff11",
          },
        },
      }}
    >
      <div className="main-wrapper">
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar
            screenBreak={screens.md}
            collapsed={collapsed}
            items={items}
            pathname={pathname}
            className=""
          />

          <div className="main">
            <Layout style={{ minHeight: "100vh" }} className="site-layout">
              <HeaderTop
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                screenBreak={screens.md}
                items={items}
                pathname={pathname}
              />
              <Content
                className="content-container"
                style={{ backgroundColor: "var(--main-bg)" }}
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/coins/:id" element={<CoinDetails />} />
                  <Route path="/exchanges" element={<Exchanges />} />
                  <Route
                    path="/currencies"
                    element={<AllCurrencies limited={false} />}
                  />
                </Routes>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Created with &#10084;&#65039; by Fayaz
              </Footer>
            </Layout>
          </div>
        </Layout>
      </div>
    </ConfigProvider>
  );
}

export default App;
