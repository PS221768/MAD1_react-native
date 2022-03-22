import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react'

export default function App() {
  const [Number1, setNumber1] = useState(NaN);
  const [Number2, setNumber2] = useState(NaN);
  
  
  const Numbergen = () => {
    const max = 6;

    num = (Math.random() * max).toFixed();
    console.log(num)
    return num == 0 ? 1 : num
  }


  return (
    <View style={styles.container}>
      <Text editable={false}>{Number1}</Text>
      <Text editable={false}>{Number2}</Text>

      <Button onPress={() => { setNumber1(Numbergen); setNumber2(Numbergen) }}
            title="Dobbelen"/>
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
});
