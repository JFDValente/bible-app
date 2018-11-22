import React, {Component} from 'react'
import {Text, View, TouchableOpacity, ScrollView, Dimensions, TextInput} from 'react-native'
import Modal from 'react-native-modalbox'
import TopBarPopupScreen from '../TopBarPopupScreen'
import SearchView from './SearchView'
import SettingsView from './SettingsView'
import styles from './styles'

const { height, width } = Dimensions.get('window')

export default class PopupView extends Component<Props> {
  closePopup = () => {
    this.refs.modal.close()
  }

  render() {
    return (
      <Modal
        style={{height:height}}
        ref={"modal"}
        backdropPressToClose={true}
        swipeToClose={false}>
        <View style={styles.mainContainer}>
            <TopBarPopupScreen close={this.closePopup}/>
            {this.props.typeView == "searchView" &&
             <SearchView
              changeChapter={this.props.changeChapter}
              close={this.closePopup}/>}
            {this.props.typeView == "settingsView" &&
             <SettingsView
              updateStyle={this.props.updateStyle}
              customizedStyle={this.props.customizedStyle}/>}
        </View>
      </Modal>
    )
  }
}
