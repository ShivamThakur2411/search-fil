import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:'cyan'}}>
                <Text style={styles.textComponent}>
                    Bed Time Stories
                </Text>
                <Text style={styles.textSecondComponent}>
                    Get a sleep faster
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textComponent:{
        textAlign:'center',
        padding:10,
        margin:5,
        fontSize:40,
        fontWeight:'bold',
        color:'white',
    },
    textSecondComponent:{
        textAlign:'center',
        padding:10,
        margin:5,
        fontSize:21,
        fontWeight:'bold',
        color:'white',
    }
})