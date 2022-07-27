import logo from '../logo.svg';
import '../App.css';
import {Breadcrumb, Button, Cascader, Divider, Dropdown, Menu, Space, Switch} from "antd";
import Input from "antd/es/input/Input";
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import {useState} from "react";
import MainMenu from "../components/MainMenu";
import FooterInfo from "../components/FooterInfo";

const CurriculumPage = () => {
    return (
            <Content
                className="site-layout"
                style={{
                    padding: '0 50px',
                    marginTop: 64,
                }}
            >
                <div
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        minHeight: 380,
                    }}
                >
                    <h1 style={{textAlign: 'center'}}>Hello</h1>
                    <p>
                        lalalallalalalalalala
                    </p>
                    <Divider orientation="right">Right Text</Divider>
                    <p>
                        balbalbalabl
                    </p>
                </div>
            </Content>
    )
};

export default CurriculumPage;