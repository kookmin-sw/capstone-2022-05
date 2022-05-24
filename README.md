# ICARE
<a href="./docs/팀05-중간보고서.pdf"><strong>중간 보고서 링크</strong></a>
<br/>
<a href="./docs/팀05-중간발표자료.pdf"><strong>중간 발표 자료 링크</strong></a>
<br/>
<a href="./docs/팀05-최종발표자료.pdf"><strong>최종 발표 자료 링크</strong></a>
<br/>
<a href="https://youtu.be/6aM0t3pmxVA"><strong>시연 영상 링크</strong></a>
<br/>
<a href="https://docs.google.com/document/d/1GNAOAtuPM39IEv15RSCPHiqbZbJglwEq/edit?usp=sharing&ouid=100622726522714582578&rtpof=true&sd=true"><strong>최종 보고서 링크</strong></a>

## 1. 프로젝트 소개

### 프로젝트 설명

<div align="center">
    <img src="https://user-images.githubusercontent.com/39997876/161223797-bb810439-2c98-4dbe-a107-c3e79e2ae41d.png" alt="Logo" width="256">
</div>
<br/>

본 프로젝트 ‘ICARE(아이케어)’는 부모와 아이 돌보미 사이를 이어주는 어플리케이션으로 부모와 아이 돌보미의 의사소통을 원활하게 돕고 고용주와 고용인 사이에서 일어날 수 있는 여러가지 갈등들을 해결하기 위함이 목표입니다. 
부모의 입장에서는 일을 하면서 아이의 행동을 실시간 푸쉬 알림으로 받아 알 수 있게 되고 아이 돌보미의 입장에서는 최소한의 노력으로 아이의 행동을 보고 할 수 있어 고용인의 신뢰를 살 수 있으며 온/습도 센서를 사용한 기능 덕분에 아이의 용변 여부를 많은 신경을 쓰지 않고도 알 수 있게 되어 업무에 도움을 주게 됩니다

### 주요 기능

![image](https://user-images.githubusercontent.com/39540561/169974855-0e32e799-7a39-4162-a7b1-76cf99f443d4.png)

![image](https://user-images.githubusercontent.com/39540561/169974717-f6b61fde-8379-494c-a330-c4f5e53ca925.png)

### 소개 포스터

<div align="center">
    <img src="https://raw.githubusercontent.com/kookmin-sw/capstone-2022-05/master/docs/%E1%84%90%E1%85%B5%E1%86%B705-%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5.png" alt="Poster" width="512">
</div>

### 2. 소개 영상

[![캡스톤 5 팀 소개 영상 비디오](./docs/capstone_thumb.png)](https://youtu.be/6aM0t3pmxVA)


### 3. 팀 소개


<img src="https://user-images.githubusercontent.com/39997876/161223782-8253f7d0-40a9-4185-a746-d85183da03b0.png" alt="Logo" width="256">

```markdown
이름: 허채림(팀장)
학번: 20181707
E-mail: 20181707@kookmin.ac.kr
역할: 프론트엔드 개발, UI/UX 디자인
```


<img src="https://user-images.githubusercontent.com/39997876/161224539-b28267ac-b70e-4132-8588-ee8653f5cbc3.jpeg" alt="Logo" width="256">

```markdown
이름: 정소원
학번: 20181689
E-mail: soso2266@kookmin.ac.kr
역할: UI/UX 디자인, 프론트엔드 개발, AWS 구축
```

<img src="https://user-images.githubusercontent.com/39997876/161224036-476f181f-9176-4cf5-9c15-6cdb3d093178.png" alt="Logo" width="256">

```markdown
이름: 임성원
학번: 20171686
E-mail: sungwontoto@kookmin.ac.kr
역할: 서버 개발, 데이터베이스 구축, IoT 연동
```

<img src="https://user-images.githubusercontent.com/39997876/161224015-9bdac1ad-c0e0-45d2-8024-5063c9de41ac.png" alt="Logo" width="256">

```markdown
이름: 차영호
학번: 20171707
E-mail: cyh6099@kookmin.ac.kr
역할: 서버 개발, 데이터베이스 구축, AWS 구축
```

### 4. 사용법

IOS

```markdown
$ git clone https://github.com/kookmin-sw/capstone-2022-05
$ cd capstone-2022-05/application/icare
$ npm install
$ cd ios && pod install
$ npm run ios / react-native run-ios / yarn ios //셋 중 1택
$ react-native run-ios --device '{device_name}' --configuration Release //ios 기기에서 실행
```

Android

```markdown
$ git clone https://github.com/kookmin-sw/capstone-2022-05
$ cd capstone-2022-05/application/icare
$ react-native run-android
```

Server
```
$ git clone https://github.com/kookmin-sw/capstone-2022-05.git
$ docker build -t icare-server ./backend
$ docker run -d -p 3000:3000 icare-server
```

### 5. 기타


<p align="center">
    <img src="https://user-images.githubusercontent.com/39997876/161226405-b24013a6-0f7a-4c5d-837b-604559f87731.png" alt="Logo" width="36">
    <br/>
    <a href="https://www.figma.com/file/opGJWmV35hTEjhr7ZoqOg8/%EC%BA%A1%EC%8A%A4%ED%86%A42022?node-id=0%3A1"><strong>Figma Link »</strong></a>
    <br/>
    <img src="https://user-images.githubusercontent.com/39997876/161226189-91bb4b81-96d1-42e8-a1ee-9b3115c0af6b.png" alt="Logo" width="64">
    <br/>
    <a href="https://miro.com/app/board/uXjVOYc2F9A=/"><strong>Miro Link »</strong></a>
</p>
