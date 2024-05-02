// console.log("1.görev");
// console.log("2.görev");
// console.log("3.görev");
// const funct1 = () => {
//     console.log("1.fonksiyon tamamlandı");
// }
// const funct2 = () => {
//     console.log("2.fonksiyon tamamlandı");
// }
// funct2();
// funct1();

// const funct1 = () => {
//     console.log("1.fonksiyon tamamlandı");
//     funct2();
// }
// const funct2 = () => {
//     console.log("2.fonksiyon tamamlandı");
//     funct3();
// }
// const funct3 = () => {
//     console.log("3.fonksiyon tamamlandı");
// }

// funct1()

// const funct1 = () => {
//     console.log("1.fonksiyon tamamlandı");
//     funct3();
// }
// const funct2 = () => {
//     console.log("2.fonksiyon tamamlandı");
// }
// const funct3 = () => {
//     console.log("3.fonksiyon tamamlandı");
//     funct2();
// }

// funct1()

//JS'NİN KENDİSİ HER ZAMAN SINGLE TREAD OLARAK ÇALIŞIR VE ASENKRON'DUR.

// let x = 5;
// console.log("1",x);
// setTimeout(() => {
//     x = x + 5;
//     //CALLBACK İŞLEMİNİ GÖRÜR.
//     console.log("2",x);
// }, 5000);

// x = x + 5;
// console.log("3",x);

const books = [
    {
        name: 'Book 1', author: 'Yazar 1'
    },
    {
        name: 'Book 2', author: 'Yazar 2'
    },
    {
        name: 'Book 3', author: 'Yazar 3'
    }
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    });
}

const addBook = (newBook , callback) => {
    books.push(newBook);
    callback();
}
//listBooks();

addBook({
    name: 'Book 4', author: 'Yazar 4'
},listBooks);
//PARAMETRE OLARAK FONKSİYON GÖNDERDİĞİMİZDE PARANTEZ AÇIP KAPATMAMIZA GEREK YOK.
//LIBUV ORTAMINDAN KAYNAKLI ASENKRON ÇALIŞIR.

