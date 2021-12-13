import React from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import ROUTES from "../../router";
import { Layout } from "antd";
import styles from './style.module.css'
import logo from '../../assets/iamges/logo.png'

const { Sider } = Layout;

const SiderBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const go = (path: string): void => {
    navigate(path)
  }
  const siderBarList = [
    {
      id: 1,
      path: ROUTES.HOME_DISCOVERY,
      title: '主页',
      icon: (
        <svg
          className={'mr-2'}
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      path: ROUTES.HOME_SEARCH,
      title: '搜索',
      icon: (
        <svg
          className={'mr-2'}
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
      ),
    }
  ]
  return (
    <Sider className={styles.root}>
      <div className={'mb-5'}>
        <img className={styles.logo} src={logo} alt="" />
      </div>
      {siderBarList.map(item => {
        return (
          <div key={item.id} className={`${styles.sideBarItem} ${'/' + item.path === location.pathname ? styles.sideBarItemActive : null}`}
            onClick={() => {
              go(item.path)
            }}>
            {item.icon}
            <span>{item.title}</span>
          </div>
        )
      })}
    </Sider>
  )
}

export default SiderBar

