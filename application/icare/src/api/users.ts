import axios from 'axios';
import {AsyncStorage} from 'react-native';

interface signupInterface {
  email: string;
  password: string;
  username: string;
  nickname: string;
  code: number;
}

interface loginInterface {
  email: string;
  password: string;
}
const _storeData = async (token:string) => {
    try {
        await AsyncStorage.setItem(
            'token',token
        );
    } catch (error) {
        // Error saving data
    }
}
export const _getData = async (callback: (response:any) => void) => {
    try {
        await AsyncStorage.getItem('token').then((data) => {
            callback(data);
        })
    } catch (error){}
}
export const signup = (data: signupInterface) => {
    axios.post(process.env.BASE_URL + 'user/signup', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const login = (data: loginInterface) => {
    axios.post(process.env.BASE_URL + 'user/login', data)
    .then(function (response) {
      console.log(response);
      _storeData(response.data.token);
    })
    .catch(function (error) {
      console.log(error);
    });
};
