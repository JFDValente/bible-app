import React, {Component} from 'react'
import {Text, View, TouchableOpacity, ScrollView, Dimensions, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons'
import styles from './styles'

const TopBarPopupScreen = (props) => (
  <View>
    <View style={styles.topBar}>
      <Icon
        name="ios-arrow-dropdown"
        size={40}
        onPress={()=>{props.close()}}
        color="white"
      />
    </View>
    <View style={styles.shadowTopBar}/>
  </View>
);

export default TopBarPopupScreen;
