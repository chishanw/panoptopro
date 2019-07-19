import React from 'react';
import {TextInput, View, Text } from 'react-native';
import AppText from './AppText';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}><AppText>{label}</AppText></Text>
            <TextInput 
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                placeholder={placeholder}
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        fontFamily: 'UniversLTStd',
        fontSize: 15,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 16,
        flex: 2,
        borderColor: '#000',
        borderBottomWidth: 1
    },
    labelStyle: {
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export default Input;