import React, {Component} from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';


const TextField = ({label,secondLabelStyle, value, onChangeText, placeholder, secondInputStyle, secondContainerStyle}) => {
    const {inputStyle, labelStyle, containerStyle} = styles;

    return (
        <View style={[containerStyle, secondContainerStyle]}>
            <Text style={[labelStyle, secondLabelStyle]}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                autoCorrect={false}
                style={[inputStyle, secondInputStyle]}
                value={value}
                multiline={true}
                onChangeText={onChangeText}
            />
        </View>
    );    
};

const styles = {
    containerStyle : {
        marginTop: 40,
        marginBottom: 8,
        marginLeft : 24,
        marginRight : 24,
        // flex: 1,
        flexDirection : 'column',
        alignItems : 'left',
        height: 40
    },
    labelStyle : {
        fontSize : 11,
        paddingLeft : 4,
        // paddingRight : 16,
        color: '#fff'
    },
    inputStyle : {
        color : '#fff',
        padding : 0,
        paddingTop : 12,
        // marginTop : 8,
        // marginLeft : 16,
        // marginRight : 16,
        fontSize : 15,
        // borderWidth : 1,
        borderRadius : 6,
        borderBottomWidth : 1,
        borderColor: '#fff',
        // borderTopWidth : 1,
        // borderLeftWidth : 1,
        // borderRightWidth : 1,
        height : 40,
        alignSelf: 'center',
        justifyContent : 'center',
        width : Dimensions.get('window').width - 32,
        backgroundColor : '#000'
    }
};

export default TextField;