import React, {useState, useEffect} from 'react'
import {View, KeyboardAvoidingView, AsyncStorage, StyleSheet, Image, Text, TextInput, TouchableOpacity} from 'react-native'

import logo from '../assets/logo.png'
import api from '../services/api'

export default function Login({navigation}) {

    const [email, setEmail] = useState('')
    const [techs, setTechs] = useState('')


    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if(user) {
                navigation.navigate('List')
            } 
        })
    }, []);


    // navigation tem mesma funcao do history
    async function handleSubmit() {

       const response = await api.post('/sessions', {

        email

       })

       const {_id} = response.data;
       
       await AsyncStorage.setItem('user', _id)
       await AsyncStorage.setItem('techs', techs)

       navigation.navigate('List');

    }// fim hadleSubmit

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
                autoCorrect={false} 
                value={email}
                onChangeText={setEmail}

                />



        <Text style={styles.label}>Tecnologias *</Text>

        <TextInput 
            style={styles.input}
            placeholder="Tecnologias de interesse"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false} 
            value={techs}
            onChangeText={setTechs}
            
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>

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