import axios from 'axios';

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
    })
    .catch(function (error) {
      console.log(error);
    });
};
