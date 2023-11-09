import {Text,View } from 'react-native';
import style from './style';

export default function ResultImc(props) {
  return (
    <View>
      <Text style={style.resultColor}>{props.messageResultImc}</Text>
        <Text style={style.resultColor}>{props.resultImc}</Text>
        
    </View>
  );
}