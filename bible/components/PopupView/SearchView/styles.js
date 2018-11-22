import {StyleSheet, Dimensions} from 'react-native'

const { height, width } = Dimensions.get('window')
const heightSearchBar = 70

const styles = StyleSheet.create({
  searchBar:{
    flexDirection: 'row',
    backgroundColor: 'white',
    height: heightSearchBar,
    padding: 20,
    justifyContent: 'space-between',
    borderBottomColor: '#DCCCCC',
    borderBottomWidth: 1,
  },
  inputComponent:{
    flexDirection: 'row',
    height: 30
  },
  searchIcon: {
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  inputText: {
    height: 30,
    backgroundColor: '#DCDCDC',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: 200,
    fontSize: 15,
    padding: 0,
  },
  searchButton: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#ABABAB'
  },
  resultContainer:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
    height: height - (heightSearchBar + 80),
  },
  resultText: {
    fontSize: 15,
    color: 'black',
  },
  verseContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomColor: '#BBBBBB',
    borderBottomWidth: 0.5,
  },
  textReference: {
    color: 'black',
  },
  verseButton: {
    backgroundColor: '#EEEEEE',
    padding: 10,
    borderRadius: 5,
  }
})

export default styles
