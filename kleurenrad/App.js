import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react'


export default function App() {

  let i = 0  
  const [BgColor = "red", UpdateColor] = useState(Color);
  const [IColor = 0, SIColor] = useState();

  const Color = () =>
  {
    let Colors = 
    [
      "red",
      "white",
      "blue"
    ]
    SIColor(IColor + 1 == 3 ? 0 : IColor + 1)
    let response = Colors[IColor]; 
    
    return response
  }
  

  return (
    <View style={styles.container}>
      
      <Button style={{ color: BgColor}}
      onPress={() => {
        UpdateColor(Color)
      }}
      title={BgColor}
      ></Button>
      <Text style={{ color: BgColor}}>some text, idk</Text>


      <StatusBar style="auto" />
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
