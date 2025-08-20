import React from "react";
import { Image, View, Text, Button, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function DogScreen(navigation){
    return(
        <View style= {styles.container}>
            <Image
                style={styles.dogImage}
                source={ require('../assets/casual_dog.png') }
            />
            <View style={styles.titleContainer}>
                <Text>Ótimo dia!</Text>
            </View>
            <View style={styles.textContainer}>
                <Text>Como deseja acessar?</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Como deseja acessar?"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Outras opções"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    dogImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },

    titleContainer: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    buttonContainer: {
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },

});