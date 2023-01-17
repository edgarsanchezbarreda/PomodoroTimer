import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MetricsScreen = () => {
    return (
        <View style={styles.ScreenContainer}>
            <Text>MetricsScreen</Text>
        </View>
    );
};

export default MetricsScreen;

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
