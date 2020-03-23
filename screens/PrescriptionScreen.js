import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Card, Headline, Subheading, List, Portal, Dialog, Paragraph, Button } from "react-native-paper";

export class PrescriptionScreen extends Component {
    state = {
        status : "Waiting for Doctor's Response",
        color : "#AAA",
        dataRequired : false,
        additionalData : [],
        code : "",
        dialogVisible : false
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                status : "Additional Data Required",
                color : "#000",
                dataRequired : true,
                additionalData : ["Temperature", "Blood Pressure"],
                code : "4532",
                dialogVisible: true
            })
        }, 2000)
    }
    componentDidUpdate(){
        if(this.state.dataRequired){
            console.log("Additional Data Required")
        }
    }
    render() {
        let symptoms = [];
        let additionalData = []
        for(let i=0;i<this.props.route.params.symptoms.length;++i){
            symptoms.push((
                <List.Item 
                title={this.props.route.params.symptoms[i]} 
                style={{
                    padding:0}}/>
            ))
        }
        for(let i =0;i<this.state.additionalData.length;++i){
            additionalData.push((
                <List.Item 
                title={this.state.additionalData[i]} 
                style={{
                    padding:0}}/>
            ))
        }
        return (
            <ScrollView>
            <View>
                <Text style={styles.heading}> Prescription  </Text>
                <Portal>
                    <Dialog 
                        visible ={this.state.dialogVisible}
                        onDismiss = {()=> {this.setState({dialogVisible : false})}}>
                            {/* <Dialog.Title>Additional Data Needed</Dialog.Title> */}
                            <Dialog.Content><Paragraph>Doctor has requested some additional data. Please visit medical center in your hostel to get these readings</Paragraph></Dialog.Content>
                            <Dialog.Actions><Button onPress = {()=> {this.setState({dialogVisible : false})}}>OK</Button></Dialog.Actions>
                        </Dialog>
                </Portal>
                <Card style={{margin:"3%", padding: "5%", paddingTop: "3%"}}>
                    <Card.Content>
                        <Headline>Patient Name</Headline>
                        <Subheading style={{fontStyle:"italic"}}>19,Male, A Block</Subheading>
                        <List.Section>
                            <Text style={{marginVertical:"1%"}}>Your Symptoms are :</Text>
                            {symptoms}
                        </List.Section>
                        <Text style={{fontWeight:"bold"}}>Status : {this.state.status}</Text>
                    </Card.Content>
                </Card>
                <Card style={{margin:"3%", padding: "5%", paddingTop: "3%"}}>
                    <Card.Content >
                        <Headline style={{color: this.state.color}}>Additional Data</Headline>
                        <Subheading>{this.state.code}</Subheading>
                        <Text style={{color: this.state.color}}>Doctor can request additional data for prescribing you medicines</Text>
                        
                        {additionalData}
                    </Card.Content>
                </Card>
            </View>
            </ScrollView>
        )
    }
}

export default PrescriptionScreen

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
    }
})