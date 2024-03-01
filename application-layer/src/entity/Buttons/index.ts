import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { Fab, FabProps } from '@mui/material';

export const LightButton = styled(Button)<ButtonProps>(() => ({
    color: blue[500],
    borderColor: blue[300],
    '&:hover': {
        borderColor: blue[300],
        backgroundColor: blue[50],
    },
}));

export const DarkButton = styled(Button)<ButtonProps>(() => ({
    backgroundColor: blue[500],
    width: '100%',
    color: 'white',
    fontWeight: 600,
    '&:hover': {
        backgroundColor: blue[600],
    },
}));

export const SendFab = styled(Fab)<FabProps>(() => ({
    backgroundColor: blue[500],
    width: '50px',
    height: '50px',
    boxShadow: 'none',
    color: "white",
    '&:hover': {
        backgroundColor: blue[600],
    },
    '&:disabled': {
        backgroundColor: blue[100],
        color: 'white',
    },
    '&:focus': {
        boxShadow: 'none',
    },
}));