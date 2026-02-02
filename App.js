import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}> 
      <Text>Hello World!</Text> 
      <Hello name="WEB"/>
      <Text>Count : {count}</Text>
      <Button onPress={()=>setCount(count+1)} title="Click Me" />
      <StatusBar style="dark" /> 
    </View>
  );
}


const Hello=({name})=>{
  return <Text>IM MOHAMMED {name}</Text>

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
