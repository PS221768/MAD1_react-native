import { StatusBar } from 'expo-status-bar';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react'

export default function App() {
  const [spot1 = "Text 1", updates1] = useState();
  const [spot2 = "Text 2", updates2] = useState();
  const [spot3 = "Text 3", updates3] = useState();
  const [spot4 = "Text 4", updates4] = useState();
  
  let tspot1 = "";
  let tspot2 = "";
  let tspot3 = "";
  let tspot4 = "";
  

  return (
    <View style={styles.container}>
       <TextInput onChangeText={updates1}>{spot1}</TextInput>
       <TextInput onChangeText={updates2}>{spot2}</TextInput>
       <TextInput onChangeText={updates3}>{spot3}</TextInput>
       <TextInput onChangeText={updates4}>{spot4}</TextInput>
      <Button title='hit me baby one more time' onPress={() => {
        tspot1 = spot2;
        tspot2 = spot3;
        tspot3 = spot4;
        tspot4 = spot1;

        updates1(tspot1);
        updates2(tspot2);
        updates3(tspot3);
        updates4(tspot4);
      }}></Button>

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
