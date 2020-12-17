import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';


// or any pure javascript modules available in npm
import { TextInput, Button } from 'react-native-paper';

function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [imc, setimc] = useState(0)  
  const [legenda, setLegenda] = useState('Indeterminado')
  const [cor, setCor] = useState('#bdc3c7')

  function calcularIMC(){
  

    const resultado = peso/(altura*altura)
    setimc(resultado.toFixed(1))

    if (resultado < 18.5){
      setLegenda('Magreza')
      setCor('#e74c3c')
    } else if (resultado >= 18.5 && resultado < 25){
      setLegenda('Normal')
      setCor('#e74c3c')
    } else if (resultado > 25 && resultado < 30){
      setLegenda('Sobrepeso')
      setCor('#f1c40f')
    } else if (resultado >= 30 && resultado < 40){
      setLegenda('Obesidade')
      setCor('#e67e22')
    } else if (resultado >= 40){
      setLegenda('Obesidade Máxima')
      setCor('#e74c3c')
    } else if (resultado !== Number){
      alert('Digite Valores')
      setLegenda('Digite valores')
      setimc(0)
    }
      
  }

    


  
  
  
  return (
    <View style={styles.app}>
     <Text style={styles.legenda}>Seu IMC</Text>

     <View style={[styles.painel, {backgroundColor: cor}]}>
      <Text style={styles.resultado}>{imc}</Text>
      <Text style={styles.diagnostico}>{legenda}</Text>
     </View>


     <View>
        <TextInput style={styles.peso} 
        label='Peso'
        onChangeText={valor => {
          Number(setPeso(valor.replace(',', '.')))
        }}/>

        <TextInput style={styles.altura} 
        label = 'Altura'
        onChangeText={valor => {
          Number(setAltura(valor.replace(',', '.')))
        }}/>
        <Button mode='contained' onPress={calcularIMC}> calcular IMC</Button>
      </View>

    </View>
  );
 
}

const styles = StyleSheet.create({
  app: {
    padding: 10,
  },

  painel: {
    
    //margin: 'Auto',
    alignSelf: 'Center',
    borderRadius: 5,
    width: 150,
    marginVertical: 10,
    padding: 8,
    

  },

  legenda: {
    textAlign: 'Center',
    fontWeight: 'bold',
  }, 
  resultado: {
    fontSize: 22,
    textAlign: 'Center',
    fontWeight: 'bold',
    
  },
  diagnostico: {
    textAlign: 'Center',
    fontSize: 16,
  },
  peso: {
    marginVertical: 10,

  },
  altura: {
    marginVertical: 10,
   
  }


});

export default App;

