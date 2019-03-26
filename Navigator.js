import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/ScreenComponents/LoginScreen';
import SignUp from './src/ScreenComponents/SignupScreen';
import ForgotPassword from './src/ScreenComponents/ForgotPassword';

const loginRouteConfig = {
  LoginScreen : {
    screen : Login
  },
  SignUpScreen : {
    screen : SignUp
  },
  ForgotPasswordScreen : {
    screen : ForgotPassword
  }
}

const navigatorConfig = {
  navigationOptions: {
    header : null
  }
}

export const loginStackNavigator = createStackNavigator(loginRouteConfig, navigatorConfig);
export const LoginStackContainer = createAppContainer(loginStackNavigator);

// const loginStack = createStackNavigator({
//     screenLogin : {screen : Login , navigationOptions : {
//         title: 'Login',
//         headerTintColor: "#fff",
//         headerStyle: {
//           backgroundColor: 'black'
//         },
//       }},
//     screenSignup : {screen : SignUp, navigationOptions: {
//         title: 'SignUp',
//         headerTintColor: "#fff",
//         headerStyle: {
//           backgroundColor: 'black'
//         },
//     }},
//     screenForgotPassword :{screen : ForgotPassword, navigationOptions:{
//         title: 'Forgot Password',
//         headerTintColor: "#fff",
//         headerStyle: {
//           backgroundColor: 'black'
//         },
//     }} 
// });

