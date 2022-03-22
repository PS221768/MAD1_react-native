import { View, Text } from 'react-native'
import React from 'react'

const HelloWorld = (props) => {
  return (

        <View>
            <Text>
                <Text style={{ color:props.color1, fontSize:69}}>Hello </Text>
                <Text style={{ color:props.color2, fontSize:69}}>World!</Text>
            </Text>
        </View>
    );
}

export default HelloWorld