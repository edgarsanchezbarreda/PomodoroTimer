import { StyleSheet, Text, View, Pressable, ColorValue } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export type IconButtonProps = {
    icon: keyof typeof Ionicons.glyphMap;
    size?: number;
    color?: string;
    onPress: () => void;
    title?: string;
    titleColor?: ColorValue;
};

const IconButton: React.FC<IconButtonProps> = ({
    icon,
    size,
    color,
    onPress,
    title,
    titleColor,
}) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.buttonContainer}>
                <Ionicons name={icon} size={size} color={color} />
                <Text style={[styles.title, { color: titleColor }]}>
                    {title}
                </Text>
            </View>
        </Pressable>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2,
    },
    pressed: {
        opacity: 0.6,
    },
    title: {
        paddingLeft: 4,
    },
});
