import {StyleSheet, Dimensions} from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer:{
    height: height-20,
    width: width,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  sampleView:{
    flexDirection: 'column',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sampleTextTitle:{
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 15,
    color: 'black',
  },
  sampleTextBox: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    width: width-20,
    alignItems: 'center',
    padding: 8,
  },
  sampleText: {
    fontSize: 16,
    color: 'black',
  },
  settingsSessionView: {
    flexDirection: 'column',
    height: 135,
    width: width,
  },
  lineSettings: {
    flexDirection: 'row',
    height: 45,
    width: "100%",
    alignItems: 'stretch',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#DCDCDC',
  },
  settingButton:{
    flex: 1,
    borderColor: '#DCDCDC',
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingLineView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultText: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
  },
  smallSizeText: {
    fontSize: 16,
    color: 'black',
  },
  mediumSizeText: {
    fontSize: 20,
    color: 'black',
  },
  largeSizeText: {
    fontSize: 23,
    color: 'black',
  },
  pickerFontFamily: {
    height: 200,
    width: 120,
    alignSelf: 'flex-end'
  },
});

export default styles;
