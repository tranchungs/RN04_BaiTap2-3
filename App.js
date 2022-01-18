/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { View,Text,StyleSheet, FlatList} from 'react-native';

import BottomComponent from './Component/BottomComponent';
import TopComponent from './Component/TopComponent';


const App= () => {


  return (
    <>
        <TopComponent/>
        <BottomComponent/>
    </>

  );
};



export default App;
