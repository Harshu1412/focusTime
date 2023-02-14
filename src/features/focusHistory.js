import React from 'react';
import {View,Text,StyleSheet,FlatList} from "react-native";
import { fontSizes,spacing} from '../utils/Fonts'
import {colors} from '../utils/colors'

export const FocusHistory = ({history}) => {
  if(!history || !history.length) return null;
  const renderItem = ({item})=> <Text style={styles.item}> - {item}</Text> 
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Focus History will be built here</Text>
    <FlatList
    data={history}
    renderItem={renderItem}
    />
    </View>
  )
}
const styles=StyleSheet.create({
  title:{
    color:colors.white,
    fontSize:fontSizes.md,
    fontWeight:'bold',
   



  },
  container:{
    padding:spacing.md,
    flex:1
  },
  item:{
    color:colors.white,
    fontSize:fontSizes.md,
  },
})