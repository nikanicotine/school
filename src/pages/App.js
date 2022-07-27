import '../App.css';
import Layout from "antd/es/layout/layout";
import MainMenu from "../components/MainMenu";
import FooterInfo from "../components/FooterInfo";
import HomePage from "./HomePage";
import BtnScrollUp from "../components/BtnScrollUp";

const App = () => {
    return (
        <Layout>
            <MainMenu/>
            <HomePage/>
            {/*<CurriculumPage/>*/}
            <BtnScrollUp/>
            <FooterInfo/>
        </Layout>
    )
};

export default App;