import React,{Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import strings from 'res/strings';
import TextField from '../common/TextField';
 
class Login extends Component{

    constructor(props){
        super(props);
        state = {
            value:''
        };
    }

    static navigationOptions ={
        header : null,
        // title: strings.Login.Username.login
    };
    
    onChangeText(text){
        this.setState({value:text});
    }

    onPressSignUp(){
        this.props.navigation.navigate('SignUpScreen');
    }

    render(){
        return (
            <View style={styles.containerStyle}>            
                <Image 
                    source={require('../../assets/ipluslogo.png')}
                    style={styles.imageStyle}
                />
                <TextField
                    label={'EMAIL'}
                    placeholder={'email'}
                    onChangeText={this.onChangeText}
                    autoCorrect={false}
                    // value={this.state.value}
                    multiline={true}
                />
                <TextField
                    label={'PASSWORD'}
                    placeholder={'password'}
                    onChangeText={this.onChangeText}
                    autoCorrect={false}
                    // value={this.state.value}
                    multiline={true}
                />
                <TouchableOpacity style={{backgroundColor: '#1E0', height: 40, width: '80%', marginTop: 40, alignItems: 'center', justifyContent:'center'}}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '80%', marginTop: 16, alignItems: 'center', justifyContent:'center'}}>
                    <Text style={{color: 'gray'}}>FORGOT PASSWORD</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', marginTop: 16, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color: 'gray'}}>DON'T HAVE AN ACCOUNT?</Text>
                    <TouchableOpacity onPress={this.onPressSignUp.bind(this)} style={{ paddingLeft : 8,     alignItems: 'center', justifyContent:'center'}}>
                        <Text style={{color: '#fff'}}>SIGNUP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle : {
        backgroundColor : '#000',
        color: '#fff',
        justifyContent: 'top',
        alignItems : 'center',
        flex: 1,
    },
    textStyle: {
        color : '#fff',
    },
    imageStyle :{
        justifyContent: 'center',
        marginTop: 80,
        width : '50%',
        resizeMode: 'contain'
    }
}

export default Login;