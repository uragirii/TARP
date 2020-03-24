import React, { Component } from 'react'
import { Text, View, StyleSheet,ScrollView } from 'react-native'
import {Card,Headline, Subheading, Chip, Caption, DataTable, Divider, Paragraph, List, TouchableRipple} from 'react-native-paper'

export class PrescriptionScreen extends Component {
    state = {
        symptoms : this.props.route.params.symptoms,
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
                <View style={{flex: 1, flexDirection: 'row', justifyContent:"space-between"}}>
                    <Caption style={{margin:"5%"}}>Prescription ID #34R343 </Caption><Caption style={{margin:"5%"}}>23 Mar 2020 </Caption>
                </View>
                <Card style={{margin:"3%", padding: "5%", paddingVertical: "3%"}}>
                    <Card.Content>
                            <Headline>Apoorv Kansal</Headline> 
                        <Caption>19, Male, A Block</Caption>
                        <Divider style={{margin:"3%"}}/>
                    
                        <Subheading style={{marginVertical:"3%"}}>Common Cold</Subheading>
                        <List.Section style={{margin:0, padding:0}}>
                            <List.Accordion
                            title="Symptoms"
                            style={{margin:0, padding:0}}
                            >
                            <List.Item title="First item" style={{margin:0, padding:0}}/>
                            <List.Item title="Second item"style={{margin:0, padding:0}} />
                            </List.Accordion>
                            <List.Accordion
                            title="Additional Data"
                            style={{margin:0, padding:0}}
                            >
                            <List.Item title="Temperature 100" style={{margin:0, padding:0}}/>
                            <List.Item title="Blood Pressure Normal"style={{margin:0, padding:0}} />
                            </List.Accordion>
                        </List.Section>                        
                        <DataTable style={{marginHorizontal:0, paddingHorizontal:0}}>
                            <DataTable.Header style={{marginHorizontal:0, paddingHorizontal:0}}>
                                <DataTable.Title>Medicine</DataTable.Title>
                                <DataTable.Title numeric>
                                    Dosage
                                </DataTable.Title>
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
                        <Caption style={{marginVertical:"4%"}}>You can collect medicines from medical center in your Hostel.</Caption>
                        <Caption>Help?</Caption>
                        <Paragraph style={{marginVertical:"4%"}}>Total course duration 5 days</Paragraph>
                        <Paragraph style={{marginVertical:"4%"}}>Extra Notes:</Paragraph>
                        <Text style={{marginVertical:"2%"}}>Drink Hot Water.</Text>
                        <Text style={{marginVertical:"2%"}}>Do Salt water Garggles</Text>
                        <Caption style={{marginVertical:"4%"}}>Prescription by Dr. Sanjeev Goel</Caption>
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