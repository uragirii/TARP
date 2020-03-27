import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import {Card, Caption, Headline, Subheading, TouchableRipple,Button, ActivityIndicator } from "react-native-paper";
import Timeline from '../components/Timeline/Timeline'
import LinearGradient from 'react-native-linear-gradient'
// state : {
//     stage : "Which stage process is in 1, 2 or 3",
//     focussedArray = [],
//     completedArray = []
// }

export class DetailsScreen extends Component {
    state = {
        stage : 1,
        focussedArray : [false, false, false],
        completedArray : [false, false, false],
        symptoms : ["Symptom 1", "Symptom 2", "Symptom 3"],
        headings : ["Waiting for Doctor", "Additional Data", "Writing Prescribtion"],
        subheadings : [
            "We are connecting your request to Doctors. This usually takes 2-3 mins.",
            "Doctors can request additional checkup for you.",
            "Doctor is writing your prescribtion. Just a minute."
        ],
        dataRequested: false,
        code: "",
        doctorName : "Dr. Sanjeev Goel"
    }
    changeArrays(){
        //Depending on current stage changes the array
        // this.setState({
        //     stage: this.state.stage+1
        // })
        let newFocussed = []
        let newCompleted = []
        for(let i=0;i<3;++i){
            if (i<this.state.stage-1){
                newCompleted.push(true)
                newFocussed.push(true)
            }
            else if(i===(this.state.stage-1)){
                newFocussed.push(true)
                newCompleted.push(false)
            }
            else{
                newCompleted.push(false)
                newFocussed.push(false)
            }
        }
        this.setState({
            focussedArray : newFocussed,
            completedArray : newCompleted
        })
    }
    changeOfStage(){
        if(this.state.stage===1){
            let newHeadings = this.state.headings
            newHeadings[0] = "Doctor Accepted"
            let newSubheadings = this.state.subheadings
            newSubheadings[0] = `${this.state.doctorName} has accepted your request. Doctor is currently reviewing your symptoms`
            this.setState({
                stage : 2,
                headings: newHeadings,
                subheadings: newSubheadings
            })
            this.changeArrays()
        }
        if(this.state.stage === 2){
            if(this.state.dataRequested){
                let newHeadings = this.state.headings
                newHeadings[1] = "Additonal Data Required"
                let newSubheadings = this.state.subheadings
                newSubheadings[1] = "Doctor has requested some additional data. Please visit medical center in your hostel to take readings. Your code is 3453"
                this.setState({
                    headings: newHeadings,
                    subheadings: newSubheadings
                })
            }
            else{
                let newHeadings = this.state.headings
                newHeadings[1] = "Not Required"
                let newSubheadings = this.state.subheadings
                newSubheadings[1] = "Doctor does not require your readings. They have skipped this step."
                this.setState({
                    stage:3,
                    headings: newHeadings,
                    subheadings: newSubheadings
                })
                this.changeArrays()
            }
        }
    }
    checkAndProceed(){
        this.props.navigation.navigate("Prescription", {symptoms: this.state.symptoms})
    }

    componentDidMount(){
        this.changeArrays()
    }
    render() {
        let timeline= []
        let viewPresc = false
        for(let i=0;i<3;++i){
            timeline.push((
                <Timeline
                        completed={this.state.completedArray[i]}
                        heading={this.state.headings[i]}
                        subheading={this.state.subheadings[i]}
                        focused = {this.state.focussedArray[i]}
                    />
            ))
        }
        if(this.state.stage>4){
            viewPresc=true
        }
        return (
            <LinearGradient colors={['#8A2387', '#E94057', '#F27121']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.linearGradient}>

            <ScrollView>

            <View>
            <Card style={{margin:"5%", padding: "3%", padding:0, border:1, borderRadius: 10,elevation:12, marginTop:"10%" }} >
                
                <TouchableRipple onPress={()=>{this.changeOfStage()}}>
                    <View style={{padding: "5%"}}>
                    <Headline style={{}}>Apoorv Kansal</Headline>
                    <Caption style={{ marginTop:"2%"}}>19, Male , A Block</Caption>
                    <View style={{ flexDirection: 'row', justifyContent:"space-between", marginTop:"2%", paddingBottom:0, marginBottom:0}}>
                        <Caption style={{  paddingBottom:0, marginBottom:0}}>{this.state.symptoms.toString()}</Caption>
                    </View>
                    <View>
                    <View style={{ flexDirection: 'column', justifyContent:"space-between"}}>
                    {timeline}
                    </View>
                        <Button mode="contained" disabled={!viewPresc} style={{
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