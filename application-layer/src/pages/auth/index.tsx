import Logo from '../../entity/logo';
import './index.scss';
import { TextField, TextFieldProps } from '@mui/material';
import './index.scss';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { DarkButton } from '../../entity/buttons';
import { useNavigate } from "react-router-dom";

const ColorInput = styled(TextField)<TextFieldProps>(() => ({
    color: blue[500],
    width: '100%',
    'label': {
        fontFamily: 'Inter',
    },
    'fieldset': {
        border: '2px solid',
        borderColor: blue[100],
    },
}));

const Auth = () => {
    const navigate = useNavigate();
    return (
        <div className='auth'>
            <div className='auth-window'>
                <Logo />
                <p>Авторизуйтесь, чтобы начать общение</p>
                <ColorInput id="outlined-basic" variant="outlined" label='Ваш никнейм'/>
                <DarkButton onClick={()=>navigate('/chat')}>Войти</DarkButton>
            </div>
        </div>
    )
}

export default Auth;