import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

export type TimerToggleButtonProps = {
    isTimerRunning: boolean;
    startTimer: () => void;
    stopTimer: () => void;
    timerMode: 'Focus' | 'Break';
};

const TimerToggleButton: React.FC<TimerToggleButtonProps> = ({
    isTimerRunning,
    startTimer,
    stopTimer,
    timerMode,
}) => {
    const toggleButtonColor =
        // isTimerRunning === false ? colors.green : colors.gray;
        timerMode === 'Focus' ? colors.green : colors.gray;

    return (
        <Pressable
            style={[
                styles.toggleButtonContainer,
                {
                    borderColor: toggleButtonColor,
                    opacity: isTimerRunning ? 0.6 : 1,
                },
            ]}
            onPress={isTimerRunning ? stopTimer : startTimer}
        >
            <View>
                {isTimerRunning ? (
                    <AntDesign
                        name='pause'
                        size={64}
                        color={toggleButtonColor}
                    />
                ) : (
                    <Entypo
                        name='controller-play'
                        size={64}
                        color={toggleButtonColor}
                    />
                )}
            </View>
        </Pressable>
    );
};

export default TimerToggleButton;

const styles = StyleSheet.create({
    toggleButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 100,
        borderWidth: 1,
    },
});
