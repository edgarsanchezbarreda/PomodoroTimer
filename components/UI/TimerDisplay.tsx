import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../constants/colors';
import { Dimensions } from 'react-native';

export type TimerDisplayProps = {
    timerDate: Date;
    timerMode: 'Focus' | 'Break';
};

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

let orientation = deviceWidth > deviceHeight ? 'landscape' : 'portrait';

const TimerDisplay: React.FC<TimerDisplayProps> = ({
    timerDate,
    timerMode,
}) => {
    const timerColor: string =
        timerMode === 'Focus'
            ? timerDate.getSeconds() <= 5
                ? colors.yellow
                : colors.white
            : colors.pink;

    const counter: string = `${timerDate
        .getMinutes()
        .toString()
        .padStart(2, '0')}:${timerDate
        .getSeconds()
        .toString()
        .padStart(2, '0')}`;

    return (
        <View style={styles.counterContainer}>
            <View>
                <Text
                    style={[
                        styles.counter,
                        {
                            color: timerColor,
                        },
                    ]}
                >
                    {counter}
                </Text>
            </View>
        </View>
    );
};

export default TimerDisplay;

const styles = StyleSheet.create({
    counterContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth,
        // backgroundColor: 'lightblue',
    },
    counter: {
        minWidth: 360,
        textAlign: 'center',
        fontSize: 72,
        // fontWeight: 'bold',
        marginBottom: 32,
        letterSpacing: 4,
        // backgroundColor: 'green',
    },
});
