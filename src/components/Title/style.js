import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    boxTitle:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 64,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: 'white'
    },
    logo:{
        resizeMode: 'contain',
        height: 35,
        width: 200,
        backgroundColor: 'white'
    },
    logout: {
        width: 24,
        height: 24,
        marginLeft: 16
    }
})

export default styles;