var user = {
    saveUser : function(req, res){
        var missingFields = user.validateUser(req.body);
        if(missingFields.length === 0){
            if(req.body.susbcribe){
                var resString = "Hello " +  req.body.fname + " " + req.body.lname + ", Thank you for signing up. Your account is now created.";
                resString += " You would be receiving our periodic newletters to your email: " + req.body.email;
                res(null, resString);
              }else{
                var resString = "Hello " +  req.body.fname + " " + req.body.lname + ", Thank you for signing up. Your account is now created.";
                res(null, resString);
              } 
        }else{
            console.log(missingFields);
            var resString = "Please enter " + missingFields.join(",");
            res(null, resString);
        }
              
    },

    validateUser : function(userData){
        var mandoryFields = ['fname', 'lname', 'email', 'pwd'];
        var mappingFields = {
            "fname" : "First Name",
            "lname" : "Last Name",
            "email" : "Email",
            "pwd" : "Password"
        }
        var missingFields = [];
        for(var i=0; i < mandoryFields.length; i++){
            console.log(userData[mandoryFields[i]]);
            if(!userData[mandoryFields[i]]){
                missingFields.push(mappingFields[mandoryFields[i]]);
            }
        }
        return missingFields;
    }
}

module.exports = user