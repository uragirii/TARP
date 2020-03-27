import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Headline,  TextInput,  Card, Caption, Subheading} from "react-native-paper";
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler';


export class NewUserScreen extends Component {
    state = {

    }
    checkAndProceed(){
        // TODO: Implement form checkin here
        this.props.navigation.navigate("Symptoms")
    }
    render() {
        return (
        <LinearGradient colors={['#8E2DE2', '#4A00E0']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.linearGradient}>
            <ScrollView>
                    <View>
                        <Card style={{margin:"5%", padding: "3%", padding:0, border:1, borderRadius: 10,elevation:12, marginTop:"10%" }} >
                            <Headline style={{margin:"5%",padding:"5%"}}>New User</Headline>
                            <Caption style={{marginHorizontal:"5%", paddingHorizontal:"5%"}}>Seems like we haven't been introduced before.</Caption>
                            <Caption style={{marginHorizontal:"5%", paddingHorizontal:"5%", marginTop:"3%", marginBottom:"7%"}}>Please fill up following details before moving forward. These details will help doctors to give correct medical advice</Caption>
                        </Card>
                        <Card style={{margin:"5%", padding: "3%", padding:0, border:1, borderRadius: 10,elevation:12, marginTop:"4%" }} >
                            <Headline style={{margin:"5%",padding:"5%"}}>Personal Details</Headline>
                            <View style={{marginVertical:"3%"}}>
                                <TextInput label="Name" mode="outlined" style={{marginHorizontal:"15%"}} />
                                <TextInput label="Age" mode="outlined" style={{marginLeft:"15%", marginRight:"60%"}} keyboardType="numeric" maxLength={2} />
                            </View>
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
      }
})