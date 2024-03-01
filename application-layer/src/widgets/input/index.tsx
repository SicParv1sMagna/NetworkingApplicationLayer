import { TextField, TextFieldProps } from '@mui/material';
import './index.scss';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { SendFab } from '../../entity/buttons';

const ColorTextField = styled(TextField)<TextFieldProps>(() => ({
    color: blue[500],
    width: '95%',
    'label': {
        fontFamily: 'Inter',
    },
    'fieldset': {
        border: '2px solid',
        borderColor: blue[100],
        borderRadius: '10px',
    },
}));

const MessageInput = () => {
    return (
        <form className='input-form'>
            <ColorTextField
                id="outlined-multiline-static"
                label="Сообщение"
                multiline
                maxRows={5}
            />
            <SendFab ><ArrowUpwardIcon /></SendFab>
        </form>
    )
}

export default MessageInput;