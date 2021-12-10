import React from "react";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      carrossel: {
        marginTop: 50,
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
      oferta:{
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingRight: 0,
        paddingLeft: 0,
        marginBottom:0
      },
      textHeadingStyle: {
        marginTop: 5,
        fontSize: 10,
        color: 'black',
        textAlign:'center'
      },
      barra:{
        alignItems: 'center',
        marginTop:0
      }
  });

