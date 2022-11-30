import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeView = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.testButton}  onPress={() => navigation.navigate('Theory')}>
                <Text style={styles.btnText}>Theory</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.testButton} onPress={() => navigation.navigate('Settings')}>
                <Text style={styles.btnText}>Sorting</Text>
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
    testButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 140,
        height: 140,
        margin: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
    },
    btnText: {
        fontSize: 26,
        textTransform: 'uppercase'
    }
});

export default HomeView;