import {StyleSheet, Dimensions} from 'react-native'

const { height, width } = Dimensions.get('window')
const paddingTextContainer = 18

const styles = StyleSheet.create({
  textContainer: {
    top: 0,
    width: width,
    height: height - 22,
    paddingLeft: paddingTextContainer,
    paddingRight: paddingTextContainer,
    backgroundColor: 'white',
  },
  formattedTitle: {
    fontFamily: 'sans-serif-light',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#575757',
    paddingBottom: 10,
    alignSelf: 'center',
  },
  verseContainer:{
    flexDirection: 'row',
    marginBottom: 5,
  },
  verseContent: {
    alignSelf: 'flex-start',
    width: width - ((2*paddingTextContainer)+18),
    paddingRight: 10,
  },
  verseText: {
    fontFamily: 'sans-serif-light',
    fontSize: 18,
    color: 'black',
    alignSelf: 'flex-start',
  },
  verseNumber: {
    fontFamily: 'sans-serif-light',
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 15,
    color: 'black',
  },
})

export default styles;
