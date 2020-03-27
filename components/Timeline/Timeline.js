import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {ActivityIndicator, Subheading, Caption} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'

// Implements one block of the timeline.
// Props : {
//     loading,
//     heading,
//     paragraph
// }

export class Timeline extends Component {
    render() {
        let color = ""
        let loadingIndicator
        if(!this.props.focused && !this.props.completed){
            color="#AAA"
            loadingIndicator = (<Icon name="schedule" size={25} color={color}/>)
        }
        else if(!this.props.completed && this.props.focused){
            color = "#000"
            loadingIndicator = (<ActivityIndicator type="small"/>)
        }
        else if(this.props.completed){
            color="#1E9600"
            loadingIndicator = (<Icon name="done-all" size={25} color={color}/>)
        }

        
        return (
            <View style={{flexDirection:'column', flexWrap:'wrap', marginLeft:"5%", marginTop:"5%"}}>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <View>
                    {loadingIndicator}
                    </View>
        <Subheading style={{marginLeft:"4%", color: color}} >{this.props.heading}</Subheading>
                </View>
                <View style={{
                    borderStyle:"solid",
                    borderLeftWidth: 2,
                    marginLeft:"4%",
                    paddingLeft:"4%",
                    maxWidth: "70%",
                    borderLeftColor : color
                }}>
                    <Caption style={{color:color}}>{this.props.subheading}</Caption>
                </View>
            </View>
        )
    }
}

export default Timeline
