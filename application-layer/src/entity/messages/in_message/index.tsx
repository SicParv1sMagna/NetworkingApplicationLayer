import './index.scss';
import sent from '../../../assets/icons/sent-light.svg';

const InMessage = (props: any) => {
    return (
        <div className='in-message'>
            <div className="in-message--body">
                <h2>{props.text}</h2>
                <p>
                    {props.time}
                    {
                        props.status === 'sent' ? <img src={sent} /> : null
                    }
                </p>
            </div>
        </div>
    )
}

export default InMessage;