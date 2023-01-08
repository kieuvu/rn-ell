import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/features/home/HomeScreen';
import NewWordScreen from './src/features/learning/new_word/NewWordScreen';

const Stack = createNativeStackNavigator();

class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="NewWord" component={NewWordScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
