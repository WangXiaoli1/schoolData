var express=require('express');
var mysql=require('mysql');
var router=express.Router();

var fs=require('fs');   //重新命名
var formidable=require('formidable');   //写入文件

var pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'schooldata',
    port:3306
})
//调取图片
router.get('/get',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    pool.query(`SELECT * from main_con`,function(err,rows){
        if(err) throw err;
        res.send(rows);
    })
})

router.get('/sides',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    pool.query(`SELECT * from main_side_l`,function(err,rows){
        if(err) throw err;
        res.send(rows);
    })
})

module.exports=router;