import { StyleSheet, View, Text as NativeText } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
        flexShrink: 1,
        flexGrow: 1
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorTextOnColored: {
        color: theme.colors.textOnColored,
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
});

export const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
    const textStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        color === 'textOnColored' && styles.colorTextOnColored,
        fontSize === "subheading" && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        style
    ];

    return <View style={{flexDirection: "row"}}><NativeText style={textStyle} {...props} /></View>;
};

export const Subheading = ({ ...props }) => {
    return <Text fontSize='subheading' {...props} />;
};