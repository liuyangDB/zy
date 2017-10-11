let express = require('express');
let DB =require('../db/DB');


let route = express.Router();
//1获取所有题目类型
route.get('/getAllSubjectType',(req,resp)=>{
    DB.getAllSubjectType().then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);
    })
})
//2获取所有题目级别难度
route.get('/getAllSubjectLevel',(req,resp)=>{
    DB.getAllSubjectLevel().then((data)=>{
        // console.log(data);
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);
    })
})
//3获取所有的方向
route.get('/getAllDepartmentes',(req,resp)=>{
    DB.getAllDepartmentes().then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);
    })
})
//4获取所有的知识点
route.get('/getAllTopics',(req,resp)=>{
    DB.getAllTopics().then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);
    })
})
//5根据方向id获取方向下的知识点
route.get('/getDepartmentTopics',(req,resp)=>{
    DB.getDepartmentTopics(req.query.id).then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);
    })
})
//6保存题目信息
route.post('/saveSubject',(req,resp)=>{
    DB.saveSubject(req.body.subject).then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);
    })
})
//7查询所有题目信息
route.post('/getAllSubjects',(req,resp)=>{
    DB.getAllSubjects(req.body).then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);
    })
})
//8通过id删除题目
route.post('/delSubject',(req,resp)=>{
    var ids =[];
    ids = ids.concat(req.body['ids[]']);
    DB.delSubject(ids).then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);
    })
})
//9审核题目
route.post('/checkSubject',(req,resp)=>{
    DB.checkSubject(req.body).then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);
    })
})
//10获取所有的答案选项
route.post('/getSubjectChoice',(req,resp)=>{
    DB.getSubjectChoice(req.body.id).then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);
    })
})
//11获取所有学生信息
route.get('/getAllStudents',(req,resp)=>{
    DB.getAllStudents().then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);
    })
})
//12保存学生信息
route.post('/saveStudent',(req,resp)=>{
    DB.saveStudent(req.body.student).then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);
    })
})


module.exports = route;