import React, { Component } from 'react'
import { View, StyleSheet, ToastAndroid, Linking, Text } from 'react-native'
import { Headline,  TextInput,  Card, Caption, Button, ActivityIndicator} from "react-native-paper";
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import firestore from '@react-native-firebase/firestore';

export class LoginScreen extends Component {
    state = {
        text : '',
        loading:false,
        display: "none",
        displayForm : "flex"
    }
    loading = null;
    form = null;
    async checkAndProceed(){
        if(this.state.text=== ''){
            ToastAndroid.show("Please Enter Registration Number to proceed", ToastAndroid.SHORT)
        }
        else{
            // this.props.navigation.navigate("NewUser")
            // Here first check if the user exists or not. If user exists then go to symptoms page
            this.setState({
                loading:true,
            })
            const studentCollection = firestore().collection('students');
            const student = await studentCollection.doc(this.state.text.toUpperCase()).get()
            if(student.exists){
                const studentInfo = student.data()
                this.props.navigation.navigate("Symptoms", {student: studentInfo})
            }
            else{
                // Student needs to create a new id
                this.props.navigation.navigate("NewUser", {number: this.state.text.toUpperCase()})
            }
        }
    }
    //TODO: Use regex statement for checking registration number
    render() {
        let cardDetails
        if(this.state.loading){
            cardDetails = (
                <View>
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop:"20%",marginBottom:"4%"}}>
                    <ActivityIndicator color="#f90024"/><Text style={{color:"white", paddingLeft:"5%"}}> Checking Database</Text>
                </View>
                </View>
            )
        }
        else{
            cardDetails = (
            <Card style={{margin:"5%", padding: "3%", padding:0, border:1, borderRadius: 10,elevation:12, marginTop:"10%" }} >
                <View>
                <Headline style={{fontSize:40, paddingTop:"5%", marginTop:"15%", textAlign:"center", paddingBottom:"2%"}}>Hello Doctor!</Headline>
                    <Caption style={{textAlign:"center", padding:"5%"}}>Get medical assistance without leaving your Hostel.</Caption>
                    <TextInput style={{maxWidth:"60%", marginHorizontal:"20%", marginBottom:"5%", textAlign:"center"}} 
                    label="Registration Number" 
                    mode="outlined"
                    value={this.state.text}
                    onChangeText={text=>{this.setState({text:text.toUpperCase()})}}
                     ></TextInput>
                    <View style={styles.justifySpaceRow}>
                        <Button mode="contained" onPress={()=>Linking.openURL("tel:00000000")}>Call Ambulance</Button>
                        <Button mode="contained" onPress={()=>this.checkAndProceed()} loading={this.state.loading} disabled={this.state.loading}>Go!</Button>
                    </View>
                    </View>
                    </Card>
                
            )
        }
        return (
            <LinearGradient colors={['#8E2DE2', '#4A00E0']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.linearGradient}>

         
            <View style={{flexDirection:"column", justifyContent:"space-around", flex:1}}>
                {cardDetails}
        <Caption style={{color:"white", textAlign:"center"}}>Made with <Icon name="heart"></Icon> by VITians</Caption>
            </View>
            </LinearGradient>
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
    },
    continue : {
        width : 70,
        height : 70,
        borderRadius : 70/ 2,
        backgroundColor : "#9075E3",
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#4A00E0"
    },
    linearGradient: {
        flex: 1,
        borderRadius: 0
      },
      justifySpaceRow:{ 
        flexDirection: 'row', 
        justifyContent:"space-around", 
        marginTop:"2%",
        marginBottom:"10%"
    }
})
