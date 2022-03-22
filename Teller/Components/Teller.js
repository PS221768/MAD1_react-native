import { View, Text, Button, Alert } from 'react-native'
import React, {useState} from 'react'

let Counter =
{
  Visable: 5,
  Invisable: 0,

  get Count(){
    return (this.Visable + this.Invisable);
  }

}


const Teller = () => {
    const [CurrentCount, updateCount] = useState(5);
  
  
    return (
        <View>
            <Text>{Counter.Count}</Text>
            <Button onPress={() => {Counter.Visable++; updateCount(Counter.Count); }}
            title="Visable"
            />
            <Button onPress={() => {Counter.Invisable++;
                Alert.alert(
                    "New count!",
                    `The new count is: ${Counter.Count}`,
                    [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                )
            }}
            title="Invisable"
            />
        </View>
    );
}

export default Teller