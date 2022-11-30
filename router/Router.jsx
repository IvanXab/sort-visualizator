import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeView from "../views/HomeView";
import TheoryView from "../views/TheoryView";
import SettingsView from "../views/SettingsView";
import SortingView from "../views/SortingView";

const Stack = createNativeStackNavigator();

const Router = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={ 'Home' } component={ HomeView } options={ { title: 'Home' } }/>
            <Stack.Screen name={ 'Theory' } component={ TheoryView } options={ { title: 'Theory' } }/>
            <Stack.Screen name={ 'Settings' } component={ SettingsView } options={ { title: 'Settings' } }/>
            <Stack.Screen name={ 'Sorting' } component={ SortingView } options={ { title: 'Sorting' } }/>
        </Stack.Navigator>
    </NavigationContainer>
};

export default Router;
