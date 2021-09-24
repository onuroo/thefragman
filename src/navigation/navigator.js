import React, {useEffect, useState, useMemo} from 'react';
import {View, StyleSheet, Keyboard, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import PropTypes from 'prop-types';

import {useSafeArea} from 'react-native-safe-area-context';

import {size} from '../helpers/statics';

import TabbarButton from './tabbar_button';
import NavigationActions from './navigation_actions';

import {
  LoginScreen,
  LandingScreen,
  SplashScreen,
  HomeScreen,
  ProfileScreen,
  PopulerDizilerScreen,
  VizyonaGireceklerScreen,
  YeniDizilerScreen,
  VizyondakiFilmlerScreen
} from './screens';

import {
  ModalScreenTransition,
  ScreenTransition,
  ModalTransition,
  SearchScreenTransition,
  AppTransition,
} from './animations';

import AuthHooks from '../hooks/auth.hooks';

const Tab = createBottomTabNavigator();

const MyTabBar = ({state, navigation}) => {
  const {navigatePush, tabNavigate} = NavigationActions();
  const {tabBarContainerStyle} = styles();

  const onPress = route => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
    });

    if (!event.defaultPrevented) {
      tabNavigate(route.name);
    }
  };

  const {routes} = state;
  const tabs = routes;

  const [showTabBar, setShowTabBar] = useState(true);

  useEffect(() => {
    if (Platform.OS === 'android') {
      Keyboard.addListener('keyboardDidShow', () => setShowTabBar(false));
      Keyboard.addListener('keyboardDidHide', () => setShowTabBar(true));
      // cleanup function
      return () => {
        Keyboard.removeListener('keyboardDidShow');
        Keyboard.removeListener('keyboardDidHide');
      };
    }
  }, []);

  const insets = useSafeArea();

  let height = size(70);

  height += insets.bottom;

  const appIsLoaded = true;

  return useMemo(() => {
    const button = showTabBar && appIsLoaded && (
      <View
        style={[tabBarContainerStyle, {height, margin: 5,paddingBottom: insets.bottom,justifyContent: 'center',alignItems: 'center'}]}>
        {/* <View style={{position: 'absolute',borderWidth: 1,borderColor: 'rgba(255, 255 ,255, 1)',zIndex: -1, left: 0, right: 0, bottom: 0, top: 0,
      shadowColor: "black",
      shadowOffset: {
        width: 20,
        height: 10,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      
      elevation: 24,}}></View> */}
        {tabs.map(tab => {
          return (
            <TabbarButton
              key={tab.name}
              route={tab}
              onPress={() => onPress(tab)}
              onLongPress={() => {}}
              activeTabIndex={state.index}
            />
          );
        })}
      </View>
    );
    return button;
  }, [showTabBar, appIsLoaded, state]);
};

MyTabBar.propTypes = {
  state: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

const RootStack = createStackNavigator();

const ScreensNavigator = props => {
  const {authState} = AuthHooks();

  const options = {
    headerShown: false,
    tabBarVisible: false,
  };
  const tabBarOptions = {
    headerShown: false,
  };

  return (
    <RootStack.Navigator
      initialRouteName={authState.isAuthenticated ? 'TabScreens' : 'Login'}>
      <RootStack.Screen
        name="TabScreens"
        component={TabScreens}
        options={{...tabBarOptions, ...AppTransition}}
      />
      <RootStack.Screen
        name="Splash"
        component={SplashScreen}
        options={{...options}}
      />
      <RootStack.Screen
        name="Login"
        component={LoginScreen}
        options={{...options, ...ModalScreenTransition}}
      />
      <RootStack.Screen
        name="Landing"
        component={LandingScreen}
        options={{...options, ...ScreenTransition}}
      />
    </RootStack.Navigator>
  );
};

const TabScreens = () => {
  return (
    <Tab.Navigator
      unmountInactiveScreens
      headerMode="none"
      lazy={false}
      tabBarOptions={{
        style: {
          borderTopWidth: 0,
          position: 'absolute',
          left: 50,
          right: 50,
          bottom: 20,
          height: 100
        }
      }}
      tabBar={props => {
        return <MyTabBar {...props} />;
      }}>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="VizyondakiFilmlerTab" component={VizyondakiFilmlerScreen} />
      <Tab.Screen name="VizyonaGireceklerTab" component={VizyonaGireceklerScreen} />
      <Tab.Screen name="YeniDizilerTab" component={YeniDizilerScreen} />
      <Tab.Screen name="PopulerDizilerTab" component={PopulerDizilerScreen} />
    </Tab.Navigator>
  );
};

const styles = () => {
  return StyleSheet.create({
    tabBarContainerStyle: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: size(100),
      flexDirection: 'row',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: -8,
      },
      shadowOpacity: 0.05,
      shadowRadius: 4.84,
      backgroundColor: 'transparent',
      elevation: 24,
    },
  });
};

export default ScreensNavigator;
