import React, {Component} from 'react'
import {Text, View, TouchableOpacity, ScrollView, Dimensions, TextInput, Picker, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons'
import styles from './styles'
import settings from '../../../Settings'

export default class SettingsView extends Component<Props> {
  state = {
    verses : [],
    fontFamily: 'Roboto',
  }

  render() {
    const { customizedStyle } = this.props
    let { sampleTextBox, sampleText } = styles

    if(customizedStyle.theme == 'dark'){
      sampleTextBox = StyleSheet.flatten([sampleTextBox, settings.backgroundDarkColor])
      sampleText = StyleSheet.flatten([sampleText, settings.fontDarkColor])
    }

    switch (customizedStyle.fontSize) {
    case 'small':
        sampleText = StyleSheet.flatten([sampleText, settings.smallFontSize])
        break;
    case 'medium':
        sampleText = StyleSheet.flatten([sampleText, settings.mediumFontSize])
        break;
    case 'large':
        sampleText = StyleSheet.flatten([sampleText, settings.largeFontSize])
        break;
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.sampleView}>
                <Text style={styles.sampleTextTitle}>
                  Pré-visualização
                </Text>
                <View style={sampleTextBox}>
                  <Text style={sampleText}>
                    1 No princípio criou Deus o céu e a terra.
                  </Text>
                </View>
            </View>
            <View style={styles.settingsSessionView}>
                <View style={styles.lineSettings}>
                  <TouchableOpacity
                   style={styles.settingButton}
                   onPress={() => this.props.updateStyle(null,'small',null)}>
                      <Text style={styles.smallSizeText}> Tt </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                   style={styles.settingButton}
                   onPress={() => this.props.updateStyle(null,'medium',null)}>
                      <Text style={styles.mediumSizeText}> Tt </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                   style={styles.settingButton}
                   onPress={() => this.props.updateStyle(null,'large',null)}>
                      <Text style={styles.largeSizeText}> Tt </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.lineSettings}>
                  <TouchableOpacity
                   style={styles.settingButton}
                   onPress={() => this.props.updateStyle('light',null,null)}>
                      <Text style={styles.defaultText}> LightTheme </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                   style={styles.settingButton}
                   onPress={() => this.props.updateStyle('dark',null,null)}>
                      <Text style={styles.defaultText}> Dark Theme </Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
    )
  }
}
