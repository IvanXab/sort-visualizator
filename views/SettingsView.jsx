import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";

const SettingsView = ({ navigation }) => {
    const [inputArray, setInputArray] = useState('');

    const handleFillRandom = () => {
        const randomArray = [];
        for (let i = 0; i < 8; i++) {
            randomArray[i] = Math.floor(Math.random() * (99 - -10 + 1) ) + -10;
        }
        setInputArray(randomArray.join(' '));
    };

    const handleClickStart = () => {
        if (inputArray) {
            navigation.navigate('Sorting', { inputArray: inputArray })
        }
        else {
            alert("Error")
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={ styles.input }
                placeholder="Enter array..."
                value={ inputArray }
                onChangeText={ setInputArray }
                keyboardType={'numeric'}
            />
            <TouchableOpacity style={styles.testButton} onPress={ handleClickStart }>
                <Text style={styles.btnText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.testButton} onPress={ handleFillRandom }>
                <Text style={styles.btnText}>Fill random</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: 'green',
        padding: 10,
    },
    testButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 140,
        height: 70,
        margin: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
    },
    btnText: {
        fontSize: 24,
    }
});

export default SettingsView;