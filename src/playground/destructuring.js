// const person ={
//     name:'Marci',
//     age:24,
//     location:{
//         city:'Budapest',
//         temp:32
//     }
// }

// const {name,location}=person 
// console.log(name,location.city)

const book={
    title:'Ego',
    author:'Ryan',
    publisher:{
        
    }
}

const {name:publisherName='Self-Published'}=book.publisher

console.log(publisherName)