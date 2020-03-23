import React, { Component } from 'react'
import { Text, View, StyleSheet,ScrollView } from 'react-native'
import {Card,Headline, Subheading, Chip, Caption, DataTable, Divider, Paragraph} from 'react-native-paper'

export class PrescriptionScreen extends Component {
    state = {
        symptoms : this.props.route.params.symptoms
    }
    render() {
        let chips = []
        for(let i=0;i<this.state.symptoms.length;++i){
            chips.push((
            <Chip
                style ={{margin:"1%"}}
                mode="flat" 
                >
                {this.state.symptoms[i]}</Chip>
            ))
        }
        return (
            <ScrollView>
            <View>
                <Text style={styles.heading}>Prescription </Text>
                <Caption style={{margin:"5%"}}>Prescription ID #34R343 </Caption>
                <Card style={{margin:"3%", padding: "5%", paddingVertical: "3%"}}>
                    <Card.Content>
                        <Headline>Apoorv Kansal</Headline>
                        <Caption>19, Male, A Block</Caption>
                        <Subheading style={{marginVertical:"3%"}}>Common Cold</Subheading>
                        <Text>Symptoms : </Text>
                        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                            {chips}
                        </View>
                        <Text>Additional Data : None</Text>
                        <Divider style={{marginVertical:"5%"}}/>
                        <Text style={{marginVertical:"2%"}}>Prescription</Text>
                        <DataTable style={{marginHorizontal:0, paddingHorizontal:0}}>
                            <DataTable.Header style={{marginHorizontal:0, paddingHorizontal:0}}>
                                <DataTable.Title>Medicine</DataTable.Title>
                                <DataTable.Title numeric>Dosage</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row style={{marginHorizontal:0, paddingHorizontal:0}}>
                                <DataTable.Cell>Dolo 200mg</DataTable.Cell>
                                <DataTable.Cell numeric>0-1-1</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row style={{marginHorizontal:0, paddingHorizontal:0}}>
                                <DataTable.Cell>Antibiotic 100mg</DataTable.Cell>
                                <DataTable.Cell numeric>1-1-1</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row style={{marginHorizontal:0, paddingHorizontal:0}}>
                                <DataTable.Cell>Ipsum 100mg</DataTable.Cell>
                                <DataTable.Cell numeric>0-0-1</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row style={{marginHorizontal:0, paddingHorizontal:0}}>
                                <DataTable.Cell>Lorem 100mg</DataTable.Cell>
                                <DataTable.Cell numeric>0-0-1</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                        <Divider/>
                        <Paragraph style={{marginVertical:"4%"}}>You can collect medicines from medical center in your Hostel.</Paragraph>
                        <Paragraph style={{marginVertical:"4%"}}>Precautions:</Paragraph>
                        <Text style={{marginVertical:"2%"}}>Drink Hot Water.</Text>
                        <Text style={{marginVertical:"2%"}}>Do Salt water Garggles</Text>
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