import {StyleSheet, Dimensions} from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    height: height,
    backgroundColor:'white',
    flex:1
  },
  shadowTopBar: {
    backgroundColor:'#DCCCCC',
    height:1.5
  },
});

export default styles;
