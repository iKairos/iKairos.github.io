import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
    height: '220px',
    overflowY: 'auto',
    '&:hover': {
        transition: 'all 0.1s linear',
        backgroundColor: '#424549',
        color: '#fff',
    },
    '::-webkit-scrollbar': {
        width: '10opx'
    },
    
    '::-webkit-scrollbar-track': {
        background: '#f1f1f1'
    },
    
    '::-webkit-scrollbar-thumb': {
        background: '#888'
    },
    
    '::-webkit-scrollbar-thumb:hover': {
        background: '#555'
    }
}));