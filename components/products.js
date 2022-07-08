import { 
    StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight } from 'react-native';
  import React from 'react';
    // destructury ({name })
    const Products = ({name})=>{
        // pour afficher, on doit utilise props pour que item.name soit affiché 
        // touchableWithoutfeedback : rendre cliquable vs touchableopacity odcs 
        // touchableopacity : peut avoir des styles // style={{backgroundColor:"blue"}} 
        // onPress={ ()=>console.log("cliquer ")}
         
              

        return(
            <TouchableHighlight
              onPress={ ()=>console.log("cliquer ")}
              activeOpacity={0.2}
              underlayColor="yellow"
            >

            <View style={styles.items}>
                <Text style={styles.element}> {name} </Text>
            </View>
            </TouchableHighlight>
            
        )
    }



    
export default Products; 
  const styles = StyleSheet.create({
//   import styles vers products :  
    items:{
       marginTop:10, 
  
  
    }, 
    element:{
      backgroundColor:"lightpink",
      padding:20, 
      fontSize:17, 
      marginVertical: 7
    }
  });