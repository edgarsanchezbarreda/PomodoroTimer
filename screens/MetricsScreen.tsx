import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';

const MetricsScreen = () => {
    return (
        <View style={styles.ScreenContainer}>
            <Text style={styles.text}>MetricsScreen</Text>
        </View>
    );
};

export default MetricsScreen;

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: colors.grayBackground,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.white,
    },
});
