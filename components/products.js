import { 
    StyleSheet, Text, View } from 'react-native';
  import React from 'react';
    // destructury ({name })
    const Products = ({name})=>{
        // pour afficher, on doit utilise props pour que item.name soit affiché 

        return(
            <View style={styles.items}>
                <Text style={styles.element}> {name} </Text>
            </View>
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