   const word="hello world"
   let str=word.split(" ")
 for (let i = 0; i < str.length; i++) {
            str[i]=str[i][0].toUpperCase()+str[i].substr(1);
  
   }
console.log(str);
