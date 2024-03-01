import './index.scss';
import MessageInput from '../../widgets/input';
import InMessage from '../../entity/messages/in_message';
import OutMessage from '../../entity/messages/out_message';
import data from '../../const/messages.json';
import Navbar from '../../widgets/navbar';

const Chat = () => {
    return (
        <div className='chat'>
            <Navbar />
            <div className='chat--body'>
                <div className='messages'>
                    <div className='messages--list'>
                        {
                            data.messages.slice().reverse().map((message, index) => (
                                message.name === 'VarTy' ?
                                    <InMessage
                                        key={index}
                                        text={message.text}
                                        time={message.time}
                                        status={message.status}
                                    />
                                    :
                                    <OutMessage
                                        key={index}
                                        name={message.name}
                                        text={message.text}
                                        time={message.time}
                                        status={message.status}
                                    />
                            ))
                        }

                        <h1>Сегодня</h1>
                    </div>
                    <MessageInput />
                </div>
            </div>
        </div>
    )
}

export default Chat;