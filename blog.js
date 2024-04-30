//SIMPLE ASYNC-AWAIT EXAMPLE
const arguments = process.argv.slice(2);

const blog = [
    {
        title: 'Text-1', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    },
    {
        title: 'Text-2', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    },
    {
        title: 'Text-3', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    }
];

const listBlog = () => {
    blog.map(blog => {
        console.log(blog.title, '--', blog.text);
    });
}
const addBlogText = (text) => {
    const promise = new Promise((resolve, reject) => {
        blog.push(text);
        resolve("EKLEME YAPILDI");
    })
    return promise;
}

async function showBlog(title, text) {
    try {
        console.log(text, "textt");
        console.log(title, "title");
        await addBlogText({
            title: title, text: text
        });
        listBlog();
    } catch (error) {
        console.log(error);
    }

}
showBlog(arguments[0],arguments[1]);