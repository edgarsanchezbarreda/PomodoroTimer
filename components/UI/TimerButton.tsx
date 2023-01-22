import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { colors } from '../../constants/colors';
import { AntDesign, Entypo } from '@expo/vector-icons';

interface TimerButtonProps {
    playStatus: number;
    startTimerHandler: () => void;
    stopTimerHandler: () => void;
    resetTimerHandler: () => void;
    resumeTimerHandler: () => void;
}

const TimerButton: React.FC<TimerButtonProps> = ({
    playStatus,
    startTimerHandler,
    stopTimerHandler,
    resetTimerHandler,
    resumeTimerHandler,
}) => {
    const handleButtonPress = () => {
        if (playStatus === 0) {
            startTimerHandler();
        } else if (playStatus === 1) {
            stopTimerHandler();
        } else if (playStatus === 2) {
            resumeTimerHandler();
        }
    };

    const playButtonIcon = () => {};

    return (
        <View>
            {/* Buttons Container */}
            <Pressable
                style={({ pressed }) => [
                    styles.startButton,
                    pressed && styles.pressed,
                ]}
                onPress={handleButtonPress}
            >
                <View>
                    {playStatus === 1 ? (
                        <AntDesign
                            name='pause'
                            size={64}
                            color={colors.white}
                        />
                    ) : (
                        <Entypo
                            name='controller-play'
                            size={64}
                            color={colors.white}
                        />
                    )}
                </View>
            </Pressable>
        </View>
    );
};

export default TimerButton;

const styles = StyleSheet.create({
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
