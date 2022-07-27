import logo from '../logo.svg';
import '../App.css';
import {Breadcrumb, Button, Cascader, Divider, Dropdown, Menu, Space, Switch} from "antd";
import Input from "antd/es/input/Input";
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import {useState} from "react";

const FooterInfo = () => {
    return (
        <Footer
            // className='footer'
        >
            Какая-то херня ©2022 Created by Nikich 🥰 ❤
        </Footer>
    )
};

export default FooterInfo;