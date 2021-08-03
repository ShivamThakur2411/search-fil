import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../config';

export default class MainScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        allStories:[],
        dataSource:[],
        lastVisibleStory: null,
        search:''
    }
}

updateSearch = (search) => {
  this.setState({ search });
};

searchFilterFunction=(text)=> {
  var enteredText = text.split("")
  var text = text.toUpperCase()

  const newData = this.state.allStories.filter((item) => {
  const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
  
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        dataSource: newData,
        search: text,
      });
    }

componentDidMount=async ()=>{
  const query = await db.collection('Stories').get()
  query.docs.map((doc)=>{
    this.setState({
      allStories:[...this.state.allStories, doc.data()]
    })
  })
}

fetchMoreStories=async ()=>{
  const query = await db.collection('Stories').startAfter(this.state.lastVisibleStory).limit(5).get()
  query.docs.map((doc)=>{
    this.setState({
      allStories:[...this.state.allStories, doc.data()],
      lastVisibleStory:doc,
    })
  })
}

  render(){
    return (
      <ScrollView>

        <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        onClear={text => this.searchFilterFunction('')}
        value={this.state.search}
      />

      <FlatList
        data = {this.state.allStories}
        renderItem = {
          ({item})=>(
            <View style={{borderWidth:8}}>
              
              <Text style={styles.title}> {"Title : " + item.Title} </Text>
              <Text style={{marginLeft:50}}> {item.Story} </Text>
              <Text style={styles.author}> {"Author : " + item.Author} </Text>
            </View>
          )
        }
        keyExtractor = {(item, index)=>index.toString()}
        onEndReached = {this.fetchMoreTransaction}
        onEndReachedThreshold = {0.7}
      />
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  title:{
    fontSize:35,
    fontWeight:'bold'
  },
  author:{
    fontSize:25,
    fontWeight:'bold'
  }
});
