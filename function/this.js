const user={
    username:"Amratansh",
    age:21,
    msg:function(){
        console.log(`hello ${this.username}, Welcome to web!!!!!`)
        console.log(this);
    }
}
// user.username="sam"
// user.msg()

const one=function()
{
    var username="Amratansh"
    console.log(this.username);
    console.log(this);
}
one();