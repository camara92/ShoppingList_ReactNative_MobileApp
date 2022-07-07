import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , 
  TextInput,Button, 
placeholder} from 'react-native';
import React, {useState} from 'react';


export default function App() {
  const [product, setProduct] = useState('');
  const [Myproducts, setMyProducts] = useState([]);
  const inputHandler= (val)=>{
    setProduct(val)
  }
  const submitHandler=()=>{
    //console.log(product); 
    // setMyProducts([...Myproducts, product])
    setMyProducts( currentMyProduct => [...currentMyProduct, product])
    console.log(Myproducts); 
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput}
        placeholder="Saisir votre texte"
        onChangeText={ inputHandler }
        value={product}
      />
      <Button 
        title='Valider'
        onPress={submitHandler}
       />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40, 
    paddingTop: 60
  },
  inputContainer:{
    flexDirection:"row", 

  }, 
  textInput:{
    borderColor: "grey", 
    borderWidth:1, padding: 5, 
    paddingLeft: 9, 
    fontSize:18, 
    flexGrow:1, 
    // flexgrowth :prend l'espace dispo



  }
});
