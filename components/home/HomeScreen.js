import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import globalStyle from '../../Style';

export default function HomeScreen() {
    return (
        <View style={globalStyle.container}>
            <Image source={img} style={style.image} />
            <Text style={style.title}>Bienvenue sur l'application</Text>
            <Text style={style.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        </View>
    );
}

const img = require('./../../images/logo.png');

const style = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#000"
    },
    paragraph: {
        fontSize: 16,
        margin: 20,
        textAlign: 'justify'
    },
    image: {
        marginBottom: 10,
    },
})