import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// --- Main screens ---
const HomeScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Home</Text>
  </View>
);

const FeedScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Feed</Text>
  </View>
);

const CatalogScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Catalog</Text>
  </View>
);

const AccountScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Account</Text>
  </View>
);


const Tab = createBottomTabNavigator();
const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Catalog" component={CatalogScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);


// --- Onboarding screens ---
const SignInScreen = () => {
  const nav = useNavigation();
  return (
    <View style={StyleSheet.layout}>
      <Button
        title='SignIn'
        onPress={() => nav.navigate('SignUp')}
      />
    </View>
  )
}

const SignUpScreen = () => {
  const nav = useNavigation();
  return (
    <View style={StyleSheet.layout}>
      <Button
        title='SignUp'
        onPress={() => nav.navigate('Main')}
      />
    </View>
  )
}

// --- App ---

const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});