import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
    
    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            backgroundColor: '#8400d5',    
        },
        headerTitleStyle: {
            color: '#f3f1e5',
        }
    };

    name = '';

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{ height: 40, color: '#f3f1e5'}}
                    placeholder="Insira seu nome"
                    onChangeText={(name) => {
                        this.name = name;
                    }}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#f3f1e5', textAlign: "center" }}
                        onPress={
                            () => this.props.navigation.navigate('Main', { name: this.name })
                        }
                    >LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#8400d5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25,
        paddingBottom: 10
    },
    button: {
        backgroundColor: '#8b3cf9',
        fontWeight: 'bold',
        borderRadius: 10,
        width: 150,
        padding: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 1
    }
});