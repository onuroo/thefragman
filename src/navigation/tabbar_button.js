import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text, Image} from 'react-native';

import {size} from '../helpers/statics';
import Colors from '../consts/colors';

import TabBarKey from './tabbar_keys';
import GetTabIcon from './tabbar_icons';

const light_red_bg_color = '#b42e26';
const dark_red_bg_color = '#962920';
const DefaultButton = props => {
  const {activeTabIndex, route, onPress, onLongPress} = props;
  const {name} = route;

  const {tabBarButtonContainerStyle, imageStyle} = styles();


  const INDEXES = {
    HomeTab: 0,
    VizyondakiFilmlerTab: 1,
    VizyonaGireceklerTab: 2,
    YeniDizilerTab: 3,
    PopulerDizilerTab: 4,
  };


  const {icon, opacity} = GetTabIcon(name, activeTabIndex);
  console.log('name', name)
  if (name === 'HomeTab') {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        onLongPress={onLongPress}
        style={{...tabBarButtonContainerStyle,marginRight: 1, backgroundColor: activeTabIndex === INDEXES[name] ? dark_red_bg_color :  light_red_bg_color, borderRadius: 5,alignItems: 'center',width: '11%',alignItems: 'center'}}>
        <View>
          <Image source={icon} style={[imageStyle, {opacity: 1,margin: 0,}]} />
        </View>
        {/* <Text style={{opacity, fontSize: size(8), width: '50%',marginLeft: size(5)}}>{TabBarKey[name]}</Text> */}
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        onLongPress={onLongPress}
        style={{
          ...tabBarButtonContainerStyle,
          flexDirection: INDEXES[name] < 3 ? 'row' : 'column',
          marginRight: name === 'VizyonaGireceklerTab' ? 4 : 0.5,
          backgroundColor: activeTabIndex === INDEXES[name] ? dark_red_bg_color :  light_red_bg_color,
          borderRadius: 5,
          borderTopRightRadius: INDEXES[name] === 1 || INDEXES[name] === 3 ? 0 : 5,
          borderBottomRightRadius: INDEXES[name] === 1 || INDEXES[name] === 3 ? 0 : 5,
          borderTopLeftRadius: INDEXES[name] === 2 || INDEXES[name] === 4 ? 0 : 5,
          borderBottomLeftRadius: INDEXES[name] === 2 || INDEXES[name] === 4 ? 0 : 5,
          width: '21%',
          alignItems: 'center',
          }}>
        <View>
          <Image source={icon} style={[imageStyle, {marginRight: 5,opacity: 1, resizeMode: 'contain'}]} />
        </View>
        <Text
          style={{
            fontSize: size(8),
            marginTop: INDEXES[name] > 2 ? 5 : 0,
            textAlign: 'center',
            color: 'white',
            width: INDEXES[name] > 2 ? '90%' : '58%',
            fontWeight: '400',
            }}>
          {TabBarKey[name]}
          </Text>
      </TouchableOpacity>
    );
  }
};
const TabbarButton = props => {
  const {activeTabIndex, route, onPress, onLongPress} = props;

  return (
    <DefaultButton
      onPress={onPress}
      onLongPress={onLongPress}
      route={route}
      activeTabIndex={activeTabIndex}
    />
  );
};

const styles = () => {
  return StyleSheet.create({
    tabBarButtonContainerStyle: {
      height: size(60),
      justifyContent: 'center',
      alignItems: 'center', 
      shadowColor: "black",
      shadowOffset: {
        width: 10,
        height: 1,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24,
    },
    tabBarCustomButtonContainerStyle: {
      paddingTop: size(15),
      paddingBottom: size(25),
      height: size(85),
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'flex-end',
      borderTopLeftRadius: size(15),
    },
    imageStyle: {
      height: size(20),
      width: size(20),
      resizeMode: 'cover',
      opacity: 1,
    },
    plusImageStyle: {
      height: size(21),
      width: size(21),
      resizeMode: 'cover',
    },
    plusImageContainerStyle: {
      backgroundColor: Colors.lightBlue,
      height: size(50),
      width: size(50),
      borderRadius: 50,
      borderColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pluseImageBorderViewStyle: {
      borderColor: 'white',
      height: size(61),
      width: size(61),
      borderRadius: 61,
      borderWidth: size(15),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: size(-15),
    },
    badgeContainer: {
      position: 'absolute',
      backgroundColor: Colors.red,
      width: size(18),
      height: size(18),
      borderRadius: size(18),
      zIndex: 2,
      right: -5,
      top: -5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export default TabbarButton;
