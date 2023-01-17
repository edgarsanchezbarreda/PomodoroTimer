import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TimerScreen from './screens/TimerScreen';
import MetricsScreen from './screens/MetricsScreen';
import IconButton from './components/UI/IconButton';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Timer'
                screenOptions={({ navigation }) => ({
                    // headerShown: false,
                })}
            >
                <Tab.Screen
                    name='Timer'
                    component={TimerScreen}
                    options={{
                        headerLeft: ({ tintColor }) => (
                            <IconButton
                                icon='add'
                                size={24}
                                color={tintColor}
                                onPress={() => console.log('Pressed')}
                                title='New Task'
                            />
                        ),
                        headerRight: ({ tintColor }) => (
                            <IconButton
                                icon='options-outline'
                                size={24}
                                color={tintColor}
                                onPress={() => console.log('Pressed')}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Metrics'
                    component={MetricsScreen}
                    options={{}}
                />
            </Tab.Navigator>
        </NavigationContainer>
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
