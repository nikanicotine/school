import '../App.css';
import {Divider} from "antd";
import {Content} from "antd/es/layout/layout";

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