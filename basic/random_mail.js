let letters="abcdefghijklmnopqrstuvwxyz";
let first=" ";
// console.log(letters.length);
for(i=0;i<=9;i++){
    first+=letters[Math.floor(Math.random()*letters.length)]
}
mail=["@google.com","@yahoo.com","@gmail.com","@abc.com"]
let maiil=mail[Math.floor(Math.random()*mail.length)]
email=first+maiil;
console.log(email);
