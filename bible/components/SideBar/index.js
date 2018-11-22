import React, { Component } from "react"
import { View, Text, TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const BookTabMenu = (props) => (
  <ScrollView style={{ backgroundColor: 'white' }}>
    { props.books.map((book,i) =>
      <View key={i}>
        <TouchableOpacity
         onPress={()=>{props.itemAction(i)}}
         style={{height:45, justifyContent: 'center'}}
        >
          <Text style={{fontSize:15, color: 'black', marginLeft:10}}>
            {book.name}
          </Text>
        </TouchableOpacity>
        <View style={{borderBottomColor: '#8c8c8c',borderBottomWidth: 1}}/>
      </View>
    )}
  </ScrollView>
);

const ChapterTabMenu = (props) => (
  <ScrollView style={{ backgroundColor: 'white' }}>
    { props.book.chapters.map((chapter,i) =>
      <View key={i}>
        <TouchableOpacity
         onPress={()=>props.itemAction(i)}
         style={{height:45, justifyContent: 'center'}}
        >
          <Text style={{fontSize:15, color: 'black', marginLeft:10}}>
            {i+1}
          </Text>
        </TouchableOpacity>
        <View style={{borderBottomColor: '#8c8c8c',borderBottomWidth: 1}}/>
      </View>
    )}
  </ScrollView>
);

export default class SideBar extends Component {
  state = {
    indexBook:0,
    index: 0,
    routes: [
      { key: 'books', title: 'Livros', icon: 'ios-book'},
      { key: 'chapters', title: 'Capítulos', icon: 'ios-list-box'},
    ],
  }

  goToChaptersTab = (indexBook) =>{
    this.setState({
      indexBook : indexBook,
      index:1
    })
  }

  goForReading = (iChapter) =>{
    this.props.changeChapter(this.state.indexBook,iChapter)
    this.props.close();
  }

  _renderScene = ({ route }) => {
      switch (route.key) {
        case 'books':
      	  return (
      		    <BookTabMenu books={this.props.books} itemAction={this.goToChaptersTab}/>
      	  )
        case 'chapters':
          return (
      		    <ChapterTabMenu book={this.props.books[this.state.indexBook]} itemAction={this.goForReading} />
      	  )
      }
  }

  render(){
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={props =>
          <TabBar
            {...props}
            style={{backgroundColor: '#404040'}}
            labelStyle={{fontSize: 8, margin:0, padding:0}}
            renderIcon={({route}) =>
              <Icon
                name={route.icon}
                size={30}
                color="white"
              />
            }
            indicatorStyle={{ backgroundColor: 'orange' }}
          />
        }
        onIndexChange={index => this.setState({index })}
        initialLayout={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      />
    );
  }
};
