import {Button, Text,TextInput,Touchable,TouchableOpacity,View } from 'react-native';
import React from 'react';
import { useState } from "react";
import ResultImc from '../ResultImc';
import style from './style';

export default function Form() {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState('preencha o peso e altura')
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState('calcular')

  function imcCalculator(){
    return setImc((weight/(height)).toFixed(2))
  }
  function validationImc(){
    if(weight !=null && height != null){
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc('seu Imc e igual:')
      setTextButton('tentar novamente')
      return
    }
    setImc(null)
    setTextButton('caulcular novamente')
    setMessageImc('preencha com valor')
  }


  return (
    <View style={style.formContent}>
    <View style={style.form}>
    <Text style={style.formLabel}>peso</Text>
    <TextInput style={style.input}
    onChangeText={setWeight}
    value={weight}
    placeholder='60 kg'
    keyboardType='numeric'
    />
    <Text style={style.formLabel}>altura</Text>
    <TextInput style={style.input}
     onChangeText={(setHeight)}
     value={height}
    placeholder='1.70 m'
    keyboardType='numeric'
    /></View>
    <TouchableOpacity style={style.buttonColor}
    onPress={()=> validationImc()}>
      <Text style={style.textButtonCalculator}>{textButton}</Text>
    </TouchableOpacity>
    <ResultImc messageResultImc={messageImc}resultImc={imc} />
    </View>
  );
}