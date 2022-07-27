import logo from '../logo.svg';
import '../App.css';
import {Breadcrumb, Button, Cascader, Divider, Dropdown, Menu, Space, Switch} from "antd";
import Input from "antd/es/input/Input";
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import {useState} from "react";

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

    return (
        <Layout>
            <Header className='header'>
                <img src={logo} className='App-logo' alt='logo'/>
                <Menu
                    theme={theme}
                    mode="horizontal"
                    defaultSelectedKeys={['mail']}>
                    <Menu.Item key="mail" icon={<MailOutlined/>}>
                        Home
                    </Menu.Item>
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
        </Layout>
    )
};

export default MainMenu;