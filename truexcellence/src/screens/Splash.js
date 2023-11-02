/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Platform, Image, View, StyleSheet} from 'react-native';

// ** Third Party Packages
import {useNavigation} from '@react-navigation/native';

// ** Custom Components
import LogoBig from '../assets/logos/logo-big.png';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const initialRouteName = 'Main';
        navigation.reset({
          index: 0,
          routes: [{name: initialRouteName}],
        });
      } catch (error) {
        console.error('Error retrieving token:', error);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={LogoBig} style={styles.splashLogo} resizeMode={'cover'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
  },
  splashLogo: {
    width: 370,
    height: 250,
  }
});

export {Splash};
