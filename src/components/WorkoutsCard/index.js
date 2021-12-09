import React from 'react'
import { View, TouchableOpacity, Text} from 'react-native'
import styles from './style'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5'
import { api } from '../../Services/Api';
 
export default function WorkoutsCard({ workoutId, workoutName, day, wasTrained, workouts, setWorkouts }){
  console.log({ workoutId });
  setWorkouts((prevWorkouts) => (
    prevWorkouts.map((workout, index) => {
      const wasTrainedValue = workout.was_trained === 1 ? 0 : 1;
      if (workout.id === wid) {
        return {...workout, was_trained: wasTrainedValue};
      } 
        return {...workout};
    })
  ));

  const handleDeleteWorkout = async () => {
    const newWorkouts = workouts.filter((workout) => workout.id !== workoutId);
    setWorkouts(newWorkouts);
    const { data: { message } } = await api.delete(`/workouts/${workoutId}`);
    console.log({ message });
  }
  return(
      <View
        style={styles.boxWorkouts}
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
                <IconAnt name="checkcircle" style={{ color: '#0A1A15' }} size={22} />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={handleDeleteWorkout}>
                <IconAnt name="delete" size={22} style={{ marginLeft: 6, color: '#0A1A15' }}/>
              </TouchableOpacity>
          </View>
      </View>
  );
}