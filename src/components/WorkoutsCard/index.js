import React from 'react'
import { View, TouchableOpacity, Text} from 'react-native'
import styles from './style'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5'
import { api } from '../../Services/Api';
 
export default function WorkoutsCard({ workoutId, workoutName, day, wasTrained, workouts, setWorkouts }){
  console.log({ workoutId });
  const handleToggleWorkout = async () => {
    setWorkouts((prevWorkouts) => (
      prevWorkouts.map((workout, index) => {
        const wasTrainedValue = workout.was_trained === 1 ? 0 : 1;
        if (workout.id === workoutId) {
          return {...workout, was_trained: wasTrainedValue};
        }
          return {...workout};
      })
    ));

    // Here I am toggling the value of was_trained column
    const { data: { message } } = await api.put(`/workouts/${workoutId}`);
    console.log({ message });
  }

  const handleDeleteWorkout = async () => {
    const newWorkouts = workouts.filter((workout) => workout.id !== workoutId);
    setWorkouts(newWorkouts);
    const { data: { message } } = await api.delete(`/workouts/${workoutId}`);
    console.log({ message });
  }
  return(
      <View
        style={{
          width:'90%',
          borderRadius: 7,
          backgroundColor: wasTrained === 1 ? '#CED4DA' : '#F8F9FA',
          height: 80,
          marginTop: 15,
          marginLeft: 16,
          paddingLeft: 10,
          paddingRight: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
          <View style={styles.infoContainer}>
            <View style={styles.infoDiv}>
              <IconFontAwesome name="dumbbell" style={{ width: 17 }} size={14} />
              <Text style={{ marginLeft: 8, fontWeight: 'bold' }}>{workoutName}</Text>
            </View>
            <View style={styles.infoDiv}>
              <IconFontAwesome name="calendar" style={{ width: 17 }} size={14} />
              <Text style={{ marginLeft: 8 }}>{day}</Text>
            </View>
          </View>
      
          <View style={{ display: 'flex', flexDirection: 'row'}}>
              <TouchableOpacity onPress={handleToggleWorkout}>
                <IconAnt name="checkcircle" style={{ color: wasTrained === 1 ? '#59E3BA' : '#0A1A15' }} size={22} />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={handleDeleteWorkout}>
                <IconAnt name="delete" size={22} style={{ marginLeft: 6, color: '#0A1A15' }}/>
              </TouchableOpacity>
          </View>
      </View>
  );
}