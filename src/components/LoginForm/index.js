import React, { useEffect } from 'react'
import { SafeAreaView, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style'
import { api } from '../../Services/Api'
import axios from 'axios';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AlertButton from '../AlertButton';

export default function LoginForm({ navigateRegister, navigateHome }){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async () =>{
        if(email === '' || password === '' ){
            return AlertButton('Alerta', 'Não deixe nenhum campo vazio!'); 
        }

        const { data } = await api.post('/auth/login', {email, password});
        await AsyncStorage.setItem('token', data.token);
        console.log(data);
        navigateHome();
    }


    
    useEffect(() => {
        console.log(email,password);
    }, [email,password]);


    return(
        <SafeAreaView style={styles.boxForm}>
            <Text style={styles.text}>Conecte-se</Text>

            <TouchableOpacity onPress={navigateRegister}>
                <Text>Ainda não tem conta? <Text style={{color: 'blue', textDecorationLine:'underline'}}>Registrar</Text></Text>
            </TouchableOpacity>

            <SafeAreaView style={styles.form}>
               <TextInput
               onChangeText={(e)=>setEmail(e)}
               style={styles.input}
               placeholder="Insira seu email:">
               </TextInput>

               <TextInput
               onChangeText={(e)=>setPassword(e)}
               style={styles.input}
               placeholder="Insira sua senha:">
               </TextInput>

               <TouchableOpacity 
                onPress={handleSubmit}
                style={styles.button}>
                  <Text style={styles.textButton}>Entrar</Text>
               </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    );
}