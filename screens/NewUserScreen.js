import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Paragraph, Button} from 'react-native-paper'

export class NewUserScreen extends Component {
    state = {

    }
    checkAndProceed(){
        // TODO: Implement form checkin here
        this.props.navigation.navigate("Symptoms")
    }
    render() {
        return (
            <View>
                <Text style ={styles.heading}>New User</Text>
                <Paragraph style= {styles.para}>We couldnot find any account associated with your Registration Number.</Paragraph>
                <Paragraph style= {styles.para}>Please fill following details carefully. Doctors will view these details in order for providing you better prescription</Paragraph>
                <Button style={styles.button} onPress={()=>{this.checkAndProceed()}} icon="information" mode="contained">Proceed</Button>
            </View>
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
    }
})