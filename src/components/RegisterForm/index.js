import React from 'react'
import { SafeAreaView, TextInput, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
import {api} from '../../Services/Api'
import {useState, useEffect} from 'react';
import alertButton from '../AlertButton';




export default function RegisterForm({ navigateLogin }){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        
    },[] );

    const handleSubmit = async () =>{


        if(name === '' || email === '' || password === '' ){
            return alertButton('Alerta', 'Não deixe nenhum campo vazio!'); 
        }

        const { data } = await api.post('/users', {name, email, password});
        console.log(data);
        navigateLogin();

    }



    return(
        <SafeAreaView style={styles.boxForm}>
            <Text style={styles.text}>Registre-se</Text>

            <TouchableOpacity onPress={navigateLogin}><Text>Já tem uma conta? <Text style={{color: 'blue', textDecorationLine:'underline'}}>Fazer login</Text></Text></TouchableOpacity>
            

            <SafeAreaView style={styles.form}>
               <TextInput
               onChangeText ={ (e)=> setName(e)}
               style={styles.input}
               placeholder="Insira um nome:">
               </TextInput>

               <TextInput
               onChangeText ={(e)=> setEmail(e)}
               style={styles.input}
               placeholder="Insira um email:">
               </TextInput>

               <TextInput
               onChangeText={(e)=> setPassword(e)}
               style={styles.input}
               placeholder="Insira uma senha">
               </TextInput>

               <TouchableOpacity  onPress={handleSubmit} style={styles.button}>
                  <Text style={styles.textButton}>Registrar</Text>
               </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    );
}