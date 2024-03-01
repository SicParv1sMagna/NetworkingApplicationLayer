import './index.scss';
import { LightButton } from '../../entity/buttons';
import Logo from '../../entity/logo';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <Logo />
            <div className='log-out'>
                <p>Вы вошли как <b>VarTy</b></p>
                <LightButton variant="outlined" endIcon={<ArrowForwardIosOutlinedIcon />} onClick={() => navigate('/')}>Выйти</LightButton>
            </div>
        </div>
    )
}

export default Navbar;