import React, { Suspense } from "react";
import { Layout } from "antd";
import SiderBar from "../../components/SideMenu";
import Discovery from "./Discovery";
import Search from "./Search";
import ROUTES from "../../router";
import { Route, Routes } from "react-router-dom";
import HeaderBar from "../../components/Header";
const { Content } = Layout;

const Home: React.FC = () => {
  return (
    <Layout>
      <SiderBar />
      <Layout>
        <HeaderBar />
        <Content>
          <Suspense fallback={null}>
            <Routes>
              <Route path={ROUTES.HOME_DISCOVERY} element={<Discovery />} />
              <Route path={ROUTES.HOME_SEARCH} element={<Search />} />
            </Routes>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home