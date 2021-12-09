import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    boxWorkouts:{
        width:'90%',
        borderRadius: 7,
        backgroundColor: '#DEE2E6',
        height: 80,
        marginTop: 15,
        marginLeft: 16,
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    infoContainer: {
        display: 'flex',
    }, 
    infoDiv:  {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})

export default styles