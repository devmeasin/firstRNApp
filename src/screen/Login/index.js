import React from 'react';
import { View } from 'react-native'
import LogIn from '../../components/LogIn'

const Login = ({navigation}) => {
    return (
        <View>
            <LogIn navigation={navigation}/>
        </View>
    )
}

export default Login