import { 
  StyleSheet, Text,
  View , 
  TextInput,Button, 
  placeholder, ScrollView,
   FlatList, Alert} from 'react-native';
import React, {useState} from 'react';
import Products from './components/products';
import AddProduct from './components/AddProduct';
export default function App() {
  // const [product, setProduct] = useState(''); if flatlist 
  // const [product, setProduct] = useState('');
  const [myProducts, setMyProducts] = useState([]);

//  import de la function input handler vers addproduct 
  const submitHandler=(product)=>{
    //console.log(product); 
    // setMyProducts([...myProducts, product])
    // recuperer les datas et stockers 
    //   setMyProducts( currentMyProducts => [...currentMyProducts, product]);
    if(product.length > 1){
      // Condition saisie si caractères ? 

      const idString = Date.now().toString(); 
      setMyProducts( currentMyProducts => [{key:idString, name:product }, ...currentMyProducts]);
    }else{
      Alert.alert('Désole', 'Nombre de caractères doit être supérieur à 1', [
        {
          text:  'Compris', 
          onPress: ()=> console.warn("réfusé"),
          // style: "destructive" : IOS 
          
        }, {
          text:  'D\'accord', 
          onPress: ()=> console.warn("réfusé"),
        }, 
        {
          text:  'Yes', 
          onPress: ()=> console.warn("réfusé"),
        }
      ],
      {
        cancelable:true, 
        onDismiss: ()=>console.warn("Dismissed !")
      }
      )
    }
    //setProduct(''); 
    //Products("");
    //console.log(myProducts); 
  }
  const deleteProduct =(key)=>{
    // on se base sur son key 
    setMyProducts(currentMyProducts =>{
      return currentMyProducts.filter(product =>product.key !=key)
    })
  }
  return (
    <View style={styles.container}>
    {/* on  a enlevé input et btn vers AddProduct  */}
      <AddProduct submitHandler= {submitHandler} />
      <FlatList
        data ={ myProducts }
        // bien préciser item.name
        renderItem={( {  item } ) => (

        <Products name={item.name}
        idString= {item.key}
        deleteProduct={deleteProduct}
         />
        ) }
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40, 
    paddingTop: 60,  
  },
  
   

});
