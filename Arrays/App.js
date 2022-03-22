import React, { useState } from "react";
import { FlatList, SafeAreaView , StatusBar, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null); //event listener die het geselecteerde item id bijhoud

  const renderItem = ({ item }) => {
    if (item.id === selectedId){

      Alert.alert(
        "You've selected a month",
        `The selected month is: ${item.title}`,
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      )
    }
    return (
      <Item item={item} onPress={() => setSelectedId(item.id)} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
