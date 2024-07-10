ex05: React API 기반의 Application Refactoring

DOM API 대신 React.js Library(React API)를 사용해서 Application 작성하기


== [실습] ===============================================

<1> Init Project
$ mkdir ex05
$ cd ex05
$ npm init -y 


<2> Install Packages
1. 개발툴
$ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass

2. React 라이브러리
$ npm i react react-dom


<3> NPM scripting : package.json
"scripts": {
    "start": "npx webpack serve  --progress",
    "build": "npx webpack"
} 


<4> Configuration
webpack.config.js


<5> Landing Page
public/index.html 


<6> Writing Application with React API
1. src/index.js
2. src/App.js


<7> Test
$ npm start


<8> Build(Bundling)
$ npm run build