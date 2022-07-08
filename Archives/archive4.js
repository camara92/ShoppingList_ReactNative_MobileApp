import { 
    StyleSheet, Text,
    View , 
    TextInput,Button, 
    placeholder, ScrollView,
     FlatList} from 'react-native';
  import React, {useState} from 'react';
  import Products from '../components/products';
  
  export default function App() {
    // const [product, setProduct] = useState(''); if flatlist 
    const [product, setProduct] = useState('');
    const [myProducts, setMyProducts] = useState([]);
  
    const inputHandler= (val)=>{
      setProduct(val)
    }
    const submitHandler=()=>{
      //console.log(product); 
      // setMyProducts([...myProducts, product])
      // recuperer les datas et stockers 
      //   setMyProducts( currentMyProduct => [...currentMyProduct, product]);
      const idString = Date.now().toString(); 
      
      setMyProducts( currentMyProduct => [{key:idString, name:product }, ...currentMyProduct]);
      setProduct(''); 
      //console.log(myProducts); 
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
        <FlatList
          data ={ myProducts }
          // bien préciser item.name
          renderItem={( {  item } ) => <Products name={item.name} /> }
         />
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
  
  });
  