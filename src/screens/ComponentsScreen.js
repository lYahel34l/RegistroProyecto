import React from "react";
import { View, Text, Button } from "react-native-web";

const ComponentsScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Component Screen</Text>

        <Button title="Go to Details" onPress={() => navigation.navigate('Details') }/>
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


export default ComponentsScreen;