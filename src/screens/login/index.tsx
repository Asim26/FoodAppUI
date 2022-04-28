import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';

// create a component
const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'rgba(6,6,6,0.85)',
    fontSize: 18,
    marginTop: -90,
  },
  inputField: {
    backgroundColor: '#fff',
    marginTop: 15,
    width: '70%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
  },
  signUpText: {
    marginTop: '3%',
  },
});

//make this component available to the app
export default Login;
