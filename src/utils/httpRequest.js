// const https = require("https")
// function getInfor(){
// https.get('/api/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.54&referer=2', (res) => {
//     let str = "";
//     res.on("data", (chunk) => {
//         // 得到一个JSON字符串对象
//         str += chunk
//     });
//     res.on("end",()=>{
//         let val=JSON.parse(str)
//         console.log("得到的数据",val["data"])
//         return val;
//         console.log(isJSON(val))
//     })
//     //判断数据是否为JSON对象
//     function isJSON(obj){
//         var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object   object]" && !obj.length;   
//         return isjson;
//      }

// })
// };

// getInfor()


import axios from 'axios'

let getInfor=axios.post("/api/home/index/getClassifyHome", {
    data: {
        city_id: 0,
        version: "6.1.54",
        referer: 2
    },
    headers: {
        
        "Content-Type": 'application/json; charset=utf-8'
},
})

export default getInfor




