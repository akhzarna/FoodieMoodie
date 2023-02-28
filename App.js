import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button } from 'react-native';

import {styles} from './MyCSS.jsx'

var flag = 'Yes I am Comsats Student'

export default function App() {
  
  return (
    <View style={{flex:1}}>
      <Text> Hello World </Text>
      <View style={styles.topView}>
      </View>

      <View style={styles.centerView}>
      </View>

      <View style={styles.bottomView}>
      </View>

    </View>
  );
}