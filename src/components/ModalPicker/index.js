import React from 'react'
import{Text, View, TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import styles from './style'

const OPTIONS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const ModalPicker = (props) => {

    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setDay(option);
    }

    const option = OPTIONS.map((item, index) => {
        return(
            <TouchableOpacity
            style={styles.option}
            key={index}
            onPress={()=> onPressItem(item)}>
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })
    return(
        <TouchableOpacity
        onPress={()=> props.changeModalVisibility(false)}
        style={styles.container}
        >
            <View 
            style={
             {width: WIDTH/3, height: HEIGHT/3, 
             backgroundColor:'#DEE2E6',
             borderRadius: 10,
             }}>

                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

export {ModalPicker}