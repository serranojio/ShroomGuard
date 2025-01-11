import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Icons
import { Ionicons } from 'react-native-vector-icons';

// Bottom Tab Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Stack Navigator for Login/Signup
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing Screens
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import NotificationLogScreen from './screens/NotificationLogScreen';

// Providers

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#15412D',
        tabBarInactiveTintColor: 'gray',
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}/>

      <Tab.Screen
        name="Home"
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
        initialParams={{}}
        component={HomeScreen}>
      </Tab.Screen>

      <Tab.Screen
         name="Notification Logs"
         component={NotificationLogScreen}
         options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-circle-outline" size={size} color={color} />
          ),
         }}>
      </Tab.Screen>
    </Tab.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Login"
        component={LoginScreen}>
      </Stack.Screen>

      <Stack.Screen 
        name="SignUp"
        component={SignUpScreen}>

      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
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
