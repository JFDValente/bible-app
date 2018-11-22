import React, {Component} from 'react'
import {Text, ScrollView, View, StyleSheet} from 'react-native'
import styles from './styles'
import * as Animatable from 'react-native-animatable'
import {PanGestureHandler,State} from 'react-native-gesture-handler'
import settings from '../../Settings'
const swipeAnimationDuration = 300

export default class ContentScreen extends Component<Props>{

  turnPageRight = () => {
      console.log("RIGHT")
      this.props.onResponderMove("R")
  }

  turnPageLeft = () => {
      console.log("LEFT")
      this.props.onResponderMove("L")
  }

  _onHandlerStateChange = event => {
    if (event.nativeEvent.translationX >= 100 || event.nativeEvent.translationX <= -100){
      if (event.nativeEvent.translationX >= 100) {
        console.log("turnRIGHT - start")
        this.turnPageRight()
        console.log("turnRIGHT - end")
      }

      if(event.nativeEvent.translationX <= -100){
        console.log("turnLETF - start")
        this.turnPageLeft()
        console.log("turnLETF - end")
      }
      this.scrollView.scrollTo({x: 0, y: 0, animated: false})
    }
  }

  render(){
    const { customizedStyle } = this.props;
    let { textContainer, verseText, verseNumber, formattedTitle } = styles

    if(customizedStyle.theme == 'dark'){
      textContainer = StyleSheet.flatten([textContainer, settings.backgroundDarkColor])
      verseText = StyleSheet.flatten([verseText, settings.fontDarkColor])
      verseNumber = StyleSheet.flatten([verseNumber, settings.fontDarkColor])
      formattedTitle = StyleSheet.flatten([formattedTitle, settings.fontDarkColor])
    }

    switch (customizedStyle.fontSize) {
    case 'small':
        verseNumber = StyleSheet.flatten([verseNumber, settings.smallFontSize])
        verseText = StyleSheet.flatten([verseText, settings.smallFontSize]);
        break;
    case 'medium':
        verseNumber = StyleSheet.flatten([verseNumber, settings.mediumFontSize])
        verseText = StyleSheet.flatten([verseText, settings.mediumFontSize]);
        break;
    case 'large':
        verseNumber = StyleSheet.flatten([verseNumber, settings.largeFontSize])
        verseText = StyleSheet.flatten([verseText, settings.largeFontSize]);
        break;
    }

    return (
      <PanGestureHandler
       onHandlerStateChange={this._onHandlerStateChange}
       minOffsetX={50}
      >
          <ScrollView
            ref = {(ref) => {this.scrollView = ref}}
            style = {textContainer}
          >
                <Text style = {formattedTitle}> {this.props.chapter.formattedTitle} </Text>
                { this.props.chapter.verses.map(verse =>
                    <View
                      key={verse.number}
                      style={styles.verseContainer}
                    >
                      <Text style={verseNumber}>
                        {verse.number}
                      </Text>
                      <View style={styles.verseContent}>
                        <Text style={verseText}>
                          {verse.content}
                        </Text>
                      </View>
                    </View>
                  )
                }
          </ScrollView>
      </PanGestureHandler>
    )
  }
}
