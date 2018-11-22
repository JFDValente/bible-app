import {StyleSheet, Dimensions} from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerHeader: {
    backgroundColor: '#e6ffe6',
    height: (height/3),
    width: width-(width/5),
    alignItems: 'center',
  },
  itemMenuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width-(width/5),
    height: 55,
    marginTop: 3,
    marginBottom: 3,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingLeft: 5,
  },
  itemMenuText: {
    fontFamily: 'sans-serif-light',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
});

export default styles;
