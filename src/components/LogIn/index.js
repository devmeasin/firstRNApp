import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogIn = () => {

    const navigation = useNavigation();

    return (
        <View>

            <Text style={styles.LoginText}>Amr Sonar Bangla</Text>

            <View style={{ marginTop: 20, marginBottom: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[{ color: 'black', fontSize: 20 }]}>Welcome to React Native</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.roundButton}>
                    <Text style={[{ color: 'white', fontSize: 18 }]}>Click to Home 😋</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    roundButton: {
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#37B24D',
    },

    LoginText: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 20,
        marginBottom: 20,
    }

});



export default LogIn;

