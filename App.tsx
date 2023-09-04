import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import useBearStore from './store/BearStore';

export default function App() {

  const bears = useBearStore((state) => state.bears)
  const increaseBear = useBearStore((state) => state.increase)
  const decreaseBear = useBearStore((state) => state.decrease)
  const resetBear = useBearStore((state) => state.removeAll)
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/bear.png")}/>
      <Text style={styles.title}>Zustand</Text>
      <StatusBar style="auto" />
      <Text>Bears: {bears}</Text>
      <Button onPress={() => increaseBear()} title='Increase Bear' />
      <Button onPress={() => decreaseBear()} title='Decrease Bear' />
      <Button onPress={() => resetBear()} title='Reset Bear' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    objectFit: "scale-down",
    height: 200,
  },

  title :{
    fontSize: 64,
    fontWeight: "800"
  }
});
