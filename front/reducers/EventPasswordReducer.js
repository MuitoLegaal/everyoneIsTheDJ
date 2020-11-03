export default function(password="", action){
    if(action.type === "pass") {
        var passwordCopy = password;
        passwordCopy = action.password;
        return passwordCopy;
    }else{
        return password;
    }
}