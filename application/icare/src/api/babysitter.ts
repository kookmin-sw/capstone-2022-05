import axios from 'axios'
import {useState} from "react";
interface babysitterInfoInterface {
    id?: number,
    age?: string,
    gender?: string,
    region?: string,
    career?: string
}
interface parentsInfoInterface {
    parentId : number
    babyName : string,
    babyBirth: string,
    babyGender: string,
    region: string,
    career: string,
    createdAt: string
}
interface AlarmInterface {
    alarmCode: string,
    alarmText: string,
}

//get babysitter info
export const getBabysitterInfo = (id: number, callback: (response:any) => void) => {
    axios.get('http://3.39.149.92:3000/' + 'bs/info/'+ id)
        .then( (response) =>{
            callback(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
};

//post babysitter info
export const postBabysitterInfo = (id:number, data:babysitterInfoInterface) => {
    axios.post(process.env.BASE_URL + 'bs/info/' + id, data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
}

//patch babysitter info
export const patchBabysitterInfo = (id:number, data:babysitterInfoInterface) => {
    axios.patch(process.env.BASE_URL + 'bs/info/' + id, data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
}

//get babysitter mapping info
export const getBabysitterMapping = (id: number, token, callback: (response:any) => void) => {
    axios.get('http://3.39.149.92:3000/' + 'bs/mapping/'+ id,{
        headers: {
        "Authorization" : token
    }})
        .then((response) =>{
            callback(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
};

//post mapping request from babysitter to parents
export const postMappingRequest = (id:number, eamil:string) => {
    axios.post(process.env.BASE_URL + 'bs/mapping/'+ id, eamil)
        .then( (response) =>{
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        });
}

//post Alarm
export const postAlarm = (id:number, data:AlarmInterface) => {
    axios.post(process.env.BASE_URL + 'bs/alarm/'+ id, data)
        .then( (response) =>{
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        });
}
//post workDiary
export const postWorkDiary = (id:number, issue:string) => {
    axios.post(process.env.BASE_URL + 'bs/diary/'+ id, issue)
        .then( (response) =>{
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        });
}