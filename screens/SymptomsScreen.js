import React, { Component } from 'react'
import { Text, View, StyleSheet, ToastAndroid,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TextInput, Chip, Paragraph,Card, Button, TouchableRipple, List, Caption } from "react-native-paper";
import LinearGradient from'react-native-linear-gradient'
export class SymptomsScreen extends Component {
    state={
        student: this.props.route.params.student,
        chips : [],
        text : ''
    }
    checkAndProceed(){
        this.setState(prevState=>{
            if(this.state.text.trim()!==""){
                prevState.chips.push(this.state.text.trim())
                return {
                    chips : prevState.chips
                }
            }
        })
        if (this.state.chips.length<1){
            ToastAndroid.show("Enter some symptoms", ToastAndroid.SHORT)
        }
        else{
            this.props.navigation.navigate("Details", {symptoms: this.state.chips, student : this.state.student})
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
                key = {i}
                >
                {this.state.chips[i]}</Chip>
            ))

        }
        return (
        <LinearGradient colors={['#8E2DE2', '#4A00E0']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.linearGradient}>
            <ScrollView>
                <View>
                <Card style={{margin:"5%", padding: "3%", padding:0, border:1, borderRadius: 10,elevation:12, marginTop:"10%" }} >
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
                    mode="flat"
                    style={styles.button} 
                    onPress={()=>{this.checkAndProceed()}}>Get Presciption</Button>
                </Card.Actions>
                </Card>
                <Caption style={{color:"white", textAlign:"center"}}>Or choose from your past symptoms</Caption>

                <Card style={{margin:"5%", padding: "3%", padding:0, border:1, borderRadius: 10,elevation:12, marginTop:"5%" }} >

                <Card.Content>
                    <List.Section>
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
            </LinearGradient>
        )
    }
}

export default SymptomsScreen

const styles = StyleSheet.create({
    para : {
        marginHorizontal:"7%",
        marginTop:"7%"
    },
    textInput : {
        marginVertical : "7%",
        marginHorizontal : "5%"
    },
    button : {
        marginBottom:"7%",
        marginTop:"3%",
        flexDirection:"row",
        flex:1,
        marginHorizontal:"7%",
        justifyContent:"flex-end"
    },
    chips:{
        display:"flex"
    }
})