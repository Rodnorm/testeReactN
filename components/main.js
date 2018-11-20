import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation';


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
    border: {
        width: 300,
        margin: 4,
        padding: 3,
        backgroundColor: '#4d007d',
        borderRadius: 10
    },
    title: {
        padding: 2,
        backgroundColor: '#8b3cf9',
        color: '#f3f1e5',
        fontWeight: '100',
        borderRadius: 10,
    },
    content: {
        color: '#f3f1e5',
        padding: 2,
    },
    first: {
        width: 100
    },
    second: {
        width: 150
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

export default class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
            opacity: 0
        }
    }

    static navigationOptions = {
        title: 'Main',
        headerStyle: {
            backgroundColor: '#8400d5',
            color: '#f3f1e5',
        },
        headerTitleStyle: {
            color: '#f3f1e5',
        }
    };


    fazGet = async () => {
        this.setState({
            opacity: 1
        });
        try {
            let response = await fetch(
                'https://apinodenormando.herokuapp.com/products/',
            );

            let responseJson = await response.json();
            await this.setState({
                dataSource: responseJson
            });

        } catch (error) {
            console.error(error);
        }
        this.setState({
            opacity: 0
        });
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.border}>
                <TouchableOpacity>
                    <Text style={[styles.title, styles.first]}>TÍTULO:</Text>
                    <Text style={styles.content}>{item.title}</Text>
                    <Text style={[styles.title, styles.second]}>PREÇO:</Text>
                    <Text style={styles.content}>{item.price}</Text>
                    <Text style={styles.title}>SLUG:</Text>
                    <Text style={styles.content}>{item.slug}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const name = this.props.navigation.getParam('name', 'Zequinha');
        return (
            <View style={styles.container}>
                <Text style={{ color: '#f3f1e5', margin: 4 }}>Olá, {name}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.fazGet}
                ><Text style={{ color: '#f3f1e5', textAlign: "center" }}>OBTER DADOS</Text>
                </TouchableOpacity>
                <ActivityIndicator
                    animating={true}
                    style={{ marginTop: 5, opacity: this.state.opacity }} color='#f3f1e5'
                    size='large'
                />
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                >
                </FlatList>
                <Text style={{ color: '#f3f1e5', margin: 4 }}>D.Evolution</Text>
            </View>
        );
    }
} 