function addTokens(input, tokens){
    if (input.length < 6 ) {
        throw ("Input should have at least 6 characters");
    }

    if (typeof(input) != "string") {
        throw("Invalid input");
    }
    
    p = "...";
    let a;
    if (input.indexOf(p) == false) {
        a = input} 
    else{
        for (let index = 0; index < tokens.length; index++) {
            a =  input.replace(p, "${" + tokens[index].tokenName + "}");
        }
    }   
    return a;

}

const app = {
    addTokens: addTokens
}

module.exports = app;
