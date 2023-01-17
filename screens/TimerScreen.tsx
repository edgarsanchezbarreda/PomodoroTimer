import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TimerScreen = () => {
    return (
        <View style={styles.ScreenContainer}>
            <Text>TimerScreen</Text>
        </View>
    );
};

export default TimerScreen;

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
