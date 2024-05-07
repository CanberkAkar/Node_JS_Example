const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log("url", url);
    if (url === '/') {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>INDEX</h1>");
    }
    else if (url === '/iletisim') {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>ILETISIM</h1>");
    }
    else if (url === '/hakkimda') {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>HAKKIMDA</h1>");
    }
    // console.log(url);
    //REQUEST -RESPONSE DÖNGÜSÜ OLDUĞU İÇİN VE SİSTEMDEKİ FAVICON İÇİN DE İSTEK GÖNDERİLİYOR. TARAYICIDAN KAYNAKLI BİR DURUM.
    // console.log("Bir istek gönderildi");
    res.end();

});

const port = 5000
server.listen(port, () => {
    console.log(`Sunucu Port ${port} de başlatıldı`);
});