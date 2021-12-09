import React from 'react'
import { View, Image} from 'react-native'
import styles from '../src/components/RegisterForm/style';
import RegisterForm from '../src/components/RegisterForm'

export default function Register({ navigation }){

    function navigateLogin(){
        navigation.navigate('Login')
    }

    return(
        <View>
            <View style={styles.boxLogo}>
                <Image 
                style={styles.logo}
                source={require('../src/components/Title/textlogo.png')}/>
            </View>
            <RegisterForm navigateLogin={navigateLogin} />
        </View>
    );
}