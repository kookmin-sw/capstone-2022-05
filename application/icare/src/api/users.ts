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
const _storeData = async (token:string, userId:number, jobId:number) => {
    try {
        await AsyncStorage.setItem(
            'token',token
        );
        await AsyncStorage.setItem(
            'userId', String(userId)
        )
        await AsyncStorage.setItem(
            'jobId', String(jobId)
        )
    } catch (error) {
        // Error saving data
    }
}
export const _getData = async (keyName:string, callback: (response:any) => void) => {
    try {
        await AsyncStorage.getItem(keyName).then((data) => {
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

export const login = (data: loginInterface, job:number, callback: (response:any) => void) => {
    axios.post('http://3.39.149.92:3000/' + 'user/login', data)
    .then(function (response) {
      console.log(response);
      callback(response.status)
      _storeData(response.data.token, response.data.userInfo[0].userId, job===1 ? response.data.parentId : response.data.sitterId);
    })
    .catch(function (error) {
      console.log(error);
    });
};
