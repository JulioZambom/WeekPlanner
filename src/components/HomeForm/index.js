import React, {useState, useEffect} from 'react';
import {View, TextInput, ScrollView, Button, SafeAreaView, Modal, TouchableOpacity, Text, Image} from 'react-native';
import styles from './style';
import {ModalPicker} from '../ModalPicker/';
import {api} from '../../Services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WorkoutsCard from '../WorkoutsCard';
import AlertButton from '../AlertButton';

export default function HomeForm({ navigateLogin }){
    const [isModalVisible, setisModalVisible] = useState(false);
    const [workouts, setWorkouts] = useState([]);
    
    const [workoutName, setWorkoutName] = useState('');
    const [chooseDay, setchooseDay] = useState('Dia da semana');
    useEffect(() =>{
        (async () => {
            const tokenStorage = await AsyncStorage.getItem('token');
            console.log({tokenStorage});
            if(tokenStorage){
                api.defaults.headers['Authorization' ] = `Bearer ${tokenStorage}`;
            }

            const {data} = await api.get('/auth');
            console.log('Auth Data', data);

            if(!tokenStorage || data.auth === false){
                return navigateLogin();
            }

            const { data: { workouts } } = await api.get('/workouts');
            setWorkouts(workouts);
            console.log({ workouts });
        })()
    }, [] )

    const changeModalVisibility = (bool) => {
        setisModalVisible(bool);
    }

    function setDay(option) {
        setchooseDay(option)
    }

    const handleCreateWorkout = async () => {
        const hasWorkout = workouts.some((workout) => (
            workout.name.toLowerCase() === workoutName.toLowerCase() && workout.day === chooseDay
        ));

        if (workoutName === '' || chooseDay === '') {
            return AlertButton('Não deixe nenhum campo vazio');
        }

        if (workoutName.length > 48) {
            return AlertButton('Nome muito grande');
        }

        if (hasWorkout) {
            return AlertButton('Este treino já existe');
        }

        const { data } = await api.post('/workouts', { workoutName, day: chooseDay, createdAt: '1' });
        console.log('new workout created', data);
        setWorkouts([...workouts, data.user]);
    }

    return(
    <SafeAreaView style={styles.boxForm}>
        <SafeAreaView style={styles.form}>
              <TextInput
               style={styles.input}
               placeholder="Digite o nome do seu treino"
               onChangeText ={(e)=> setWorkoutName(e)}
               />

          <SafeAreaView style={styles.row}>
            <TouchableOpacity 
            onPress={() => changeModalVisibility(true)}
            style={styles.select}>
                <Text style={styles.selectText}>{chooseDay}</Text>
                <Image source={require('./down-arrow.png')}
                style={styles.chevronIcon}/>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={handleCreateWorkout}
              style={styles.button}>
                <Image 
                source={require('./add-list.png')}
                style={styles.icon}/>
            </TouchableOpacity>

          </SafeAreaView>
          <SafeAreaView style={styles.container}>
         <Modal
            transparent={true}
            animationType='fade'
            visible={isModalVisible}
            onRequestClose={() => changeModalVisibility(false)}
        >
        {/* ai calica, dima, porps, didi, bahia e zebs developers insanos */} 
          <ModalPicker
            changeModalVisibility={changeModalVisibility}
            setDay={setDay}
         />
         </Modal>
        </SafeAreaView>

        <View style={styles.workoutsContainer}>
            <ScrollView>
            {workouts.map((workout) => (
                <WorkoutsCard
                    key={workout.id}
                    workouts={workouts}
                    setWorkouts={setWorkouts}
                    workoutId={workout.id}
                    workoutName={workout.name}
                    day={workout.day}
                    wasTrained={workout.was_trained}
                />
            ))}
            </ScrollView>
        </View>
        </SafeAreaView>     
    </SafeAreaView>
    )}