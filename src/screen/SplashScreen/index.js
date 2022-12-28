import React from 'react';
import { View, Text, StatusBar, Dimensions, StyleSheet, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

let ScreenHeight = Dimensions.get("window").height;
const SplashScreen = () => {
    return (
        <View>

            <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />

            <View style={styles.container}>

                <View style={styles.logo_wrapper}>
                    <Image style={{ width: '100%', height: "100%" }} source={require('../../static/img/logo.jpg')} />
                </View>
                <Text style={{ color: 'red', fontSize: 20, textAlign: 'center', fontWeight: '800' }}>
                    Welcome to Digital It Sheba
                </Text>

                <View style={styles.bottom_wrapper}>
                    <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center', fontWeight: '600' }}>
                        100% Safe & Secure  <Ionicons name='finger-print-outline' size={20} />
                    </Text>
                </View>

            </View>

        </View>

    )
};

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' },
    logo_wrapper: {
        width: 250,
        height: 250,
        backgroundColor: 'transparent',
        borderRadius: 50,
    },
    bottom_wrapper: {
        position: 'absolute',
        bottom: 30,
        backgroundColor: '#00C288',
        padding: 8,
        borderRadius: 15,
    }
});

export default SplashScreen;