
import '../App.css';
import { Carousel, Divider} from "antd";
import {Content} from "antd/es/layout/layout";

const HomePage = () => {
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


                <Carousel effect="scrollx" autoplay>
                    <div>
                        {/*<Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"*/}
                        {/*     width={200}*/}
                        {/*       className='contentStyle'/>*/}
                        <h3 className='content-style'>1</h3>
                    </div>
                    <div>
                        <h3 className='content-style'>2</h3>
                    </div>
                    <div>
                        <h3 className='content-style'>3</h3>
                    </div>
                    <div>
                        <h3 className='content-style'>4</h3>
                    </div>
                </Carousel>

                <br/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
                <Divider orientation="right">Right Text</Divider>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>

            </div>
        </Content>
    )
};

export default HomePage;