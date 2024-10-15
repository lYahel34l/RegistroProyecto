import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native-web";


function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
     <Button title="Go to Component" onPress={() => navigation.navigate('Component') }/>
     <hr></hr>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <hr></hr>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <hr></hr>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default DetailsScreen;