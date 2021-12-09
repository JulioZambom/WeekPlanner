import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Title({ navigateLogin }){
    const handleLogout = async () => {
        await AsyncStorage.removeItem('token');
        navigateLogin();
    }
    return(
        <View style={styles.boxTitle}>
            <Image 
                style={styles.logo}
                source={require('./textlogo.png')}
            />
        
            <TouchableOpacity onPress={handleLogout}>
                <Image
                    style={styles.logout}
                    source={require('../../../assets/exit.png')}
                    onPress={handleLogout}
                />
            </TouchableOpacity>
        </View>
    );
}