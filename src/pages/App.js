import logo from '../logo.svg';
import '../App.css';
import {Breadcrumb, Button, Cascader, Divider, Dropdown, Menu, Space, Switch} from "antd";
import Input from "antd/es/input/Input";
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import {useState} from "react";
import MainMenu from "./MainMenu";

const App = () => {
    return (
        <Layout>
            <Header className='header'>
                <MainMenu/>
            </Header>

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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                        probare, quae sunt a te dicta? Refert tamen, quo modo.
                    </p>
                    <Divider orientation="right">Right Text</Divider>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                        probare, quae sunt a te dicta? Refert tamen, quo modo.
                    </p>
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista*/}
                    {/*    probare, quae sunt a te dicta? Refert tamen, quo modo.*/}
                    {/*</p>*/}
                    {/*Content*/}
                </div>
            </Content>
            <Footer
                // className='footer'
            >
                Какая-то херня ©2022 Created by Nikich 🥰 ❤
            </Footer>
        </Layout>
    )
};

export default App;