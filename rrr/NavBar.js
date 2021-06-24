import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export const NavBar = ({ title }) => {
    return(
        <View style={styles.n}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    n: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#000',
        paddingBottom: 10
    },
    text: {
        color: '#aaa',
        fontSize: 20
    }
})