import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { colors } from '../constants/colors';
import TimerButton from '../components/UI/TimerButton';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const TimerScreen = () => {
    const timerInitialState = { seconds: 7, minutes: 0 };

    const [time, setTime] = useState(timerInitialState);
    const [intervalHandler, setIntervalHandler] = useState<NodeJS.Timer>();
    const [playStatus, setPlayStatus] = useState(0);
    // status = 0 -> Not Started
    // status = 1 -> Playing
    // status = 2 -> Stopped

    let updatedSeconds = time.seconds;
    let updatedMinutes = time.minutes;

    const play = () => {
        if (updatedSeconds === 0 && updatedMinutes > 0) {
            updatedMinutes--;
            updatedSeconds = 60;
        }
        if (updatedSeconds === 0 && updatedMinutes === 0) {
            console.log('Timer Over!!');
            setPlayStatus(0);
            setTime(timerInitialState);
            return;
        }
        updatedSeconds--;

        return setTime({ seconds: updatedSeconds, minutes: updatedMinutes });
    };

    const startTimerHandler = () => {
        play();
        setPlayStatus(1);
        setIntervalHandler(setInterval(play, 1000));
    };

    const stopTimerHandler = () => {
        clearInterval(intervalHandler);
        setPlayStatus(0);
        // setPlayStatus(2);
    };

    const resetTimerHandler = () => {
        clearInterval(intervalHandler);
        setPlayStatus(0);
        setTime({ seconds: 0, minutes: 25 });
    };

    const resumeTimerHandler = () => startTimerHandler();

    return (
        <View style={styles.ScreenContainer}>
            {/* Counter Container */}
            <View>
                {/* Counter */}
                <Text
                    style={[
                        styles.counterText,
                        {
                            color:
                                time.minutes === 0 && time.seconds <= 5
                                    ? colors.yellow
                                    : colors.white,
                        },
                    ]}
                >{`${time.minutes}:${time.seconds.toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                })}`}</Text>
            </View>

            <View>
                {/* Button Container */}
                <TimerButton
                    playStatus={playStatus}
                    startTimerHandler={startTimerHandler}
                    stopTimerHandler={stopTimerHandler}
                    resetTimerHandler={resetTimerHandler}
                    resumeTimerHandler={resumeTimerHandler}
                />
            </View>
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
        // color: colors.white,
        fontSize: 96,
        marginBottom: 24,
        color: colors.white,
    },
});
