
'use strict'
let co = require('co');
let coDal = require('./../../../../Helper/DALNoSql');
let mongodb = require('mongodb');
var check = require("check-type").init();

exports.createPeroid = co.wrap(function*(P_Data,C_User) {
    let requestStatus = {
        status : false
    };
    try {
        let db = yield coDal.getNoSqlDB();
        P_Data.startDate = new Date(P_Data.startDate);
        P_Data.endDate = new Date(P_Data.endDate);
       var obj_Struct = check(P_Data).matches({
            "startDate": "date",
            "endDate":    "date",
            "periodName":"string" 
        });
        if(obj_Struct){
            let validate = yield validatePeroidDate(P_Data,C_User);
             if(validate.status){
                    P_Data.userName = C_User.userName;
                    P_Data.O_Id = C_User.O_Id;
                    P_Data.Name = C_User.Name;
                    P_Data.Customers =[];
                    let insertData = yield db.PaymentPeroid.insert(P_Data);
                if(insertData.result.ok == 1){
                    requestStatus.status = true;
                    requestStatus.text = ' Peroid Created Sucessfully';   
                }else{
                    requestStatus.status = false;
                    requestStatus.reason = 'Somthing was wrong Errer!!!!!!';
                }
            }else{
                requestStatus.reason ='Invalid Selected Peroid';
            }
        }else{
            requestStatus.status = false;
            requestStatus.reason ='Invalid Data';
        }

    } catch (err) {
        console.error(err.stack);
        requestStatus.reason = err.stack;
    }
    return requestStatus;
});
let validatePeroidDate = co.wrap(function *(P_Data,C_User){
    let validate = {
        status : false
    };
    let db = yield coDal.getNoSqlDB();
    let startDate = yield db.PaymentPeroid.find({"O_Id":C_User.O_Id,
    "startDate":
    {
        $gte:P_Data.startDate,
        $lte:P_Data.endDate
    }
}).toArray();
if(startDate.length == 0){
let endDate = yield db.PaymentPeroid.find({"O_Id":C_User.O_Id,
"endDate":
{
    $gte:P_Data.startDate,
    $lte:P_Data.endDate
}
}).toArray();
if(endDate.length == 0){
    validate.status = true;
}
}else{
    validate.status = false;
}
    return validate;
});