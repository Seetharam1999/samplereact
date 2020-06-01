import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,Picker,Switch,Button,Modal, Alert} from 'react-native';
import * as Calendar from 'expo-calendar';
import DatePicker from 'react-native-datepicker';
import * as Animatable from 'react-native-animatable';
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';

class Reservation extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            guests: 1,
            smoking: false,
            date: ''
            
        }
    }
    static navigationOptions={
        title:"Reserve Table"
    };
    async obtainCalenderPermission(){
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status === 'granted') {
            const calendars = await Calendar.getCalendarsAsync();
            console.log('Your accessible calendars:' + calendars);
        }
        return status;
    }
    
    async addReservationToCalendar(){
       const status= await this.obtainCalenderPermission();
       const calendars = await Calendar.getCalendarsAsync();
       const calendar = calendars.filter((cal) => cal.source.isLocalAccount);
       let startDateMs = Date.parse(this.state.date);
       let endDateMs = startDateMs + (2 * 60 * 60 * 1000);
       try {
        const event = await Calendar.createEventAsync(calendar[0].id, { 
            'endDate': new Date(endDateMs), 
            'startDate': new Date(startDateMs), 
            'title': 'Con Fusion Table Reservation',
            'timeZone': 'Asia/Hong_Kong',
            'location': '121, Clear Water Bay Road, Clear Water Bay, Kowloon, Hong Kong'
        })
        .then( event => {
          console.log('success',event);
            })
      .catch( error => {
          console.log('failure',error);
          });
    } catch (e) {
        console.log(e);
    }
    }
    handleReservation() {
        
        Alert.alert(
            "Your Reservation OK?",
            `Number of Guests :`+this.state.guests+`\n Smoking ? `+this.state.smoking+`\n Date and Time : `+this.state.date,
            [
                {
                    text:"Cancel",
                    onPress:()=>this.resetForm(),
                    style:'cancel'

                },
                {
                    text:'Ok',
                    onPress:()=>{
                        this.addReservationToCalendar();
                        this.presentLocalNotification(this.state.date);
                        console.log(JSON.stringify(this.state));this.resetForm();},
                    style:'ok'

                }
            ],
            {
                cancelable:false
            }
        )
     
    }

    resetForm() {
        this.setState({
            guests: 1,
            smoking: false,
            date: ''
            
        });
    }
    
    async obtainNotificationPermissions(){
        let permission =await Permissions.getAsync(Permissions.USER_FACING_NOTIFICATIONS);
        if(permission.status!=='granted'){
            permission=await Permissions.askAsync(Permissions.USER_FACING_NOTIFICATIONS);
            if(permission.status!=='granted'){
                Alert.alert("Permissions not granded to show notifications");
            }
        }
        return permission;
    }
    async presentLocalNotification(date){
        await this.obtainNotificationPermissions();
        Notifications.presentLocalNotificationAsync({
            title:"Your Reservation",
            body:"Reservation for " +date+" requested",
            ios:{
                sound:true
            },
            android:{
                sound:true,
                vibrate:true,
                color:'#512DAB'
            }
        })
    }


    render(){
        return(
            <ScrollView>
                <Animatable.View animation="zoomIn" duration={2000} delay={1000}>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>
                        Number of Guests
                    </Text>
                    
                    <Picker 
                    style={styles.formItem}
                    selectedValue={this.state.guests}
                    onValueChange={(itemValue,itemIndex)=>this.setState({guests:itemValue})}
                    >
                        <Picker.Item label='1' value='1'/>
                        <Picker.Item label='2' value='2'/>
                        <Picker.Item label='3' value='3'/>
                        <Picker.Item label='4' value='4'/>
                        <Picker.Item label='5' value='5'/>
                        <Picker.Item label='6' value='6'/>
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}> Smoking/ Non-Smoking ?     </Text>
                    <Switch
                    style={styles.formItem}
                    value={this.state.smoking}
                    trackColor="#512ADB"
                    onValueChange={(value)=>this.setState({smoking:value})}>

                    </Switch>
                    
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Date and Time</Text>
                    <DatePicker
                    style={{flex: 2, marginRight: 20}}
                    date={this.state.date}
                    format=''
                    mode="datetime"
                    placeholder="select date and Time"
                    minDate="2017-01-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys. 
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                </View>
                <View style={styles.formRow}>
                <Button
                    onPress={() => this.handleReservation()}
                    title="Reserve"
                    color="#512DA8"
                    accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                </Animatable.View>
            </ScrollView>
        )
    }

}
const styles=StyleSheet.create({
    formRow:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,paddingTop:10,
        flexDirection:'row'
    },
    formLabel:{
        fontSize:18,
        flex:2
    },
    formItem:{
        flex:1
    },
    modal: {
        justifyContent: 'center',
        margin: 20
     },
     modalTitle: {
         fontSize: 24,
         fontWeight: 'bold',
         backgroundColor: '#512DA8',
         textAlign: 'center',
         color: 'white',
         marginBottom: 20
     },
     modalText: {
         fontSize: 18,
         margin: 10
     }
     

})
export default Reservation;