import React from "react";
import { View, Text, Button } from "react-native";


function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>



        <Button title="Go to Details" onPress={() => navigation.navigate('Details') }/>
     <hr></hr>
      <Button title="Go to Component" onPress={() => navigation.navigate('Component')} />
      <hr></hr>
      </View>
    );
  }

export default HomeScreen;