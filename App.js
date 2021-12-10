import React, {useState} from "react";
import { StyleSheet, View, SafeAreaView, Image, ScrollView, Animated, Text } from "react-native";
import Loja from "./src/pages/Loja";
import Menu from "./src/pages/Menu";
import Blog from "./src/pages/Blog";
import Favoritos from "./src/pages/Favoritos";
import Cartoes from "./src/pages/Cartoes";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {

  const [hidden, setHidden] = useState(false);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  return (
    <NavigationContainer>
     <Animated.View 
     style={[
       styles.header,
       {
         height: 85,
         alignItems: "flex-end",
       }
      ]}
     >
      <Image
      source={require("./assets/icon-lupa.png")}
      style={{width: 35, height: 35}}
      resizeMode="contain"
      />
      <Animated.Image
      source={require('./assets/logo-renner.png')}
      style={{
        width: scrollY.interpolate({
          inputRange:[0, 120],
          outputRange:[230, 90],
          extrapolate: 'clamp'
        }),
        height: 40
      }}
      resizeMode="contain"
      />
      <Image
      source={require("./assets/icon-sacola.png")}
      style={{width: 35, height: 35}}
      resizeMode="contain"
      />
     </Animated.View>

      {/* <View style={styles.box}>
      <Image
      source={require("./assets/carrossel-2.png")}
      style={{width: '100%', height: '100%'}}
      resizeMode="contain"
      />
      </View>
      <View style={styles.oferta}>
      <View>
      <Image
      source={require("./assets/ico.oferta-1.png")}
      style={{width: 80, height: 80, borderRadius:80/2}}
      resizeMode="contain"
      />
      <Text style={styles.textHeadingStyle}>Ofertas</Text>
      </View>
      <View>
      <Image
      source={require("./assets/ico.oferta-2.png")}
      style={{width: 80, height: 80, borderRadius:80/2}}
      resizeMode="contain"
      />
      <Text style={styles.textHeadingStyle}>Feminino</Text>
      </View>
      <View>
      <Image
      source={require("./assets/ico.oferta-3.png")}
      style={{width: 80, height: 80, borderRadius:80/2}}
      resizeMode="contain"
      />
      <Text style={styles.textHeadingStyle}>Masculino</Text>
      </View>
      <View>
      <Image
      source={require("./assets/ico.oferta-4.png")}
      style={{width: 80, height: 80, borderRadius:80/2}}
      resizeMode="contain"
      />
      <Text style={styles.textHeadingStyle}>Infantil</Text>
      </View>
      </View>
      <View style={styles.barra}>
      <Image
      source={require("./assets/foto.png")}
      style={{width:300, height:400, borderRadius:10}}
      resizeMode="contain"
      />
      </View> */}
      <Tab.Navigator initialRouteName="Loja" screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Loja") {
              iconName = focused ? "md-albums" : "md-albums-outline";
            } else if (route.name === "Blog") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            }else if (route.name === "Favoritos") {
              iconName = focused ? "heart" : "heart-outline";
            }else if (route.name === "Cartoes") {
              iconName = focused ? "card" : "card-outline";
            }else if (route.name === "Menu") {
              iconName = focused ? "menu-sharp" : "menu-sharp";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabelPosition:'below-icon',
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize:10,           
          },
        })}
        >
      <Tab.Screen 
      name="Loja" 
      component={Loja} 
      options={{headerShown:false, title:"Loja Virtual"}}/>
      <Tab.Screen name="Blog" component={Blog} options={{headerShown:false, title: "Blog"}}/>
      <Tab.Screen name="Favoritos" component={Favoritos} options={{headerShown:false, title: "Favoritos"}}/>
      <Tab.Screen name="Cartoes" component={Cartoes} options={{headerShown:false, title: "Cartões"}}/>
      <Tab.Screen name="Menu" component={Menu} options={{headerShown:false, title: "Menu"}}/>
      
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FFF',
  },
});
