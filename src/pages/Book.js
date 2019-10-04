import React, {useState} from 'react'
import {StyleSheet, Text, SafeAreaView, Alert, TextInput, AsyncStorage, TouchableOpacity} from 'react-native'

import api from '../services/api'

export default function Book({navigation}) {

    const id = navigation.getParam('id');

    const [date, setDate] = useState('')


     async function handleSubmit() {

         const user_id = await AsyncStorage.getItem('user')

         await api.post(`/spots/${id}/bookings`, {
             date
         }, {
             headers: {user_id}
         });

         Alert.alert('Solicitação de reserva enviada!');
         navigation.navigate('List')

    }


    function handleCancel() {
        navigation.navigate('List')
    }

return (

    <SafeAreaView>


        <Text style={styles.label}>Data de interesse *</Text>

        <TextInput 
            style={styles.input}
            placeholder="Qual data você quer reservar?"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false} 
            value={date}
            onChangeText={setDate}
            
            />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>

        <Text style={styles.buttonText}>Reserar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCancel} style={styles.buttonCancel}>

<Text style={styles.buttonText}>Cancelar</Text>
</TouchableOpacity>
    
    </SafeAreaView>

)
}// fim  Book


const styles =  StyleSheet.create({

    container: {
         margin: 30
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginTop: 40,
        marginBottom: 8,
        
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

        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f05a5b',
        borderRadius: 4,
        marginBottom: 30
    },

    buttonText: {

        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },

    buttonCancel: {

        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
        borderRadius: 4
    }

});