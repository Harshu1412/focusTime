import React,{useState}from 'react';
import {View, Text, StyleSheet} from "react-native"
import {colors} from '../utils/colors';
import { TextInput} from "react-native-paper"
import {RoundedButton} from '../components/roundedButton';
import {spacing } from '../utils/Fonts'
export const Focus = ({addsubject})=> {
const [subject,setNewsubject]=useState(null)
console.log(subject)
  return(
  <View style={styles.container}>
  <View style={styles.innercontainer}>
  <TextInput style={styles.textInput} onChangeText={setNewsubject } label ="Focus item" />
  <View style={styles.button}>
  <RoundedButton  title="+" size={50} onPress={()=>addsubject(subject)} />
  </View>
  </View>
  </View>
  );
  };
const styles = StyleSheet.create({
  container: {
    flex:0.2,
  },
  button: {

    justifyContent:'center'

  },

  textInput: {
    flex:1,
    marginRight: spacing.sm,


  },
  innercontainer: {
    
    padding: spacing.lg,
    jusifyconent: 'top',
    flexDirection:'row'


  },
 
})
