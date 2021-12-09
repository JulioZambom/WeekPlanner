import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    boxForm:{
        width:'100%',
        height: '100%',
        bottom: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    form:{
        width: '100%',
        height: 'auto',
        marginTop: 10,
    },
    input:{
        width:'90%',
        borderRadius: 7,
        backgroundColor: '#DEE2E6',
        height: 40,
        marginTop: 10,
        marginLeft: 16,
        paddingLeft: 20,
        fontSize: 13,
    },
    button:{
        width:'90%',
        borderRadius: 7,
        height: 40,
        marginTop: 20,
        marginLeft: 16,
        fontSize: 13,
        backgroundColor: '#59e3ba',
        alignItems:'center',
        justifyContent:'center',
    },
    textButton:{
        fontSize: 15,
        color: 'white',
        fontWeight:'bold',
    },
    text:{
        fontSize: 25,
        color:'black',
        fontWeight: 'bold',
        marginTop: 25,
    },
    logo:{
        height: 35,
        width: '67%',
        resizeMode: 'stretch',
    },
    boxLogo:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingTop: '25%',
    },
    subtitleLink:{
        color: 'blue',
    },
})

export default styles