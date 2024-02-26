import Logo from '../../entity/logo';
import './index.scss';
import { blue } from '@mui/material/colors';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import MessageInput from '../../widgets/input';
import { LightButton } from '../../entity/Buttons';


const Chat = () => {
    return (
        <div className='chat'>
            <div className='navbar'>
                <Logo />
                <div className='log-out'>
                    <p>Вы вошли как <b>VarTy</b></p>
                    <LightButton variant="outlined" endIcon={<ArrowForwardIosOutlinedIcon />}>Выйти</LightButton>
                </div>
            </div>
            <div className='chat--body' style={{ backgroundColor: blue[50] }}>
                <div className='massages'>
                    СООБЩЕНИЯ
                </div>
                <MessageInput />
            </div>
        </div>
    )
}

export default Chat;