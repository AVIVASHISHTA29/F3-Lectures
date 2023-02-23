console.log("hi caesar");

// const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// rot13
function encrypt(str) {
  //    for (var i = 0; i < str.length; i++) {

  //    }

  var encryptedStr = "";

  for (ch in str) {
    // if (alphabets.includes(ch)) {
    // }

    if (str.charCodeAt(ch) >= 65 && str.charCodeAt(ch) <= 90) {
      if (str.charCodeAt(ch) >= 78) {
        encryptedStr += String.fromCharCode(str.charCodeAt(ch) - 13);
      } else {
        encryptedStr += String.fromCharCode(str.charCodeAt(ch) + 13);
      }
    } else {
      //   console.log("not an alphabet", str[ch]);
      encryptedStr += str[ch];
    }
  }

  return encryptedStr;
}

// function rot13(str) {

//     const alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let ans="";
//       for(let i=0;i<str.length; i++){

//         const char=str[i];
//         if(char===" " || char==="!" || char==="?" || char==="."){
//           ans+=char;
//         }
//         else{
//              const val=alpha.indexOf(str[i]);
//              const new_val=(val+13)%26;
//              ans+=alpha[new_val];
//         }
//       }
//       return ans;
//     }

// Hello World
// Uryyb Jbeyq
// URYYB JBEYQ

console.log(encrypt("HELLO WORLD"));

var myArr = [{ marks: 90 }, { marks: 45 }, { marks: 54 }];

var sortedArray = myArr.sort((a, b) => {
  return a.marks - b.marks;
});

console.log(sortedArray);
