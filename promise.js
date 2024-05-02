// const promise1= new Promise((resolve,reject)=>{
//       resolve("veriler alındı");
//       reject('BAĞLANTI HATASI');
// });


// //console.log(promise1);

// promise1.then(value =>{
//     console.log(value);
// }).catch(err=>{
//     console.log(err);
// });



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

const addBook = (newBook) => {
    const promise= new Promise((resolve,reject)=>{
        books.push(newBook);
        resolve(books);
        reject("EKLEME YAPILMADI");
    })

    return promise;
}
//listBooks();

addBook({
    name: 'Book 4', author: 'Yazar 4'
}).then(()=>{
    console.log("YENİ LİSTE");
    listBooks();
}).catch((err)=>{
    console.log(err);
})