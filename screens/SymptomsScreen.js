import React, { Component } from 'react'
import { Text, View, StyleSheet, ToastAndroid,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TextInput, Chip, Paragraph,Card, Button, TouchableRipple, List } from "react-native-paper";

export class SymptomsScreen extends Component {
    state={
        chips : ["One", "Two"],
        text : ''
    }
    checkAndProceed(){
        if (this.state.chips.length<1){
            ToastAndroid.show("Enter some symptoms", ToastAndroid.SHORT)
        }
        else{
            this.props.navigation.navigate("Details", {symptoms: this.state.chips})
        }
    }
    removeChip(i){
        this.setState(prevState=>{
            prevState.chips.splice(i,1)
            console.log(prevState)
            return prevState
        })

    }
    renderText(txt){
        let splitted = txt.split(",")
        if(splitted.length>1){
            this.setState(prevState=>{
                if(prevState.chips.includes(splitted[0].trim())){
                    ToastAndroid.show("Already Added", ToastAndroid.SHORT)
                    return {
                        text : splitted[1]
                    }
                }else{
                    prevState.chips.push(splitted[0].trim())
                return {
                    text : splitted[1],
                    chips : prevState.chips
                }
                }
                
            })
        }
        else{
            this.setState({
                text:txt
            })
        }
    }
    render() {
        let chips = []
        for(let i=0;i<this.state.chips.length;++i){
            chips.push((
            <Chip
                style ={{margin:"1%"}}
                mode="flat" 
                onClose={()=>{this.removeChip(i)}}
                icon={<Icon name="close"></Icon>} 
                >
                {this.state.chips[i]}</Chip>
            ))

        }
        return (
            <ScrollView>
                <View>
                <Text style={styles.heading}> Symptoms</Text>
                <Card style={{margin:"3%", padding: "5%", paddingTop: "3%"}}>
                <Card.Content>
                <Paragraph style={styles.para}>Enter you Symptoms. Seperate them with comma </Paragraph>
                <TextInput style={styles.textInput} 
                mode="outlined" 
                label="Symptoms" 
                onChangeText={(text)=>{this.renderText(text)}} 
                value={this.state.text}/>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    {chips}
                </View>
                </Card.Content>
                <Card.Actions>
                    <Button 
                    style={{alignContent:"flex-end"}} 
                    onPress={()=>{this.checkAndProceed()}}>Get Presciption</Button>
                </Card.Actions>
                </Card>
                <Card style={{margin:"3%", padding: "5%", paddingTop: 0}}>
                <Card.Content>
                    <List.Section>
                        <List.Subheader>Your History of past 5 treatments</List.Subheader>
                    <TouchableRipple 
                    onPress={()=>{console.log('List Item Pressed')}}
                    >
                    <List.Item 
                    title = "Disease Name"
                    description = "Symptom 1, Symptom 2, Symptom 3, Symptom 3"
                    />
                    </TouchableRipple>

                    <TouchableRipple 
                    onPress={()=>{console.log('List Item Pressed')}}
                    >
                    <List.Item 
                    title = "Disease Name"
                    description = "Symptom 1, Symptom 2, Symptom 3, Symptom 3"
                    />
                    </TouchableRipple>

                    <TouchableRipple 
                    onPress={()=>{console.log('List Item Pressed')}}
                    >
                    <List.Item 
                    title = "Disease Name"
                    description = "Symptom 1, Symptom 2, Symptom 3, Symptom 3"
                    />
                    </TouchableRipple>

                    <TouchableRipple 
                    onPress={()=>{console.log('List Item Pressed')}}
                    >
                    <List.Item 
                    title = "Disease Name"
                    description = "Symptom 1, Symptom 2, Symptom 3, Symptom 3"
                    />
                    </TouchableRipple>

                    <TouchableRipple 
                    onPress={()=>{console.log('List Item Pressed')}}
                    >
                    <List.Item 
                    title = "Disease Name"
                    description = "Symptom 1, Symptom 2, Symptom 3, Symptom 3"
                    />
                    </TouchableRipple>
                </List.Section>
                </Card.Content>
                </Card>
            </View>
            </ScrollView>
        )
    }
}

export default SymptomsScreen

const styles = StyleSheet.create({
    heading : {
        marginTop : "5%",
        margin : "5%",
        marginBottom : 0,
        fontSize : 40
    },
    para : {

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