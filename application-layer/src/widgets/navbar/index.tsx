import './index.scss';
import { LightButton } from '../../entity/buttons';
import Logo from '../../entity/logo';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Logo />
            <div className='log-out'>
                <p>Вы вошли как <b>VarTy</b></p>
                <LightButton variant="outlined" endIcon={<ArrowForwardIosOutlinedIcon />}>Выйти</LightButton>
            </div>
        </div>
    )
}

export default Navbar;