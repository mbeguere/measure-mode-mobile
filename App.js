import React, { useEffect, useState } from 'react';
import { StatusBar, ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './Style';

import HomeScreen from './components/home/HomeScreen';
import CustomerScreen from './components/customer/CustomerScreen';
import ModelScreen from './components/model/ModelScreen';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  if (loading === true) {
    return (
      <View style={style.container}>
        <ActivityIndicator size="large" color="#18BC9C" />
      </View>
    );
  }
  else {
    return (
      <>
        <StatusBar hidden={true} />
        <NavigationContainer>
          <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              iconName = focused ? 'ios-contacts' : 'ios-list';
              switch (route.name) {
                case 'Accueil':
                  iconName = 'ios-home';
                  break;
                case 'Clients':
                  iconName = 'ios-people';
                  break;
                case 'Modéles':
                  iconName = 'ios-images';
                  break;
                default:
                  break;
              }              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Accueil" component={HomeScreen} />
            <Tab.Screen name="Clients" component={CustomerScreen} />
            <Tab.Screen name="Modéles" component={ModelScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
  }

};


// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
