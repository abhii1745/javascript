function SetUsername(username){
    this.username = username

}

function createUser(username,email,passowrd){
    SetUsername.call(this,username)
    this.email = email
    this.passowrd  = passowrd
}
const abhishek = new createUser("abhishek","abhishek@gmail.com","456")
console.log(abhishek);
