import logo from '../logo.svg';
import '../App.css';
import {Menu, Switch} from "antd";
import Header from "antd/es/layout/layout";
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import {useState} from "react";
import HomePage from "../pages/HomePage";

const MainMenu = () => {
    const [theme, setTheme] = useState('dark');
    const [current, setCurrent] = useState('1');

    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const menuItems = [
        {
            key: "mail",
            icon: <MailOutlined/>,
            label: 'Home'
        },
        {
            key: "SubMenu",
            icon: <SettingOutlined/>,
            label: 'Curriculum'
        }

    ]

    return (
        <Header className='header'>
            <img src={logo} className='App-logo' alt='logo'/>
            <Menu
                theme={theme}
                mode="horizontal"
                items={menuItems}
                defaultSelectedKeys={['mail']}
                onClick={HomePage}>
                <Menu.SubMenu key="SubMenu" title="Curriculum" icon={<SettingOutlined/>}>
                    <Menu.Item key="two" icon={<AppstoreOutlined/>}>
                        Navigation Two
                    </Menu.Item>
                    <Menu.Item key="three" icon={<AppstoreOutlined/>}>
                        Navigation Three
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.Item>
                    <Switch
                        checked={theme === 'dark'}
                        onChange={changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    />
                </Menu.Item>

            </Menu>
        </Header>
    )
};

export default MainMenu;