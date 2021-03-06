/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Styles} from "../../themes";
import {connect} from "react-redux";
import AliIcon from "../../components/AliIcons/AliIcon";
import {LoadingHOC} from '../../components/'
import Separator from "../../components/Separator";
import Utils, { W} from "~/common/Utils";
import { withTranslation } from 'react-i18next';
import api from "~/net/Api";
import {Tooltip} from "react-native-elements";
import { NavigationActions } from 'react-navigation';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


@connect(({ global }) => ({
    global
}))
@LoadingHOC
@withTranslation()
 export default  class Home extends Component {


    renderRightItem=()=>(
        <View style={[Styles.flex1,{backgroundColor: 'red'}]}>
            <Text>asdasd</Text>
        </View>
    )

    componentDidMount(){
    }
    render() {
        return (
            <View style={[styles.header,Styles.column]}>
                <AliIcon name='gonggao' size={20} color="red"/>
                <View style={{marginTop:10}}>
                    {/*<FontAwesome.Button name="BTC" backgroundColor="#3b5998">*/}
                        {/*<Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>*/}
                    {/*</FontAwesome.Button>*/}


                    {/*<FontAwesome name='user' size={20} color={'#00ff00'}/>*/}

                    {/*<FontAwesome name="rocket" size={30} color="#900" />*/}

                    {/*<Text>图标展示<FontAwesome name={'facebook'} color={'red'} size={20}/></Text>*/}
                </View>
                <TouchableOpacity activeOpacity={1}  onPress={()=>{
                    // api.login().then(data=>{
                    //     console.log(data);
                    // })

                    this.props.navigation.navigate("Home3",{ name: 'Devio' })

                    // this.props.navigation.setParams({right:this.renderRightItem,title:'123213'})


                }}><Text>{this.props.t('english')}</Text></TouchableOpacity>
                <Text style={styles.welcome}>home</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Separator color={'red'} paddingLeft={W(100)}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

