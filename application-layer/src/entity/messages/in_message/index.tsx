import './index.scss';
import sent from '../../../assets/icons/sent-light.svg';
import error from '../../../assets/icons/error.svg'


const InMessage = (props: any) => {
    return (
        <div className='in-message'>
            {
                props.status == 'sent'
                    ?
                    <div className="in-message--body">
                        <h2>{props.text}</h2>
                        <p>
                            {props.time}
                            <img src={sent} />
                        </p>
                    </div>
                    :
                    <div className="in-message--body--error">
                        <h2>{props.text}</h2>
                        <p>
                            {props.time}
                            <img src={error} />
                        </p>
                    </div>
            }

        </div>
    )
}

export default InMessage;