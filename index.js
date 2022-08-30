//required packages
const express = require('express');
const cluster = require('cluster');
const os = require('os');

//count of cpus
const cpuNum = os.cpus().length;

const app = express();

//require routes
const homeRoute = require('./routes/homePage')

app.use(homeRoute);

if(cluster.isMaster){
    for (let i = 0;i < cpuNum;i++) {
        cluster.fork();
    }

    cluster.on("exit" , (worker)=>{
        cluster.fork();
    })
}
else {
    app.listen(4000 , ()=>{
        console.log(`App is listening`);
    })
}