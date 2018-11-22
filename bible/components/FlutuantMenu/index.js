import React, {Component} from 'react'
import {Text, ScrollView, View, TouchableOpacity, Alert, Dimensions, StyleSheet} from 'react-native'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons'
import {TapGestureHandler,State} from 'react-native-gesture-handler'
import Modal from 'react-native-modalbox';
import PopupView from '../PopupView'
import styles from './styles'
import settings from '../../Settings'

const animationMenuDuration = 1000
const menuShowDuration = 4000

export default class FlutuantMenu extends Component<Props> {
  state={
    visibleMenu: true,
    fadeTop: "fadeInDown",
    fadeBottom: "fadeInUp",
  }

  timerHideMenus = () =>
    setTimeout(()=>{
      this.hideMenus()
    },menuShowDuration)

  hideMenus = () => {
    if (this.state.visibleMenu){
      this.setState({
        visibleMenu : false,
        fadeTop:"fadeOutUp",
        fadeBottom:"fadeOutDown",
      })
    }
  }

  showMenus = () => {
    clearTimeout(this.timeout)
    this.setState({
      visibleMenu : true,
      fadeTop:"fadeInDown",
      fadeBottom:"fadeInUp",
    })
    this.timeout = this.timerHideMenus()
  }

  alternateVisibleMenus = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      if (this.state.visibleMenu){
        this.hideMenus()
      }else{
        this.showMenus()
      }
    }
  }

  stopAnimationFadeOut = () => {
      clearTimeout(this.timeout)
      this.timeout = 0
  }

  componentDidMount(){
    this.showMenus()
  }

  openMenu = () => {
    this.stopAnimationFadeOut()
    this.props.openDrawer()
  }

  render() {
    const { customizedStyle } = this.props;
    let { textButton, menu, titleBook } = styles
    let iconColor = "black";

    if(customizedStyle.theme == 'dark'){
      textButton = StyleSheet.flatten([textButton, settings.fontDarkColor])
      titleBook = StyleSheet.flatten([titleBook, settings.fontDarkColor])
      menu = StyleSheet.flatten([menu, settings.backgroundDarkColor])
      iconColor = "white";
    }
    return (
      <View style={styles.container}>
        <TapGestureHandler onHandlerStateChange={this.alternateVisibleMenus}>
          <View>
            {this.props.content}
          </View>
        </TapGestureHandler>
        <View style={styles.container}>
            <Animatable.View
              style={[menu,styles.topMenu]}
              animation={this.state.fadeTop}
              duration={animationMenuDuration}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={this.openMenu}
              >
                  <Icon
                    name="ios-book"
                    size={30}
                    color={iconColor}
                  />
                  <Text style={textButton}>
                    Livros
                  </Text>
              </TouchableOpacity>
                  <Text style={titleBook}>
                    {this.props.chapterTitle}
                  </Text>
              <TouchableOpacity style={styles.button}>
                  <Icon
                    name="ios-calendar"
                    size={30}
                    color={iconColor}
                  />
                  <Text style={textButton}>
                    Planos
                  </Text>
              </TouchableOpacity>
            </Animatable.View>

            <Animatable.View
              style={[menu,styles.bottomMenu]}
              animation={this.state.fadeBottom}
              duration={animationMenuDuration}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.searchView.refs.modal.open()}
              >
                  <Icon
                    name="ios-search"
                    size={25}
                    color={iconColor}
                  />
                  <Text style={textButton}>
                    Pesquisa
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.settingsView.refs.modal.open()}>
                  <IconSimpleLine
                    name="settings"
                    size={20}
                    color={iconColor}
                  />
                  <Text style={textButton}>
                    Configurações
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                  <Icon
                    name="ios-information-circle-outline"
                    size={25}
                    color={iconColor}
                  />
                  <Text style={textButton}>
                    Sobre
                  </Text>
              </TouchableOpacity>
            </Animatable.View>
        </View>
        <PopupView
          ref={(ref) => { this.searchView = ref }}
          typeView={"searchView"}
          changeChapter={this.props.changeChapter}/>
        <PopupView
          ref={(ref) => { this.settingsView = ref }}
          typeView={"settingsView"}
          updateStyle={this.props.updateStyle}
          customizedStyle={this.props.customizedStyle}/>
      </View>
    )
  }
}
1
