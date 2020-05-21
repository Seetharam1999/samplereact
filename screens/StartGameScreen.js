import React,{useState} from 'react';
import {View,Text,StyleSheet, Button,TouchableWithoutFeedback, Keyboard} from 'react-native';
import Colors from '../constants/color';
import Input from '../components/input';
import Card from '../components/Card';

const StartGameScreen = props=>{
const [enterValue,setEnteredValue] =useState('');
const [conformed,setConformed]=useState(false);
const [selected,setSelected]=useState();
const inputHandler=inputText=>{
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
};
const resetHandler=()=>{
  setEnteredValue('');
  setConformed(false);
};
const confromHandler=()=>{
  const chosenNumber=parseInt(enterValue);
  if(chosenNumber <=0 || chosenNumber >=99)
  {
    return;
  }
  setConformed(true);
  setSelected(parseInt(enterValue));
  setEnteredValue('');
  }
console.log(enterValue);
let conformedOutput;
if(conformed)
{
conformedOutput=<Text> Choosen Number:{selected}</Text>
}
    return(
        <TouchableWithoutFeedback  onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
                <Text style={styles.title}> Game started!!!</Text>
                <Card style={styles.inputContainer}>
                    <Text>                        Select A Number                    </Text>
                    <Input
                     style={styles.input} 
                     blurOnSubmit 
                     //autoCapitalize="none" 
                    // autoCurrect={false} 
                     keyboardType="numeric" 
                     maxLength={2}
                     onChangetText={inputHandler}
                     value={enterValue} />
                    <View style={styles.buttonContainer}>
                        <Button title="reset" onPress={resetHandler} color={Colors.accent} style={{width:100}}/>
                        <Button title="confirm" onPress={confromHandler} color={Colors.primary} style={{width:100}}/>
                    </View>
                </Card>
                {conformedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles=StyleSheet.create({
screen:{
    flex:1,
    padding:10,
    alignItems:'center'
},
title:{
    fontSize:20,
    marginVertical:10,

},
inputContainer:{
width:300,
maxHeight:'80%',
alignItems:'center'
},
buttonContainer:{
    flexDirection:'row',
    width:'90%',
    paddingBottom:10,
    justifyContent:'space-between',
    paddingHorizontal:'15'
},
input:{
    width:50,
    

}

});
export default StartGameScreen;
