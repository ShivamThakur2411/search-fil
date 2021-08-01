import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import AppHeader from './Components/AppHeader';
import db from './config';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        allStories:[],
        lastVisibleStory: null,
    }
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
      <View>
        <AppHeader/>
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
    </View>
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
