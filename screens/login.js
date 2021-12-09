import React from 'react'
import {View, Image} from 'react-native'
import LoginForm from '../src/components/LoginForm'
import styles from '../src/components/LoginForm/style';

export default function Login({navigation}){
    
    function navigateRegister(){
        navigation.navigate('Register');
    }

    function navigateHome(){
        navigation.navigate('Home');
    }

    return(
        <View>
            <View style={styles.boxLogo}>
            <Image 
            style={styles.logo}
            source={require('../src/components/Title/textlogo.png')}/>
            </View>
            <LoginForm navigateRegister={navigateRegister} navigateHome={navigateHome} />
        </View>
    );
}