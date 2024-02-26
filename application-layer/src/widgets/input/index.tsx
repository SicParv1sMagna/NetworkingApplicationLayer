import { TextField, TextFieldProps, colors } from '@mui/material';
import './index.scss';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { SendFab } from '../../entity/Buttons';

const ColorTextField = styled(TextField)<TextFieldProps>(() => ({
    color: blue[500],
    width: '95%',
    'fieldset': {
        border: '2px solid',
        borderColor: blue[100],
        borderRadius: '10px',
    },
}));

const MessageInput = (value: any) => {
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