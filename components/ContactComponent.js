import React,{Component} from 'react';
import {Text,View} from 'react-native';
import { Card,Button,Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component{
    static navigationOptions={
        title:"Contact us"
        };

        sendMail(){
            MailComposer.composeAsync({
                recipients:['srseetharam1999@gmail.com'],
                subject: "Enquiry",
                body:"To whom  it may concern:"
            });
        }

    render()
    {
        return (
            <View>
 <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>                
            <Card title='Contact Information'>
                <Text style={{paddingTop:20}}>121, Clear Water Bay Road</Text>
                <Text style={{paddingTop:20}}>Clear Water Bay, Kowloon</Text>
                <Text style={{paddingTop:20}}>HONG KONG</Text>
                <Text style={{paddingTop:20}}>Tel: +852 1234 5678</Text>
                <Text style={{paddingTop:20}}>Fax: +852 8765 4321</Text>
                <Text style={{paddingTop:20}}>
                Email:confusion@food.net</Text>
                 <Button title="Send Email"
                 onPress={this.sendMail}
                 buttonStyle={{backgroundColor:'#512DAD'}}
                 icon={<Icon
                 
                 name="envelope-o"
                 type="font-awesome"
                 color="white"/>}
                 />
                </Card>
                </Animatable.View>
</View>
        );
    }
}
export default Contact;