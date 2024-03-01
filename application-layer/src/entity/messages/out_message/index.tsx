import './index.scss';
import sent from '../../../assets/icons/sent-dark.svg';
import error from '../../../assets/icons/error.svg'

const OutMessage = (props: any) => {
    return (
        <div className='out-message'>
            {
                props.status == 'sent'
                    ?
                    <div className="out-message--body">
                        <h3>{props.name}</h3>
                        <h2>{props.text}</h2>
                        <p>
                            {props.time}
                            <img src={sent} />
                        </p>
                    </div>
                    :
                    <div className="out-message--body--error">
                        <h3>{props.name}</h3>
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

export default OutMessage;