import React, {useState} from 'react';
import {styles} from "./styles";
import { View, SafeAreaView, Image, ScrollView, Animated, Text } from "react-native";

export default function Loja({navigation}) {

const [scrollY, setScrollY] = useState(new Animated.Value(0));

  return (

    <View style={styles.container}>
    <View>
      <Image
      source={require("../../../assets/carrossel-2.png")}
      style={{width: 400, height: 380, marginTop:235}}
      resizeMode="contain"
      />
      </View>
      <View style={styles.oferta}>
      <View>
      <Image
      source={require("../../../assets/ico.oferta-1.png")}
      style={{width: 75, height: 75, borderRadius:45, alignItems:'flex-start'}}
      resizeMode="contain"
      />
      <Text style={styles.textHeadingStyle}>Ofertas</Text>
      </View>
      <View>
      <Image
      source={require("../../../assets/ico.oferta-2.png")}
      style={{width: 75, height: 75, borderRadius:45}}
      resizeMode="contain"
      />
      <Text style={styles.textHeadingStyle}>Feminino</Text>
      </View>
      <View>
      <Image
      source={require("../../../assets/ico.oferta-3.png")}
      style={{width: 75, height: 75, borderRadius:45}}
      resizeMode="contain"
      />
      <Text style={styles.textHeadingStyle}>Masculino</Text>
      </View>
      <View>
      <Image
      source={require("../../../assets/ico.oferta-4.png")}
      style={{width: 75, height: 75, borderRadius:45}}
      resizeMode="contain"
      />
      <Text style={styles.textHeadingStyle}>Infantil</Text>
      </View>
      <View>
      <Image
      source={require("../../../assets/ico.oferta-5.png")}
      style={{width: 75, height: 75, borderRadius:45}}
      resizeMode="contain"
      />
      <Text style={styles.textHeadingStyle}>Perfumaria</Text>
      <Text style={styles.textHeadingStyle}>e Cosméticos</Text>
      
      </View>
      </View>
      <View style={styles.barra}>
      <Image
      source={require("../../../assets/foto.png")}
      style={{width:330, height:400, borderRadius:20}}
      resizeMode="contain"
      />
      </View>
    </View>
    
  );
}


