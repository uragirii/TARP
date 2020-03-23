// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen'
import  NewUserScreen  from "./screens/NewUserScreen";
import SymptomsScreen from './screens/SymptomsScreen'
import DetailsScreen from './screens/DetailsScreen'
import PrescriptionScreen from './screens/PrescriptionScreen'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" options= {{headerShown : false}}>
          {props =><LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="NewUser" options= {{headerShown : false}}>
          {props =><NewUserScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Symptoms" options= {{headerShown : false}}>
          {props =><SymptomsScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Details" options= {{headerShown : false}}>
          {props =><DetailsScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Prescription" options= {{headerShown : false}}>
          {props =><PrescriptionScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;