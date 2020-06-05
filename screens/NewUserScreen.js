import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Headline,  TextInput,  Card, Caption, Button, RadioButton, Snackbar} from "react-native-paper";
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

export class NewUserScreen extends Component {
    state = {
        name:"",
        sex:"",
        age:0,
        hostel : "",
        allergy : "No",
        history :"No",
        visible: false,
        loading:false
    }
    checkAndProceed(){
        if(this.state.name==="" || this.state.sex === "" || this.state.age===0 || this.state.hostel===""){
            this.setState({visible:true})
        }
        else{
            this.setState({loading:true})
            // Do Firebase commands
            // First connect to firebase and write data and then
            firestore()
            .collection('students')
            .doc(this.props.route.params.number)
            .set({
                name : this.state.name,
                sex : this.state.sex,
                age : this.state.age,
                hostel : this.state.hostel,
                allergy: this.state.allergy,
                history : this.state.history,
                prescription : [],
                regno : this.props.route.params.number
            })
            .then(() => {
                console.log('User added!');
                this.props.navigation.navigate("Symptoms", {
                    student :{
                        name : this.state.name,
                        sex : this.state.sex,
                        age : this.state.age,
                        hostel : this.state.hostel,
                        prescription : [],
                        regno : this.props.route.params.number
                    }
                })
            });
        }
    }
    changeBlock(sex){
        this.setState({ sex })
        if(sex==="F"){
            this.setState({hostel:"B"})
        }
    }
    render() {
        const block = this.state.hostel
        return (
        <LinearGradient colors={['#8E2DE2', '#4A00E0']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.linearGradient}>
            <ScrollView>
                    <View>
                    
                        <Card style={{margin:"5%", padding: "3%", padding:0, border:1, borderRadius: 10,elevation:12, marginTop:"10%" }} >
                            <Headline style={{margin:"5%",padding:"5%", marginTop:"7%"}}>New User</Headline>
                            <Caption style={{marginHorizontal:"5%", paddingHorizontal:"5%"}}>Seems like we haven't been introduced before.</Caption>
                            <Caption style={{marginHorizontal:"5%", paddingHorizontal:"5%", marginTop:"3%", marginBottom:"7%"}}>Please fill up following details before moving forward. These details will help doctors to give correct medical advice</Caption>
                        </Card>
                        <Card style={{margin:"5%", padding: "3%", padding:0, border:1, borderRadius: 10,elevation:12, marginTop:"4%" }} >
                            <Headline style={{margin:"5%",padding:"5%", marginTop:"7%"}}>Personal Details</Headline>
                            <View style={{marginVertical:"3%", marginBottom:"7%"}}>
                                <TextInput label="Name" mode="outlined" style={{marginHorizontal:"15%"}} value={this.state.name} onChangeText={(name=>{this.setState({name})})} />
                                <View style={styles.justifySpaceRow}>            
                                <RadioButton.Group
                                    onValueChange={sex => {this.changeBlock(sex)}}
                                    value={this.state.sex}
                                >
                                    <View>
                                    <RadioButton value="M" />
                                    
                                    <Text>Male</Text>
                                    </View>
                                    <View>
                                    <RadioButton value="F" />

                                    <Text>Female</Text>
                                    </View>
                                </RadioButton.Group>
                                <TextInput mode="outlined" keyboardType="numeric" maxLength={2} placeholder="Age" value={this.state.age} onChangeText={(age=>{this.setState({age})})}/>                     
                                </View>
                                <View style={styles.justifySpaceRow}>
                                <RadioButton.Group
                                    onValueChange={hostel => {
                                        if(this.state.sex!=="F"){
                                            this.setState({ hostel })
                                        }
                                    }}
                                    value={this.state.hostel}
                                >
                                    <View>
                                    <RadioButton value="A" />
                                    
                                    <Text>A Block</Text>
                                    </View>
                                    <View>
                                    <RadioButton value="B" />

                                    <Text>B Block</Text>
                                    </View>
                                    <View>
                                    <RadioButton value="C" />

                                    <Text>C Block</Text>
                                    </View>
                                </RadioButton.Group>
                                </View>
                                
                            </View>
                        </Card>
                        <Card style={{margin:"5%", padding: "3%", padding:0, border:1, borderRadius: 10,elevation:12, marginTop:"2%" }} >
                            <View style={{marginBottom:"5%"}}>
                            <Headline style={{margin:"5%",padding:"5%", marginTop:"7%"}}>Medical Details</Headline>
                            <Caption style={{marginHorizontal:"10%", marginVertical:"5%"}} >Do you have any allergy to any medicine/drug?</Caption>
                            <TextInput label="If yes, then fill it" mode="outlined" style={{marginHorizontal:"10%"}} value={this.state.allergy} onChangeText={(allergy=>{this.setState({allergy})})} />
                            <Caption style={{marginHorizontal:"10%", marginVertical:"5%"}}>Do you have any medical history that Doctor should know ?</Caption>
                            <TextInput label="If yes, then fill it" mode="outlined" style={{marginHorizontal:"10%"}} value={this.state.history} onChangeText={(history=>{this.setState({history})})}/>
                            <View style={styles.justifySpaceRow}>
                                <Button mode="contained" onPress={()=>this.checkAndProceed()} style={{paddingBottom:"2%", marginTop:"5%"}} loading={this.state.loading} disabled={this.state.loading}>Submit</Button>
                            </View>
                            </View>
                            <Snackbar
                    visible={this.state.visible}
                    onDismiss={() => this.setState({ visible: false })}
                    action={{
                        label: 'OK',
                        onPress: () => { this.setState({ visible: false })},
                    }}
                    >
                    Please fill up all the details
                    </Snackbar>
                        </Card>
                        
                    </View>
            </ScrollView>
        </LinearGradient>
        )
    }
}

export default NewUserScreen

const styles = StyleSheet.create({
    heading : {
        marginTop : "10%",
        margin : "5%",
        fontSize : 40
    },
    para : {
        margin : "3%",
        padding : "3%"
    },
    button : {
        marginHorizontal : "30%"
    },
    linearGradient: {
        flex: 1,
        borderRadius: 0
      },
      justifySpaceRow:{ 
        flexDirection: 'row', 
        justifyContent:"space-around", 
        marginTop:"3%",
        marginBottom:"3%",
        marginHorizontal:"10%"
    },
    justifySpaceCol:{ 
        flexDirection: 'column', 
        justifyContent:"space-around", 
        marginTop:"2%",
        marginBottom:"10%"
    }
})