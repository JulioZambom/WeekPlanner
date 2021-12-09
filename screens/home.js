import React from 'react';
import Title from '../src/components/Title/'
import HomeForm from'../src/components/HomeForm'
import {SafeAreaView} from 'react-native'

export default function Home({ navigation }) {
  const navigateLogin = () => {
    navigation.navigate('Login');
}
  return (
    <SafeAreaView>
      <Title navigateLogin={navigateLogin} />
      <HomeForm navigateLogin={navigateLogin} />
    </SafeAreaView>
  );
}