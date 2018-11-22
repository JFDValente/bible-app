import {StyleSheet, Dimensions} from 'react-native';

const { height, width } = Dimensions.get('window')
const heightMenu = 45
const widthBorderMenu = 0.5
const paddingMenu = 10

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'absolute',
    width: width,
    height: height - 22,
  },
  backgroundContent:{
    backgroundColor: "white",
  },
  menu:{
    width: width,
    height: heightMenu,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: paddingMenu,
    paddingRight: paddingMenu,
  },
  topMenu: {
    borderBottomColor: 'gray',
    borderBottomWidth: widthBorderMenu,
  },
  bottomMenu:{
    borderTopColor: 'gray',
    borderTopWidth: widthBorderMenu,
  },
  button:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButton:{
    paddingLeft: 5,
    fontFamily: 'sans-serif-light',
    fontSize: 15,
    color: 'black',
  },
  titleBook:{
    fontFamily: 'sans-serif-light',
    fontSize: 20,
    color: 'black',
  },
});

export default styles;
