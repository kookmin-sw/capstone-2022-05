import axios from 'axios';

interface parentInterface {
  babyName: string;
  babyBirth: string;
  babyGender: string;
  region: string;
  career: string;
}

//부모 정보 입력하기
export const setParentInfo = (data: parentInterface, id: number) => {
    axios.post(process.env.BASE_URL + 'parent/info/' + id, data)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
};

//부모 정보 가져오기
export const getParentInfo = (id: number, callback: (value: parentInterface)=> void) => {
    axios.get(process.env.BASE_URL + 'parent/info/' + id, {
        headers: {
            // "Authorization" : 
        }
    })
    .then(function (response) {
        console.log(response);
        callback(response.data.parentInfo)
    })
    .catch(function (error) {
        console.log(error);
    });
};

//부모 정보 수정하기
export const editParentInfo = (data: parentInterface, id: number) => {
    axios.patch(process.env.BASE_URL + 'parent/info/' + id, {
        headers: {
            // "Authorization" : 
        },
        data
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
};

//부모 메인페이지 정보 가져오기
export const getParentMainInfo = (id: number, callback: (value:[])=> void) => {
    axios.get(process.env.BASE_URL + 'parent/main/' + id, {
        headers: {
            // "Authorization" : 
        }
    })
    .then(function (response) {
        console.log(response);
        callback(response.data.mapping_info)
    })
    .catch(function (error) {
        console.log(error);
    });
};

//보모 매핑 요청 수락하기
export const acceptBS = (id: number) => {
    axios.patch(process.env.BASE_URL + 'parent/mapping/acceptance' + id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
};

//보모 매핑 요청 거절하기
export const rejectBS = (id: number) => {
    axios.delete(process.env.BASE_URL + 'parent/mapping/rejection' + id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
};