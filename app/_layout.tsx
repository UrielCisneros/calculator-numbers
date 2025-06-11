import { globalStyles } from '@/styles/global-styles';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import React from 'react';
import { StatusBar, View } from 'react-native';


const RoorLayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  if(!loaded) return null;

  return (
    <View style={globalStyles.background}>
      <StatusBar barStyle={"light-content"} />
      {/* <Text style={{ color: Colors.textPrimary}} > Header RoorLayout</Text> */}
      <Slot />
      {/* <Text style={{ color: Colors.textPrimary}}> Footer RoorLayout</Text> */}
    </View>
  )
}

export default RoorLayout