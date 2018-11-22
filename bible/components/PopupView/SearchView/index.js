import React, {Component} from 'react'
import {Text, View, TouchableOpacity, ScrollView, Dimensions, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons'
import styles from './styles'
import {findText} from '../../../bibleText'

export default class SearchView extends Component<Props> {
  state = {
    verses : [],
    textSearch: "",
  }

  searchText = async () =>{
      let foundVerses = await findText(this.state.textSearch)
      this.setState({verses:foundVerses})
  }

  goForReading = (iBook,iChapter) =>{
    this.props.changeChapter(iBook,iChapter)
    this.props.close();
  }

  render() {
    return (
        <View>
            <View style={styles.searchBar}>
              <View style={styles.inputComponent}>
                <Icon
                  name='ios-search'
                  size={25}
                  color='#A9A9A9'
                  style={styles.searchIcon}/>
                <TextInput
                  style={styles.inputText}
                  onChangeText={(value) => this.setState({textSearch: value})}
                  value={this.state.textSearch}
                  placeholder='Pesquisar na Biblia'
                  placeholderTextColor='#A9A9A9'
                  underlineColorAndroid="transparent"/>
              </View>
              <TouchableOpacity
                style={styles.searchButton}
                onPress={() => this.searchText()}>
                <Text style={styles.buttonText}>
                  Pesquisar
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>
                  Resultados: {this.state.verses.length}
                </Text>
                  <ScrollView>
                  { this.state.verses.map(verse =>
                      <View
                        style={styles.verseContainer}
                        key={verse.verse.number}
                      >
                        <TouchableOpacity
                         style={styles.verseButton}
                         onPress={() => {this.goForReading(verse.indexBook,verse.indexChapter)}}>
                          <Text style={styles.textReference}>
                            {verse.bookName+" "+verse.chapterNumber+"."+verse.verse.number}
                          </Text>
                          <View>
                            <Text>
                              {'"'+verse.verse.content+'"'}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    )
                  }
                  </ScrollView>
            </View>
        </View>
    )
  }
}
