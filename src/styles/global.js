import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        textAlign: 'left',
        lineHeight: 25
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        textAlign: 'right',
        lineHeight: 25
    },
    bold: {
        fontWeight: 'bold'
    },
    italic: {
        fontStyle: 'italic'
    },
    font16: {
        fontSize: 20
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});