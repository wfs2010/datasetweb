const fs = require('fs')
const path = require('path')
const JSON5 = require('json5')
const Mock = require('mockjs')

function getJsonFile(filepath) {
    let json = fs.readFileSync(path.join(__dirname, filepath), 'utf-8');
    return JSON5.parse(json)
}

module.exports = app => {
    if(process.env.MOCK =='true'){
        app.get('/user/userinfo',function (rep,res) {
            let json = getJsonFile('./userInfo.json5');
            //生成的数据返回给浏览器
            res.json(Mock.mock(json));
        })
        app.get('/gawdata',function (rep,res) {
            let json = getJsonFile('./gawdatasInfo.json5');
            //生成的数据返回给浏览器
            res.json(Mock.mock({'list|10':[json],LDexpansion: [
                    {avatar: "@image('200x200','red','#fff','avatar')"},
                    {avatar: "@image('200x200','red','#fff','avatar')"}
                ]}));
        })

    }

}
