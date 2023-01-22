import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { colors } from '../constants/colors';
import { Entypo, AntDesign } from '@expo/vector-icons';

const TimerScreen = () => {
    // const [counter, setCounter] = useState<number>(25.0);
    // const [play, setPlay] = useState<boolean>(false);
    const [time, setTime] = useState<number>(25.0);
    const [startTimer, setStartTimer] = useState<boolean>(false);

    useEffect(() => {
        let intervalId: string | number | NodeJS.Timeout | undefined;
        if (startTimer) {
            intervalId = setInterval(() => {
                setTime(prev => (prev -= 0.01));
            }, 1000);
        } else {
            setStartTimer(false);
            clearInterval(intervalId);
        }
    }, [startTimer]);

    const pressPlay = () => {
        setStartTimer(true);
        console.log('play');
    };

    const pressPause = () => {
        setStartTimer(false);
    };

    // const handleTimer = () => {
    //     setTimeout(() => {
    //         if (play !== true) {
    //             return;
    //         } else {
    //             setCounter(counter - 0.0001);
    //         }
    //     }, 10);
    // };

    // if (play === true) {
    //     handleTimer();
    // }

    // const pressPlay = () => {
    //     setPlay(!play);
    // };

    return (
        <View style={styles.ScreenContainer}>
            <View style={styles.buttonContainer}>
                <Text
                    style={[
                        styles.counterText,
                        {
                            color:
                                startTimer === true
                                    ? colors.green
                                    : colors.white,
                        },
                    ]}
                >
                    {time.toFixed(2)}
                </Text>
            </View>
            <Pressable
                style={({ pressed }) => [
                    styles.startButton,
                    pressed && styles.pressed,
                ]}
                onPress={startTimer ? pressPause : pressPlay}
            >
                <View>
                    {startTimer === false ? (
                        <Entypo
                            name='controller-play'
                            size={32}
                            color={colors.white}
                        />
                    ) : (
                        <AntDesign
                            name='pause'
                            size={32}
                            color={colors.white}
                        />
                    )}
                </View>
            </Pressable>
        </View>
    );
};

export default TimerScreen;

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: colors.grayBackground,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterText: {
        // color: colors.white,
        fontSize: 32,
        marginBottom: 24,
    },
    startButton: {
        backgroundColor: colors.brown,
        padding: 18,
        borderRadius: 100,
    },
    buttonText: {
        color: colors.white,
        textAlign: 'center',
    },
    buttonContainer: {
        backgroundColor: 'red',
        width: 200,

        alignItems: 'center',
    },
    pressed: {
        opacity: 0.85,
        borderRadius: 100,
    },
});
