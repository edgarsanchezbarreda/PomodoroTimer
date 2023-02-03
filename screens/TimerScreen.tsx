import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { colors } from '../constants/colors';
import TimerDisplay from '../components/UI/TimerDisplay';
import TimerToggleButton from '../components/UI/TimerToggleButton';

const focusTimeInMins = 0.1 * 60 * 1000;
const breakTimeInMins = 0.1 * 60 * 1000;

const TimerScreen = () => {
    const [timerCount, setTimerCount] = useState<number>(focusTimeInMins);
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>();
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
    const [timerMode, setTimerMode] = useState<'Focus' | 'Break'>('Focus');

    useEffect(() => {
        if (timerCount === 0) {
            if (timerMode === 'Focus') {
                setTimerMode('Break');
                setTimerCount(breakTimeInMins);
                if (timerInterval) {
                    clearInterval(timerInterval);
                }
                startTimer();
            } else {
                setTimerMode('Focus');
                setTimerCount(focusTimeInMins);
                setTimerCount(prev => prev - 100);
            }
            // stopTimer();
        }
    }, [timerCount]);

    const startTimer = () => {
        setIsTimerRunning(true);
        setTimerCount(prev => prev - 100);
        const id = setInterval(() => setTimerCount(prev => prev - 100), 100);
        setTimerInterval(id);
    };

    const stopTimer = () => {
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        setIsTimerRunning(false);
    };

    const timerDate = new Date(timerCount);

    return (
        <View style={styles.ScreenContainer}>
            <TimerDisplay timerDate={timerDate} timerMode={timerMode} />
            <TimerToggleButton
                isTimerRunning={isTimerRunning}
                startTimer={startTimer}
                stopTimer={stopTimer}
                timerMode={timerMode}
            />
        </View>
    );
};

export default TimerScreen;

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterText: {
        fontSize: 96,
        marginBottom: 64,
        color: colors.white,
    },
});
