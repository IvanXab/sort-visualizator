import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const TheoryView = () => {
    return (
        <ScrollView>
            <Text style={styles.textHeader}>Сортировка выбором (Selection sort)</Text>
            <Text style={styles.textDescription}>
                Сортировка выбором (Selection sort) — алгоритм сортировки.
                Может быть как устойчивый, так и неустойчивый.
                На массиве из n элементов имеет время выполнения в худшем, среднем и лучшем случае Θ(n2),
                предполагая что сравнения делаются за постоянное время.
            </Text>
            <View style={styles.steps}>
                <Text style={styles.steps__header}>
                    Шаги алгоритма:
                </Text>

                <Text style={styles.steps__item}>
                    1: находим номер минимального значения в текущем списке
                </Text>

                <Text style={styles.steps__item}>
                    2: производим обмен этого значения со значением первой неотсортированной позиции
                    (обмен не нужен, если минимальный элемент уже находится на данной позиции)
                </Text>

                <Text style={styles.steps__item}>
                    3: сортируем хвост списка, исключив из рассмотрения уже отсортированные элементы
                </Text>
            </View>
            <View style={styles.animation}>
                <Text style={styles.animation__header}>Анимация сортировки:</Text>
                <Image style={styles.animation__gif} source={require('../assets/Selection-Sort-Animation.gif')}/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    textHeader: {
        margin: 20,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center",
    },
    textDescription: {
      padding: 15,
    },
    steps: {
      padding: 20,
    },
    steps__header: {
        fontSize: 22,
    },
    steps__item: {
        margin: 5,
    },
    animation: {
        flex: 1,
        alignItems: "center",
        marginBottom: 30
    },
    animation__header: {
        fontSize: 20,
        margin: 15,
    },
});

export default TheoryView;