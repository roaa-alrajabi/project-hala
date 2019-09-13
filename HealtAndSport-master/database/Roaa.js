
const db = require('../database');


let init = () => {
    console.log("welcome todatabase")
  }

  
  let signup=(email,password,name,callback)=>{
    db.login.create({
      email,
      password,
      name
    },(err,data)=>{
      if(data){
        callback(data)
        console.log("c",data)
      }
      else
      {
        callback(err)
      }
    })
  }


  let login=(input,callback)=>{
    console.log("Database", input)
    db.login.find(input,(err,data)=>{
      if(data)
      {console.log(data)
        callback(data)
      }
      else
      callback(err)
    })
  }
 
 
  
  

module.exports = { 


init,
signup,
login
}


