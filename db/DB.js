require('babel-polyfill');
let pool = require('./pool');

module.exports={
   //１获取所有题目类型
   getAllSubjectType(){
        let sql = "select * from tbl_exam_subjecttype";
        return pool.execute(sql);
    },
    //２获取所有题目难度级别
    getAllSubjectLevel(){
        let sql = "select * from tbl_exam_subjectlevel";
        return pool.execute(sql);
    },
    //３获取所有的方向
    getAllDepartmentes(){
        let sql = "select * from tbl_exam_department";
        return pool.execute(sql);
    },
    //４获取所有的知识点
    getAllTopics(){
        let sql = "select * from tbl_exam_topic"
        return pool.execute(sql);
    },
    //５根据方向id获取方向下的知识点
    getDepartmentTopics(id){
        let sql = "select t.id ,t.title from tbl_exam_topic as t where id ="+id;
        return pool.execute(sql);
    },
    //６保存题目信息
    saveSubject(subject){
        console.log(subject);
        let time = new Date();
        let year = time.getFullYear();
        let month = time.getMonth()+1;
        let date = time.getDate();
        time = year+'-'+month+'-'+date;
        console.log(time);
        let sql = "insert into tbl_exam_subject values(null,'"
        +subject['analysis']+"','"
        +subject['answer']+"','"
        +'未通过'+"','"
        +subject['stem']+"','"
        +time+"',"
        +subject['department.id']+","
        +subject['subjectLevel.id']+","
        +subject['subjectType.id']+","
        +subject['topic.id']+","
        +null+")";
        console.log("哈哈",sql)
        return pool.execute(sql);
    },
    saveChoice(subject,id){
        for(var key in subject['choiceContent[]']){
            let sql = "insert into tbl_exam_choice values(null,'"
            +subject['choiceContent[]'][key]+"',"
            +subject['choiceCorrect[]'][key]+","
            +id+")";
            pool.execute(sql);
        }
    },
    //７查询所有题目信息
    getAllSubjects(subject){
        console.log("嘿嘿",subject);
        let type_id = JSON.parse(subject["type"]);
        let level_id = JSON.parse(subject["level"]);
        let direct_id = JSON.parse(subject["direct"]);
        let topic_id = JSON.parse(subject["topic"]); 
        let sql = "select * from tbl_exam_subject where subjectType_id in (" 
            +type_id.join()+") and subjectLevel_id in("
            +level_id.join()+") and department_id in("
            +direct_id.join()+") and topic_id in("
            +topic_id.join()+") ";
        return pool.execute(sql);
    },
    //８通过id删除题目
    delSubject(subject){
        console.log("22",subject);
        let id =subject['subject.id'];
        let sql = "delete from tbl_exam_subject where id ="+id;
        return pool.execute(sql);        
    },
    //９审核题目
    checkSubject(subject){
        console.log(subject);
        let checkState = subject['subject.checkState'];
        let id = subject['subject.id'];
        let sql = "update tbl_exam_subject set checkState = '"
        +checkState+"' where id="+id;
        return pool.execute(sql);
    },
    //10获取所有的答案选项
    getSubjectChoice(id){
        let sql = "select * from tbl_exam_choice where subject_id = "+id;
        return pool.execute(sql);
    },
    //11获取所有学生信息
    getAllStudents(){
        let sql = "select * from tbl_exam_user";
        return pool.execute(sql);
    },
    //12保存学生信息
    saveStudent(subject){
        let sql = "insert into tbl_exam_user values(null,'"
        +user.name+"','"
        +user.age+"','"
        +user.gender+"')";
        return pool.execute(sql);
    },
    //13关键字查询题目
    querysubject(keys){
        console.log("嘻嘻",keys);
        let sql = "select * from tbl_exam_subject where stem like '%"+keys+"%'";
        console.log(sql);
        return pool.execute(sql);
    }
    
}