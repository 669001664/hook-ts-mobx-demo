import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "antd";
import PreButton from "../Buttons/PreButton";
import NextButton from "../Buttons/NextButton";
import { Button } from "antd";
import styles from './style.module.css'
import ROUTES from "../../router";

const { Header } = Layout;
const HeaderBar: React.FC = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const handleForward = () => navigate(1);
  const handleLogin = () => navigate(ROUTES.LOGIN)
  return (
    <Header className={styles.header}
      style={{ position: 'fixed', width: 'calc(100% - 150px)' }}>
      <PreButton onClick={handleBack} />
      <NextButton className={'ml-4'} onClick={handleForward} />
      <Button
        className={'ml-auto mr-5'}
        type="default"
        shape="round"
        onClick={handleLogin}
      >
        登录
      </Button>
    </Header>
  )
}

export default HeaderBar