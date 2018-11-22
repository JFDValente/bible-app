import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import FlutuantMenu from './components/FlutuantMenu'
import ContentScreen from './components/ContentScreen'
import {Drawer, Container } from 'native-base'
import SideBar from './components/SideBar'
import bibleText from './bibleText'

const limitBible = {
  start: {book: 0, chapter: 0},
  end: {book: 65, chapter: 21}
}

export default class App extends Component<Props> {
  state = {
    chapter : bibleText.books[0].chapters[0],
    style: {
      theme: 'light',
      fontSize: 'small',
      fontFamily: 'Roboto',
    },
  }

  indexBook = 0
  indexChapter = 48

  componentDidMount() {
    // TODO: open in the last chapter that was readed (José Valente - 12/09/2018)
    this.setState({chapter : bibleText.books[this.indexBook].chapters[this.indexChapter]})
  }

  updateStyle = (newTheme,newFontSize,newFontFamily) => {
    let theme = newTheme || this.state.style.theme
    let fontSize = newFontSize || this.state.style.fontSize
    let fontFamily = newFontFamily || this.state.style.fontFamily
    this.setState({
      style:{
        theme: theme,
        fontSize: fontSize,
        fontFamily: fontFamily,
      }
    })
  }

  changeChapter = (iBook,iChapter) => {
    this.indexBook=iBook
    this.indexChapter=iChapter
    this.setState({chapter : bibleText.books[iBook].chapters[iChapter]})
  }

  leafBible = () => {
    this.setState({
      chapter : bibleText.books[this.indexBook].chapters[this.indexChapter],
    })
  }

  screenSwipe = (direction) => {
      let isLeftLimitBible  = limitBible.start.book == this.indexBook
                              && limitBible.start.chapter == this.indexChapter
      let isRightLimitBible = limitBible.end.book == this.indexBook
                              && limitBible.end.chapter == this.indexChapter

      if (direction === "L") {
          if(!isRightLimitBible){
              let isLastBookChapter = this.indexChapter == (bibleText.books[0].chapters.length - 1)
              if(!isLastBookChapter) {
                this.indexChapter++
              }else {
                this.indexBook++
                this.indexChapter = 0
              }
          }
      }else {
          if(!isLeftLimitBible){
              let isFirstBookChapter = this.indexChapter == 0
              if(!isFirstBookChapter) {
                this.indexChapter--
              }else {
                this.indexBook--
                let lastChapterPreviousBook = bibleText.books[this.indexBook].chapters.length - 1
                this.indexChapter = lastChapterPreviousBook
              }
          }
      }
      this.leafBible()
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };

  openDrawer = () => {
      this.drawer._root.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar
                  changeChapter={this.changeChapter}
                  close={this.closeDrawer}
                  books={bibleText.books}
                  />
                }
        onClose={() => this.closeDrawer()}
      >
          <Container>
              <View>
                  <FlutuantMenu
                    openDrawer = {this.openDrawer}
                    updateStyle = {this.updateStyle}
                    chapterTitle = {this.state.chapter.formattedTitle}
                    changeChapter={this.changeChapter}
                    customizedStyle = {this.state.style}
                    content = {
                        <ContentScreen
                          chapter = {this.state.chapter}
                          customizedStyle = {this.state.style}
                          onResponderMove = {(direction) => {this.screenSwipe(direction)}}
                        />
                    }
                  />
              </View>
          </Container>
      </Drawer>
    )
  }
}
