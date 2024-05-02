const fs = require('fs');

// //DOSYA YAZMAK
fs.writeFile('employees.json','{"name":"Canberk","salary":"2000"}','utf8',(err,data)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log("JSON OLUŞTURULDU");
    }
})
//DOSYA OKUMA
fs.readFile('employees.json','utf8',(err,data)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log(data);
        console.log("JSON  OKUNDU");
    }
});

//DOSYA'YA VERİ EKLEME
fs.appendFile('employees.json','\n{"name":"Ali","salary":"4500"}','utf8',(err,data)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log("DOSYA GÜNCELLENDİ");
    }
});

//DOSYA SİLME
fs.unlink('employees.json',(err,data)=>{
    if(err) console.log(err);
    console.log("DOSYA SİLİNDİ");
});

//KLASÖR OLUŞTURMA
// fs.mkdir('uploads/img',{recursive:true},(err)=>{
//     if(err) console.log(err);
//     console.log("KLASÖR OLUŞTURULDU");
// })

//KLASÖR SİLME

// fs.rmdir('uploads',{recursive:true},(err)=>{
//     if(err) console.log(err);
//     console.log("KLASÖR SİLİNDİİ");
// });