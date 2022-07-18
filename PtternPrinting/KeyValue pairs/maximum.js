function runProgram(input){
  input=input.trim().split("\n")
  var n=+input[0];
  var A=input[1].trim().split(" ").map(Number);
  //console.log(arr,n);  
  maximumElement(A,n)
}
function maximumElement(A,n){
    var obj={};
    for(var i=0;i<A.length;i++){
        if(obj[A[i]]==undefined){
            obj[A[i]]=1
        }
        else{
            obj[A[i]]=obj[A[i]]+1
        }
    }
   var max=-Infinity;
      var s=-1;
      for(var key in obj){
           if(obj[key]>max){
              max=obj[key];
              s=key;
          }
      }
      console.log(s);
}
if (process.env.USERNAME === "shake") {
  runProgram(`5
  0 2 0 6 9`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}