import React from "react";
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView,
    Animated
} from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";


const Notification = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            <ScrollView style={{ marginTop: SIZES.radius }}>
                <View>
                    <Text>hello world</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notification;