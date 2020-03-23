import React, { Component } from 'react'
import { View, StyleSheet, ToastAndroid, Linking } from 'react-native'
import { Headline,  TextInput, Button } from "react-native-paper";

export class LoginScreen extends Component {
    state = {
        text : ''
    };
    checkAndProceed(){
        if(this.state.text=== ''){
            ToastAndroid.show("Please Enter Registration Number to proceed", ToastAndroid.SHORT)
        }
        else{
            this.props.navigation.navigate("NewUser")
        }
    }
    render() {
        return (
            <View style={styles.view}>
                <Headline>Registration Number</Headline>
                    <View style = {styles.textbox}>
                        <TextInput
                        label="Registration Number"
                        value = {this.state.text}
                        onChangeText = {text=>this.setState({
                            text
                        })}
                        mode = "outlined"
                        />
                        <Button icon="" mode="contained" style={styles.button} onPress={()=>this.checkAndProceed()}> Login </Button>
                        <Button icon="call" mode="contained" onPress={()=>Linking.openURL("tel:00000000")}> Call Ambulance </Button>

                    </View>                
            </View>
        )
    }
}

export default LoginScreen

const styles = StyleSheet.create({
    view : {
        margin : "10%"
    },
    textbox : {
        marginTop : "5%",
        marginRight : "10%",   
    },
    button : {
        marginVertical : "5%",
        marginHorizontal : "30%"
    }
})
