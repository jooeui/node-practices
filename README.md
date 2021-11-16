# node-practices
1. 패키지(package)
- 완전한 애플리케이션 ex) devtools(nodedaemon, babel, webpack)
- 프로젝트에서 사용하는 모듈(라이브러리)

2. 의존성(dependency)
- 개발하고 있는 프로젝트(애플리케이션, 패키지)에서 설치하고 사용하는 다른 패키지
- 일반 의존성<br>
    개발하고 있는 프로젝트에서 사용하는 패키지로 배포에 꼭 포함<br>
    `$ npm i ...`
- 개발 의존성<br>
    개발에 필요하거나 도움이 되는 패키지(dev tools)로 배포에 포함되지 않는다.<br>
    `$ npm i -D ...`
    
3. 패키지 설치 방식
    1) 전역(global) 설치: 여러 프로젝트에서 공통으로 사용하는 도구 설치<br>
        `$ npm i g`
    2) 지역(project local) 설치: 특정 프로젝트만 종속적인 도구나 라이브러리들<br>
        `$ npm i`<br>
        `$ npm i -D`<br>
    3) 패키지 설치<br>
        [project-ex01] `$ npm i ejs`            (local install, general dependency)<br>
        [project-ex01] `$ npm i -D nodaemon`    (local install, development dependency)<br>
        [project-ex01] `$ npm i -g gulp`    (global install)<br>
    4) 패키지 삭제   
        [project-ex01] `$ npm un ejs`    (local install 삭제)<br>
        [project-ex01] `$ npm un -g gulp`    (global install 삭제)<br>

4. Node(JavaScript) Project(C/S Application, Package) 생성
    1) 프로젝트 디렉토리 생성 (mkdir)
    2) 프로젝트 이동 (cd)
    3) [project-ex01] `$ npm init -y` (프로젝트 매니페스트 파일(project.json) 생성, 프로젝트 초기화)

5. Module
    1) 코어 모듈(fs, os, ... node에서 제공해주는 모듈)
    2) 파일 모듈: 파일 경로로 불러와서 모듈 안의 객체, 함수, 클래스를 사용한다.
    3) npm 모듈: npm을 통해 node_module에서 설치하여 사용하는 모듈
        - 로컬 배포
        - 원격 배포

6. npmjs.com npm registry에 패키지 배포
    1) 사용자 등록
    2) 배포<br>
        > `$ npm adduser`<br>
        `Username: ...`<br>
        `password: ...`<br>
        `[douzone-bipa-math] $ npm publish`<br>

7. helloweb-ex01: 맨바닥에서 웹애플리케이션 만들어보기
    1) app01: based on http : core module
    2) app02: based on http, fs: core module
    3) app03: based on connect, serve-static: npm package
    4) app04: based on connect, serve-static, connect-route: npm package

8. helloweb-ex02: express 프레임워크 기반의 웹애플리케이션 만들기<br>
    1) 
    [helloweb-ex02] `$ npm init -y`<br><br>
    2)
    [helloweb-ex02] `$ npm i express`<br>
    [helloweb-ex02] `$ npm i ejs`<br>
    [helloweb-ex02] `$ npm i -D nodemon`<br><br>
    3) package.json 스크립트
    ```
    "scripts": {
        "start": "node index.js",
        "debug": "nodemon index.js"
    },
    ```
    [helloweb-ex02] `$ npm start`       (운용시)<br>
    [helloweb-ex02] `$ npm run debug`   (개발시)<br><br>
    4) 디렉토리 구조    
    [helloweb-ex02] `$ mkdir public`<br>
    [helloweb-ex02] `$ mkdir routes`<br>
    [helloweb-ex02] `$ mkdir controllers`<br>
    [helloweb-ex02] `$ mkdir models`<br>
    [helloweb-ex02] `$ mkdir views`<br>
    
9. emaillist(models based on mysql) - 기본 sql 기반<br>
    1) 
    [emaillist] `$ npm init -y`<br><br>
    2)
    [emaillist] `$ npm i express`<br>
    [emaillist] `$ npm i ejs`<br>
    [emaillist] `$ npm i mysql2`<br>
    [emaillist] `$ npm i -D nodemon`<br><br>
    3) package.json 스크립트
    ```
    "scripts": {
        "start": "node index.js",
        "debug": "nodemon index.js"
    },
    ```
    [emaillist] `$ npm start`       (운용시)<br>
    [emaillist] `$ npm run debug`   (개발시... Live Update)<br><br>
    4) 디렉토리 구조    
    [emaillist] `$ mkdir public`<br>
    [emaillist] `$ mkdir routes`<br>
    [emaillist] `$ mkdir controllers`<br>
    [emaillist] `$ mkdir models`<br>
    [emaillist] `$ mkdir views`<br>