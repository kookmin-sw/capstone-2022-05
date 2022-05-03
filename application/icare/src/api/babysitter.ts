import axios from 'axios'
interface babysitterInfoInterface {
    id?: number,
    age?: number,
    gender?: string,
    region?: string,
    career?: string
}

interface babysitterIdInterface {
    id: number
}
interface mappingInterface {
    email: string
}
interface AlarmInterface {
    alarmCode: string,
    alarmText: string,
}
interface DiaryInterface {
    issue: string,
}
//get babysitter info
export const getBabysitterInfo = (id: babysitterIdInterface) => {
    axios.get(process.env.BASE_URL + 'bs/info/'+ id)
        .then( (response) =>{
            return response
        })
        .catch((error) => {
            console.log(error);
        });
};

//post babysitter info
export const postBabysitterInfo = (id:babysitterIdInterface, data:babysitterInfoInterface) => {
    axios.post(process.env.BASE_URL + 'bs/info/' + id, data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
}

//patch babysitter info
export const patchBabysitterInfo = (id:babysitterIdInterface, data:babysitterInfoInterface) => {
    axios.patch(process.env.BASE_URL + 'bs/info/' + id, data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
}

//get babysitter mapping info
export const getBabysitterMapping = (id: babysitterIdInterface) => {
    axios.get(process.env.BASE_URL + 'bs/mapping/'+ id)
        .then( (response) =>{
            return response
        })
        .catch((error) => {
            console.log(error);
        });
};

//post mapping request from babysitter to parents
export const postMappingRequest = (id:babysitterIdInterface, data:mappingInterface) => {
    axios.post(process.env.BASE_URL + 'bs/mapping/'+ id, data)
        .then( (response) =>{
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        });
}

//post Alarm
export const postAlarm = (id:babysitterIdInterface, data:AlarmInterface) => {
    axios.post(process.env.BASE_URL + 'bs/alarm/'+ id, data)
        .then( (response) =>{
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        });
}
//post workDiary
export const postWorkDiary = (id:babysitterIdInterface, data:DiaryInterface) => {
    axios.post(process.env.BASE_URL + 'bs/diary/'+ id, data)
        .then( (response) =>{
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        });
}