export const CertCard = {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 3,
    //overflowY: 'auto',
    color: '#fff',
    height: 250,
    '&:hover': {
        transition: 'all 0.1s linear',
        backgroundColor: '#424549',
        color: '#fff',
    },
    ['@media only screen and (max-width: 900px)']:{
        marginLeft: 2,
        marginRight: 2,
        padding: 0,
        textAlign: 'center',
        paddingTop: '15%'
    }
};

export const certButton = {
    ['@media only screen and (max-width: 900px)']:{
        justifyContent: 'center',
    }
}