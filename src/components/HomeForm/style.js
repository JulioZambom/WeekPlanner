import { StyleSheet } from 'react-native'

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
        padding: 10,
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
        borderRadius: 7,
        height: 40,
        width: '34%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0A1A15',
    },
    row:{
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 16,
    },
    select:{
       backgroundColor: '#DEE2E6',
       width: '55%',
       marginRight: '5.5%',
       borderRadius: 7,
       flexDirection: 'row',
       alignItems: 'center',
    },
    selectText:{
        fontSize: 13,
        color: '#86868d',
        marginLeft: 20,
        opacity: 0.8,
    },
    icon:{
        padding: 10,
        margin: 10,
        height: 20,
        width: 20,
        resizeMode: 'stretch',
    },
    chevronIcon:{
        height: 17,
        width: 17,
        marginTop: 3,
        marginLeft: 5,
    },
    workoutsContainer: {
        marginTop: 32,
        height: '100%'
    }
})

export default styles