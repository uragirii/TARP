import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Card, Headline, Subheading, List, Portal, Dialog, Paragraph, Button, Divider } from "react-native-paper";

export class DetailsScreen extends Component {
    state = {
        status : "Waiting for Doctor's Response",
        color : "#AAA",
        dataRequired : false,
        prescribtionRcvd : false,
        additionalData : [],
        code : "Not Required",
        dialogVisible : false,
        symptoms : this.props.route.params.symptoms
    }
    checkAndProceed(){
        this.props.navigation.navigate("Prescription", {symptoms: this.state.symptoms})
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                status : "Additional Data Required",
                color : "#000",
                dataRequired : true,
                additionalData : ["Temperature", "Blood Pressure", "Data 3", "Data 4"],
                code : "Your Code :4532",
                dialogVisible: true
            })
        }, 500)
        setTimeout(()=>{
            this.setState({
                status : "Prescription Recieved",
                color : "#AAA",
                dataRequired : false,
                additionalData : [],
                code : "",
                dialogVisible: false,
                prescribtionRcvd : true
            })
        }, 500)
    }
    render() {
        let symptoms = [];
        let additionalData = [];
        let buttonText = "Waiting"
        for(let i=0;i<this.props.route.params.symptoms.length;++i){
            symptoms.push((
                <List.Item 
                title={this.props.route.params.symptoms[i]} 
                style={{
                    padding:0}}/>
            ))
        }
        let dataText = "Doctor can request additional data for prescribing you medicines"
        if (this.state.dataRequired){
            dataText = "Doctor has requested following readings"
            buttonText = "Data Required"
        }
        if(this.state.prescribtionRcvd){
            buttonText = "View Prescription"
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
                <Text style={styles.heading}>Details  </Text>
                <Portal>
                    <Dialog 
                        visible ={this.state.dialogVisible}
                        onDismiss = {()=> {this.setState({dialogVisible : false})}}>
                            <Dialog.Content><Paragraph>Doctor has requested some additional data. Please visit medical center in your hostel to get these readings</Paragraph></Dialog.Content>
                            <Dialog.Actions><Button onPress = {()=> {this.setState({dialogVisible : false})}}>Understood</Button></Dialog.Actions>
                        </Dialog>
                </Portal>
                <Card style={{margin:"3%", padding: "5%", paddingVertical: "3%"}}>
                    <Card.Content>
                        <Headline>Patient Name</Headline>
                        <Subheading style={{fontStyle:"italic"}}>19,Male, A Block</Subheading>
                        <List.Section>
                            <Text style={{marginVertical:"1%"}}>Your Symptoms are :</Text>
                            {symptoms}
                        </List.Section>
                        <Divider/>
                        <Text style={{fontWeight:"bold", marginTop:"5%"}}>Status : {this.state.status}</Text>
                        <Card.Actions style={{marginBottom:0}}>
                            <Button 
                            style={{marginTop:"5%"}}
                            mode="contained"
                            disabled = {!this.state.prescribtionRcvd}
                            loading = {!this.state.prescribtionRcvd}
                            onPress= {()=>{this.checkAndProceed()}}
                            >{buttonText}</Button>
                        </Card.Actions>
                    </Card.Content>
                </Card>
                {//TODO: Use green fonts and tick marks after Recieving data
    }
                <Card style={{margin:"3%", padding: "5%", paddingTop: "3%"}}>
                    <Card.Content >
                        <Headline style={{color: this.state.color}}>Additional Data</Headline>
                        <Subheading style={{marginTop : "2%"}}>{this.state.code}</Subheading>
                            <Text style={{color: this.state.color, marginTop : "2%"}}>{dataText}</Text>
                        {additionalData}
                    </Card.Content>
                </Card>
            </View>
            </ScrollView>
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
    }
})