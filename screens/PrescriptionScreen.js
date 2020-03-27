import React, { Component } from 'react'
import { Text, View, StyleSheet,ScrollView } from 'react-native'
import {Icon} from 'react-native-vector-icons'
import {Card, Caption, Headline, Subheading, TouchableRipple} from 'react-native-paper'
import LinearGradient from "react-native-linear-gradient";

export default class PrescriptionScreen extends Component {
    state = {
        symptoms : ["Fever", "Nose Running"],
        expanded : false
    }
    expandDisease(){
        this.setState({
            expanded: !this.state.expanded
        })
    }
    
    render() {
        let diseaseDetails = []
        if (this.state.expanded){
            diseaseDetails.push((
                <View>
                    <Caption style={{color:"white", marginVertical:"1%", marginTop:"7%"}}>
                        {this.state.symptoms.toString()}
                    </Caption>
                    <View style={styles.justifySpaceRow}>
                        <View style={styles.justifySpaceCol} >
                            <Caption style={{ color:"white", padding:0, margin:0, textAlign:"center"}}>Temperature</Caption><Caption style={{color:"white", padding:0,margin:0, textAlign:"center"}}>100F</Caption>
                        </View>
                        <View style={styles.justifySpaceCol} >
                            <Caption style={{ color:"white", padding:0, margin:0, textAlign:"center"}}>Blood Pressure</Caption><Caption style={{color:"white", padding:0,margin:0, textAlign:"center"}}>120/70</Caption>
                        </View>
                    </View>
                </View>
            ))
        }
        else{
            diseaseDetails.push((
                <Caption style={{color:"white", textAlign:"right"}}>More Details</Caption>
            ))
        }
        return (
            <ScrollView>
                
            <View>
                <Card style={{margin:"5%", padding: "3%", padding:0, border:1, borderRadius: 10,elevation:10}} >
                
                <LinearGradient colors={['#8A2387', '#E94057', '#F27121']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.linearGradient}>
                <TouchableRipple onPress={()=>{this.expandDisease()}}>
                    <View style={{padding: "5%"}}>
                    <Headline style={{color:"white"}}>Common Cold</Headline>
                    <Caption style={{color:"white", marginTop:"2%"}}>Dr. Sanjeev Goel</Caption>
                    <View style={{ flexDirection: 'row', justifyContent:"space-between", marginTop:"2%", paddingBottom:0, marginBottom:0}}>
                        <Caption style={{ color:"white", paddingBottom:0, marginBottom:0}}>24 Mar 2020</Caption><Caption style={{color:"white", paddingBottom:0,marginBottom:0}}>Prescription ID #34R343</Caption>
                    </View>
                    {diseaseDetails}
                    </View>
                </TouchableRipple>
                </LinearGradient>
                </Card>
                <Card style={{margin:"5%", padding: "5%", border:1, borderRadius: 10, marginVertical:"1%"}} >
                    <View style={{...styles.justifySpaceRow, marginTop:0}}>
                        <View style={{...styles.justifySpaceCol, marginTop:0}}>
                            <Subheading >Tab. Dolo</Subheading>
                            <Caption >100 mg</Caption>
                        </View>
                        <View style={{...styles.justifySpaceCol, marginTop:0}}>
                            <Subheading style={{textAlign:"right"}} >1-0-1</Subheading>
                            <Caption >After Eating</Caption>
                        </View>
                    </View>
                </Card>
                <Card style={{margin:"5%", padding: "5%", border:1, borderRadius: 10, marginVertical:"1%"}} >
                    <View style={{...styles.justifySpaceRow, marginTop:0}}>
                        <View style={{...styles.justifySpaceCol, marginTop:0}}>
                            <Subheading >Tab. Antibiotic</Subheading>
                            <Caption >150 mg</Caption>
                        </View>
                        <View style={{...styles.justifySpaceCol, marginTop:0}}>
                            <Subheading style={{textAlign:"right"}} >1-0-1</Subheading>
                            <Caption >Before Eating</Caption>
                        </View>
                    </View>
                </Card>
                <Card style={{margin:"5%", padding: "5%", border:1, borderRadius: 10, marginVertical:"1%"}} >
                    <View style={{...styles.justifySpaceRow, marginTop:0}}>
                        <View style={{...styles.justifySpaceCol, marginTop:0}}>
                            <Subheading >Tab. Lorem Ipsum</Subheading>
                            <Caption >150 mg</Caption>
                        </View>
                        <View style={{...styles.justifySpaceCol, marginTop:0}}>
                            <Subheading style={{textAlign:"right"}} >1</Subheading>
                            <Caption >If feverish</Caption>
                        </View>
                    </View>
                </Card>
                <Card style={{margin:"5%", padding: "5%", border:1, borderRadius: 10, marginVertical:"1%"}} >
                    <View style={{...styles.justifySpaceRow, marginTop:0}}>
                        <View style={{...styles.justifySpaceCol, marginTop:0}}>
                            <Subheading >Srp. Anxtril</Subheading>
                            <Caption >100 ml</Caption>
                        </View>
                        <View style={{...styles.justifySpaceCol, marginTop:0}}>
                            <Subheading style={{textAlign:"right"}} >1-0-1</Subheading>
                            <Caption >5ml After Eating</Caption>
                        </View>
                    </View>
                </Card>
                <Caption style={{textAlign:"center", color:"black"}}>Follow this course for 5 days</Caption>
                <Card style={{margin:"5%", padding: "5%", border:1, borderRadius: 10, marginVertical:"1%"}} >
                    <View style={{...styles.justifySpaceRow, marginTop:0}}>
                        <View style={{...styles.justifySpaceCol, marginTop:0}}>
                            <Subheading >Extra Notes:</Subheading>
                            <Caption >Drink Warm water</Caption>
                            <Caption>Do Salt Water Garggles</Caption>
                        </View>
                    </View>
                </Card>
                <Caption style={{textAlign:"center", marginBottom:"4%", color:"black"}}>Thats all.</Caption>
            </View>
            </ScrollView>
        )
    }
}


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
    buttonText : {
        color:"white"
    },
    justifySpaceRow:{ 
        flexDirection: 'row', 
        justifyContent:"space-between", 
        marginTop:"2%"
    },
    justifySpaceCol:{ 
        flexDirection: 'column', 
        justifyContent:"space-between", 
        marginTop:"2%"
    },
    linearGradient: {
        flex: 1,
        borderRadius: 10
      }
})