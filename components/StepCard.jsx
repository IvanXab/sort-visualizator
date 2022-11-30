import {StyleSheet, Text, View} from "react-native";

const StepCard = ({ step, index }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.step_index}>Step {index}:</Text>
            <Text style={styles.step_array}>| { step.join(' | ') } | </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    step_index: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green'
    },
    step_array: {
        fontSize: 22,
    }
});

export default StepCard;