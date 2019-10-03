import React from 'react'
import {View, KeyboardAvoidingView, StyleSheet, Image, Text, TextInput, TouchableOpacity} from 'react-native'

import logo from '../assets/logo.png'

export default function Login() {

return (
        
  <KeyboardAvoidingView styles={styles.container} behavior="padding" enabled > 

     <Image source={logo} style={styles.imageLogo}/> 
    <View style={styles.form}>
            <Text style={styles.label}>Seu E-mail *</Text>

            <TextInput 
                style={styles.input}
                placeholder="Seu email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false} />



        <Text style={styles.label}>Tecnologias *</Text>

        <TextInput 
            style={styles.input}
            placeholder="Tecnologias de interesse"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false} />

            <TouchableOpacity style={styles.button}>

                <Text style={styles.buttonText}>Encontrar spots</Text>
            </TouchableOpacity>
            </View>
    
            </KeyboardAvoidingView>


    )
}// fim login

const styles =  StyleSheet.create({

    container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
           
    },

    form: {

        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
        
    },

    imageLogo: {

        marginTop: 150,
        marginHorizontal: 100
    },

    input: {
        
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 4
    },

    button: {

        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },

    buttonText: {

        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }

});