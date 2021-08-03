import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import firebase from 'firebase';
import { KeyboardAvoidingView } from 'react-native';

export default class LoginScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email :'',
            password :'',
        }
    }

    login = async(email, password) => {
        if(email && password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email, password)
                if(response){
                    this.props.navigation.navigate('MainScreen')
                }
            }
                catch(error){
                    switch(error.code){
                        case 'auth/user-not-found':
                            alert("User doesn't exist")
                        break;

                        case 'auth/invalid-email':
                            alert("Incorrect E-mail or password")
                        break;
                    }
                }
        }
        else{
            alert("Enter email and password")
        }
    }

render(){
    return(
        <KeyboardAvoidingView style={{alignItems:'center', marginTop:20}}>
            <View style={{alignSelf:'center'}}>
                <Text style={{fontSize:20, fontWeight:'bold', alignItems:'center'}}>
                    LOGIN BEFORE YOU PROCEED
                </Text>
            </View>

            <View>
            <TextInput
                        style={styles.loginBox}
                        placeholder='ABC@gmail.com'
                        keyboardType="email-address"
                        onChangeText={(text)=>{
                            this.setState({
                                email:text
                            })
                        }}
                    />

                    <TextInput
                        style={styles.loginBox}
                        placeholder='Enter password here'
                        secureTextEntry={true}
                        onChangeText={(text)=>{
                            this.setState({
                                password:text
                            })
                        }}
                    />
            </View>

            <View>
                    <TouchableOpacity style={{height:30, width:90, borderWidth:1, marginTop:20, paddingTop:5, borderRadius:10}}
                    onPress={()=>{
                        this.login(this.state.email, this.state.password)
                    }}
                    >
                        <Text style={{textAlign:'center'}}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                </View>

        </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({ loginBox: { width: 300, height: 40, borderWidth: 1.5, fontSize: 20, margin:10, paddingLeft:10 } })