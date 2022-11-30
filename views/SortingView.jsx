import {FlatList, StyleSheet, Text, View} from "react-native";
import { useEffect, useState } from "react";
import StepCard from "../components/StepCard";

const SortingView = ({ route }) => {
    const [sortingSteps, setSortingSteps] = useState([]);
    const { inputArray } = route.params;

    const selectionSort = (arr) => {
        const steps = [];
        for (let i = 0; i < arr.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min])
                {
                    min = j;
                }
            }
            if (min !== i) {
                let temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
                steps.push(Array.from(arr));
            }
        }
        setSortingSteps(steps);
    }

    useEffect(() => {
       selectionSort(inputArray.split(' '));
    }, []);

    return (
        <View style={styles.container}>
            <FlatList data={sortingSteps} renderItem={ ({ item, index }) => (<StepCard step={ item } index={index} />) }/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    info: {
        width: 391,
        padding: 20,
        backgroundColor: 'green',
    },
});

export default SortingView;