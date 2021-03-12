var express =require('express');
var app=express();


app.get("/", function(req,res){
    res.send("Hello there");
});



app.get("*",function(rep,res){
res.send("PAGE NOT FOUND")
})

app.listen(3000, function(){
    var host= this.address().address;
    var port = this.address().port;
    console.log("app is starting at "+host+":"+port); 
 });
  