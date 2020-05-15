import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const CustomerItem = ({ fullname, avatar, phone }) => {
    const image = require('./../../images/avatar/image1.jpg');
    return (
        <View style={style.item}>
            <View style={style.row}>
                <Image source={image} style={style.avatar} />
                <Text style={style.fullname}>{fullname}</Text>
            </View>
            <Text>{phone}</Text>
        </View>
    );
}


export default function CustomerScreen() {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        axios
            .get('http://10.0.2.2:8001/api/dress_makers?username=ndeye')
            .then(response => {
                const dressMakers = response.data['hydra:member'].length ? response.data['hydra:member'][0] : [];
                // console.log({ dressMakers })
                if (dressMakers.customers.length) {
                    setCustomers(dressMakers.customers);
                }
            })
    })
    return (
        <View style={style.container}>
            <Text style={style.title}>Mes Clients</Text>
            <FlatList
                data={customers}
                renderItem={({ item }) => <CustomerItem {...item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // margin: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#18BC9C',
        color: '#FFF',
        paddingHorizontal: 20,
        borderBottomColor: '#FFF',
        borderBottomWidth: 1
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        color: "#FFF"
    },
    fullname: {
        fontSize: 18,
        fontWeight: '800'
    }
});