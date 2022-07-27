import '../App.css';
import {UpOutlined} from '@ant-design/icons';

const BtnScrollUp = () => {
    const handlerScrollUp = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        }
    }
    return (
        <div  onClick={handlerScrollUp}><UpOutlined className='scroll-up'/></div>
    )
};

export default BtnScrollUp;