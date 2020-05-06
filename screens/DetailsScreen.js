import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import {Card, Caption, Headline, Subheading, TouchableRipple,Button, ActivityIndicator } from "react-native-paper";
import Timeline from '../components/Timeline/Timeline'
import LinearGradient from 'react-native-linear-gradient'
import LottieView from 'lottie-react-native';
// state : {
//     stage : "Which stage process is in 1, 2 or 3",
//     focussedArray = [],
//     completedArray = []
// }

export class DetailsScreen extends Component {
    state = {
        title: "Connecting to Doctor",
        text: "We are notifying doctors about your symptoms. This process takes around 3-4 mins.",
        symptoms : this.props.route.params.symptoms,
        student:this.props.route.params.student,
        viewPresc: false,
    }
    changeArrays(){
        
    }
    changeOfStage(){
        if (this.state.title==="Connecting to Doctor"){
            this.setState({
                title: "Writing Prescription",
                text: "Doctor is now reviewing your symptoms and writing Presciption. Hang on for 2 more minutes.",
            })
        }
        else{
            this.setState({
                title: "Prescription Recieved",
                text: "Click view to view the course prescribed by doctor",
                viewPresc:true
            })
        }
    }
    checkAndProceed(){
        this.props.navigation.navigate("Prescription", {symptoms: this.state.symptoms})
    }

    componentDidMount(){
        this.changeArrays()
    }
    render() {
        
        const student = this.state.student
        let animation
        if (this.state.title === 'Connecting to Doctor'){
            animation = (
                <LottieView source={require('../assests/loading.json')} autoPlay={true} loop={true} style={{
                    width:"80%",
                    justifyContent:"center",
                    alignSelf:"center",
                    marginVertical:"5%",
                    paddingTop:"5%"
                }} />
            )
        }
        else if (this.state.title === "Writing Prescription"){
            animation = (
                <LottieView source={require('../assests/notes.json')} autoPlay={true} loop={true} style={{
                    width:"100%",
                    justifyContent:"center",
                    alignSelf:"center",
                }} />
            )
        }
        else{
            animation = (
                <LottieView source={require('../assests/completed.json')} autoPlay={true} loop={false} style={{
                    width:"100%",
                    justifyContent:"center",
                    alignSelf:"center",
                }} />
            )
        }
        return (
            <LinearGradient colors={['#8A2387', '#E94057', '#F27121']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.linearGradient}>

            <ScrollView>

            <View>
            <Card style={{margin:"5%", padding: "3%", padding:0, border:1, borderRadius: 10,elevation:12, marginTop:"10%" }} >
                
                <TouchableRipple onPress={()=>{this.changeOfStage()}}>
                    <View style={{padding: "5%"}}>
                    <Headline style={{}}>{student.name}</Headline>
                    <Caption style={{ marginTop:"2%"}}>{student.age}, {student.sex === "M"? "Male" :"Female"} , {student.hostel} Block</Caption>
                    <View style={{ flexDirection: 'row', justifyContent:"space-between", marginTop:"2%", paddingBottom:0, marginBottom:0}}>
                        <Caption style={{  paddingBottom:0, marginBottom:0}}>{this.state.symptoms.toString()}</Caption>
                    </View>
                    <View>
                    <View style={{ flexDirection: 'column', justifyContent:"space-between"}}>
                    <View>
                        {animation}
                        <Subheading>
                            {this.state.title}
                        </Subheading>
                        <Caption style={{marginTop:"5%"}}>
                            {this.state.text}
                        </Caption>
                    </View>
                    </View>
                        <Button mode="contained" disabled={!this.state.viewPresc} onPress={()=>{this.checkAndProceed()}} style={{
                            marginTop:"4%",
                            marginLeft:"4%",
                            maxWidth:"40%"
                        }}>View</Button>
                    </View>
                    </View>
                    
                </TouchableRipple>
                </Card>
    
            </View>
            </ScrollView>
            </LinearGradient>

        )
    }
}

export default DetailsScreen

const styles = StyleSheet.create({
    heading : {
        marginTop : "5%",
        margin : "5%",
        marginBottom : 0,
        fontSize : 40
    },
    textInput : {
        marginVertical : "7%",
        marginHorizontal : "5%"
    },
    button : {
    },
    chips:{
        display:"flex"
    },
    linearGradient: {
        flex: 1,
        borderRadius: 0
      }
})