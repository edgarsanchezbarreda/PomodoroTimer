import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import { Feather } from '@expo/vector-icons';

const SettingsScreen = () => {
    return (
        <View style={styles.screenContainer}>
            <View style={styles.settingsContainer}>
                <View>
                    <View style={styles.settings}>
                        {/* Focus Time */}

                        <Text style={styles.settingsText}>Focus time</Text>

                        <View style={styles.settingSelector}>
                            <Text style={styles.setting}>20 min</Text>
                            <Feather
                                name='chevron-down'
                                size={16}
                                color={colors.white}
                            />
                        </View>
                    </View>
                    <View style={styles.settings}>
                        {/* Short Break Time */}
                        <Text style={styles.settingsText}>Short break</Text>
                        <View style={styles.settingSelector}>
                            <Text style={styles.setting}>5 min</Text>
                            <Feather
                                name='chevron-down'
                                size={16}
                                color={colors.white}
                            />
                        </View>
                    </View>
                    <View style={styles.settings}>
                        {/* Long Break Time */}
                        <Text style={styles.settingsText}>Long break</Text>
                        <View style={styles.settingSelector}>
                            <Text style={styles.setting}>15 min</Text>
                            <Feather
                                name='chevron-down'
                                size={16}
                                color={colors.white}
                            />
                        </View>
                    </View>
                    <View style={styles.settings}>
                        {/* Intervals */}
                        <Text style={styles.settingsText}>Interval</Text>
                        <View style={styles.settingSelector}>
                            <Text style={styles.setting}>4 Intervals</Text>
                            <Feather
                                name='chevron-down'
                                size={16}
                                color={colors.white}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.saveSettingsContainer}>
                    {/* Cancel/Save Settings Container */}
                    <Pressable style={styles.cancelButton}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </Pressable>
                    <Pressable style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>Save</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
    },
    settingsContainer: {
        flex: 1,
        width: '100%',
        paddingVertical: 36,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        // backgroundColor: 'white',
    },
    settings: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        paddingHorizontal: 24,
        paddingVertical: 24,
        borderRadius: 24,
        // backgroundColor: 'white',
        backgroundColor: colors.blackSecondary,
    },
    settingsText: {
        color: colors.gray,
        fontSize: 16,
    },
    settingSelector: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    setting: {
        paddingRight: 12,
        fontSize: 16,
        color: colors.white,
    },
    saveSettingsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: colors.white,
        marginBottom: 48,
    },
    cancelButton: {
        paddingVertical: 20,
        paddingHorizontal: 48,
        borderRadius: 36,
    },
    cancelButtonText: { color: colors.white, fontSize: 16 },
    saveButton: {
        backgroundColor: colors.green,
        paddingVertical: 20,
        paddingHorizontal: 58,
        borderRadius: 36,
        // width: 48,
    },
    saveButtonText: { color: colors.white, fontSize: 16 },
});
