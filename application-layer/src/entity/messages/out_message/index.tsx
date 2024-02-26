import './index.scss';
import sent from '../../../assets/icons/sent-dark.svg';

const OutMessage = (props: any) => {
    return (
        <div className='out-message'>
            <div className="out-message--body">
                <h3>{props.name}</h3>
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

export default OutMessage;