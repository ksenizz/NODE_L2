require('dotenv').config();

const os = require('node:os');
function informOS(){
    console.log(os.platform());
    console.log(os.freemem()/1024/1024);
    console.log(os.homedir());
    console.log(os.type());
    console.log(os.networkInterfaces());
}
function checkFreeMemory(){
    if(os.freemem()/1024/1024>4000){
        return true;
    }
    return false;
}
function checkMode(){
    if(process.env.MODE==="user"||"admin"){
        informOS();
    }
}
console.log(checkFreeMemory());
checkMode();