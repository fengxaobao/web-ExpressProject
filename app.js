const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));

const modules = require('./mysql/models');

/**
 * 查询列表
 */
app.get('/list/:status/:page', async (req, res, next) => {
    try {
        let {status,page} = req.params;
        let limt = 10;
        let offset= (page-1)*limt
        let list = await modules.ToDo.findAndCountAll({
            where:{
                status
            },
            offset:offset,
            limit:limt
        });
        if(list){
            res.send({
                list,
                message:"查询成功"
            })
        }

    } catch (e) {
        next(e)
    }

});

/**
 * 新增
 */
app.post('/create', async (req, res, err) => {
    let {name, dataline, context, status} = req.body;
    console.log("name")
    for (let i = 0; i < 100; i++) {
        let create = await modules.ToDo.create({
            name: name + i,
            dataline,
            context,
            status

        });
    }
    res.send({
        // create,
        message: "创建成功"
    });
});

/**
 * 修改
 */
app.post('/update', async (req, res, err) => {
    let {name, dataline, context, status, id} = req.body;
    let todo = await modules.ToDo.findOne({
        where: {
            id
        }
    })
    if (todo) {
        todo.update({
            name,
            dataline,
            context,
            status
        })
    }

    res.send({
        message: "更新成功"
    });
});

/**
 * 修改状态
 */
app.post('/updateStatus', (req, res, err) => {
    let {id, status} = req.body;
    res.send({
        id, status
    });
});


app.use((err, req, res, next) => {
    if (err) {
        console.log(err)
        res.status(500).json({
            message: "状态码错误"
        })
    }
    next();

});

/**
 * c
 */
app.listen("3001", () => {
    console.log("服务监听端口 3001 开始")
});
