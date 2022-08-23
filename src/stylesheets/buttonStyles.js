export const buttonDesign = {borderColor: 'rgb(117, 154, 255)', color: 'rgb(117, 154, 255)',
    '&:hover': {
        backgroundColor: 'rgb(117, 154, 255)',
        color: '#fff',
    },
    "&.active": {
      background:'black',
    },
    ['@media (max-width:1336px)']: {
        fontSize: '12px'
    },
    ['@media (max-width:1022px)']: {
        fontSize: '10px'
    }
};

export const buttonDesignActive = {borderColor: 'rgb(117, 154, 255)', color: '#fff', backgroundColor: 'rgb(117, 154, 255)',
    '&:hover': {
        backgroundColor: 'rgb(117, 154, 255)',
        color: '#fff',
        borderColor: 'rgb(117, 154, 255)'
    },
    "&.active": {
      background:'black',
    },
    ['@media (max-width:1336px)']: {
        fontSize: '12px'
    },
    ['@media (max-width:1022px)']: {
        fontSize: '10px'
    }
};