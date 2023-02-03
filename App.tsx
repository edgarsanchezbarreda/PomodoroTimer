import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TimerScreen from './screens/TimerScreen';
import MetricsScreen from './screens/MetricsScreen';
import IconButton from './components/UI/IconButton';
import { Ionicons, Feather } from '@expo/vector-icons';
import { colors } from './constants/colors';
import SettingsScreen from './screens/SettingsScreen';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Timer'
                screenOptions={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: colors.black,
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerTintColor: colors.green,
                    headerShadowVisible: false,
                    headerTitle: () => {
                        return null;
                    },
                    tabBarStyle: {
                        backgroundColor: colors.black,
                        elevation: 0,
                        shadowOpacity: 0,
                        borderTopWidth: 0,
                    },
                    tabBarActiveTintColor: colors.green,
                    tabBarInactiveTintColor: colors.gray,
                })}
            >
                <Tab.Screen
                    name='Timer'
                    component={TimerScreen}
                    options={({ navigation }) => ({
                        headerLeft: ({ tintColor }) => (
                            <IconButton
                                icon='add'
                                size={24}
                                color={tintColor}
                                onPress={() => console.log('Pressed')}
                                title='New Task'
                                titleColor={colors.green}
                            />
                        ),
                        headerRight: ({ tintColor }) => (
                            <IconButton
                                icon='options-outline'
                                size={24}
                                color={tintColor}
                                onPress={() => {
                                    navigation.navigate('SettingsScreen');
                                }}
                            />
                        ),
                        tabBarIcon: ({ color, size }) => (
                            <Feather name='clock' color={color} size={size} />
                        ),
                    })}
                />
                <Tab.Screen
                    name='Metrics'
                    component={MetricsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name='stats-chart'
                                color={color}
                                size={size}
                            />
                        ),
                    }}
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
