import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, Text,
  View , 
  TextInput,Button, 
  placeholder, ScrollView} from 'react-native';
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
    // recuperer les datas et stockers 

    setMyProducts( currentMyProduct => [...currentMyProduct, product])
    setProduct(''); 
    //console.log(Myproducts); 
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
      <ScrollView>
      <View style={styles.items}>
        {/* map : de js pour faire passer et afficher les articles , un key obligatoire d'où fnction flechée comme key */}
         { 
          
          Myproducts.map((product, index)=> <Text style={styles.element} key={index}> { product} </Text>)

          }
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40, 
    paddingTop: 60,  

  },
  inputContainer:{
    flexDirection:"row", 
    marginBottom: 15,

  }, 
  textInput:{
    borderColor: "grey", 
    borderWidth:1, padding: 5, 
    paddingLeft: 9, 
    fontSize:18, 
    flexGrow:1, 
    // flexgrowth :prend l'espace dispo
  }, 
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
