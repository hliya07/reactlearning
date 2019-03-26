import React,{Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Button} from 'react-native';
import strings from 'res/strings';
import TextField from '../common/TextField';
import ModalDropdown from 'react-native-modal-dropdown';
import {Icon} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';


export default class SignUp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            radioBtnsData: ['Item1', 'Item2', 'Item3'],
            checked: 0,
            value:''
        }
    }
    

    static navigationOptions = ({ navigation, screenProps }) => ({
        title:  strings.Login.Username.newResiden,
        headerLeft: <TouchableOpacity style={{marginLeft: 16}}>
                        <Icon name={'back'}
                                    onPress={ () => { navigation.goBack() }} />
                    </TouchableOpacity>,
        headerRight: <TouchableOpacity style={{marginRight: 16}}>
                            <Icon name={'done'}
                                        onPress={ () => { navigation.goBack() }} />
                        </TouchableOpacity>,
      });

    // static navigationOptions ={
    //     // header : null,
    //     title: strings.Login.Username.newResident,
    //     headerLeft: ( <Icon  source={require('../../assets/back.png')} onPress={ () => { goBack() } }  /> ),
    //     headerRight: (
    //         <Button
    //           onPress={() => alert('This is a button!')}
    //           title="Info"
    //           color="#fff"
    //         />
    //       ),
    // };

    // genderSelection(){
        // {this.state.radioBtnsData.map((data, key) => {
        //     return (
        //         <View key={key}>
        //             {this.state.checked == key ?
        //                 <TouchableOpacity style={styles.btn}>
        //                     <Image style={styles.img} source={require("../../assets/rb_selected.png")}/>
        //                     <Text>{data}</Text>
        //                 </TouchableOpacity>
        //                 :
        //                 <TouchableOpacity onPress={()=>{this.setState({checked: key})}} style={styles.btn}>
        //                     <Image style={styles.img} source={require("../../assets/rb_unselected.png")} />
        //                     <Text>{data}</Text>
        //                 </TouchableOpacity>
        //             }
        //         </View>
        //     )
        // })}
    // } 

    render(){

        let data = [{
            value: 'Banana',
          }, {
            value: 'Mango',
          }, {
            value: 'Pear',
          }];
       

        return (
            <ScrollView style={{flex: 1}}>
                <TextField
                    label={'FIRST NAME'}
                    placeholder={''}
                    onChangeText={this.onChangeText}
                    autoCorrect={false}
                    // value={this.state.value}
                    secondContainerStyle={{ borderBottomWidth: 1, marginTop:16}}
                    secondLabelStyle={{color: '#000', backgroundColor: '#fff', paddingLeft: 0}}
                    secondInputStyle={{color: '#000', backgroundColor: '#fff', borderColor: '#000',paddingLeft: 8}}
                    multiline={true}
                />
                <TextField
                    label={'LAST NAME'}
                    placeholder={''}
                    onChangeText={this.onChangeText}
                    autoCorrect={false}
                    // value={this.state.value}
                    multiline={true}
                    secondContainerStyle={{ borderBottomWidth: 1, marginTop:16}}
                    secondLabelStyle={{color: '#000', backgroundColor: '#fff', paddingLeft: 0}}
                    secondInputStyle={{color: '#000', backgroundColor: '#fff', borderColor: '#000',paddingLeft: 8}}
                />
                <TextField
                    label={'PHONE NUMBER'}
                    placeholder={''}
                    onChangeText={this.onChangeText}
                    autoCorrect={false}
                    // value={this.state.value}
                    multiline={true}
                    secondContainerStyle={{ borderBottomWidth: 1, marginTop:16}}
                    secondLabelStyle={{color: '#000', backgroundColor: '#fff', paddingLeft: 0}}
                    secondInputStyle={{color: '#000', backgroundColor: '#fff', borderColor: '#000',paddingLeft: 8}}
                    multiline={true}
                />
                <TextField
                    label={'EMAIL'}
                    placeholder={''}
                    onChangeText={this.onChangeText}
                    autoCorrect={false}
                    // value={this.state.value}
                    multiline={true}
                    secondContainerStyle={{ borderBottomWidth: 1, marginTop:16}}
                    secondLabelStyle={{color: '#000', backgroundColor: '#fff', paddingLeft: 0}}
                    secondInputStyle={{color: '#000', backgroundColor: '#fff', borderColor: '#000',paddingLeft: 8}}
                    multiline={true}
                />
                <View style={{flexDirection : 'row', height: 40, alignItems :'center' , marginLeft : 20, marginRight: 20, marginTop: 20}}>
                    <Text style={{marginRight: 40}}>GENDER</Text>
                    <Text>MALE</Text>
                    <TouchableOpacity style={{marginLeft: 8}}>
                        <Image style={styles.img} source={require("../../assets/rb_selected.png")} />
                    </TouchableOpacity>
                    <Text>FEMALE</Text>
                    <TouchableOpacity style={{marginLeft: 8}}>
                    <Image style={styles.img} source={require("../../assets/rb_unselected.png")} />
                    </TouchableOpacity>
                </View>
                <TextField
                    label={'SELECTED PROPERTY'}
                    placeholder={''}
                    onChangeText={this.onChangeText}
                    autoCorrect={false}
                    // value={this.state.value}
                    multiline={true}
                    secondContainerStyle={{ borderBottomWidth: 1, marginTop:16}}
                    secondLabelStyle={{color: '#000', backgroundColor: '#fff', paddingLeft: 0}}
                    secondInputStyle={{color: '#000', backgroundColor: '#fff', borderColor: '#000',paddingLeft: 8}}
                    multiline={true}
                />
                <View style={{marginLeft: 16, marginRight: 16, marginTop: 16 , alignItems:'left', justifyContent:'center'}}>
                    <Text style={{fontSize:11}}>SELECT TOWER</Text>
                    <ModalDropdown  textStyle={{color:'#fff', height: 40}}  dropdownTextStyle={{color:'#fff'}} style={{ border : 1, width: '100%', borderWidth: 1, flex: 1, height: 40, color:'#fff'}} options={['option', 'option 2']}/>
                </View>
                <View style={{marginLeft: 16, marginRight: 16, marginTop: 16, }}>
                    <Text style={{fontSize:11}}>SELECT UNIT</Text>
                    <ModalDropdown  textStyle={{color:'#fff', height: 40}}  dropdownTextStyle={{color:'#fff'}} style={{ border : 1, width: '100%', borderWidth: 1, flex: 1, height: 40, color:'#fff'}} options={['option', 'option 2']}/>

                </View>
                <View style={{marginLeft: 16, marginRight: 16, marginTop: 16, marginBottom: 16}}>
                    <Text style={{fontSize:11}}>SELECT ROLE</Text>
                    <ModalDropdown  textStyle={{color:'#fff', height: 40}}  dropdownTextStyle={{color:'#fff'}} style={{ border : 1, width: '100%', borderWidth: 1, flex: 1, height: 40, color:'#fff'}} options={['option', 'option 2']}/>

                </View>
                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    img:{
        height:20,
        width: 20,
        marginRight: 8
    },
    btn:{
        flexDirection: 'row'
    }
});