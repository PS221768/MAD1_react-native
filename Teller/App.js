import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import Teller from './Components/Teller.js';

const App = () => {
  return(
    <View style={styles.container}>
      <Teller/>

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

export default App;