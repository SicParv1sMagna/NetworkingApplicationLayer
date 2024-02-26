import './index.scss';
import logo from '../../assets/icons/plane-icon.svg';

const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} />
            <h1>FlyChat</h1>
        </div>
    )
}

export default Logo;