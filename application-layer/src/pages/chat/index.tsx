import Logo from '../../entity/logo';
import './index.scss';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import MessageInput from '../../widgets/input';
import { LightButton } from '../../entity/buttons';
import InMessage from '../../entity/messages/in_message';
import OutMessage from '../../entity/messages/out_message';


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
            <div className='chat--body'>
                <div className='messages'>
                    <h1>Сегодня</h1>
                    <div className='messages--list'>
                        <OutMessage
                            name='Ирина'
                            text='Привет! А вы уже пользовались новым быстрым чатом FlyChat?'
                            time='22:07'
                            status='sent'
                        />
                        <InMessage
                            text='Всем привет!'
                            time='22:05'
                            status='sent'
                        />
                    </div>
                </div>
                <MessageInput />
            </div>
        </div>
    )
}

export default Chat;