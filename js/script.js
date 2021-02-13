let quotes = [
    {
        author: 'G.K. Chesterton',
        quote: 'The true soldier fights not because he hates what is in front of him, but because he loves what is behind him.'
    },
    {   
        author: 'Sun Tzu',
        quote: 'Appear weak when you are strong, and strong when you are weak.'
    },
    {   
        author: 'William Faulkner',
        quote: 'Get it down. Take chances. It may be bad, but it\'s the only way you can do anything really good.'
    },
    {   
        author: 'Jodi Picoult',
        quote: 'You can always edit a bad page. You can’t edit a blank page'
    },
    {   
        author: 'Ray Bradbury',
        quote: 'First, find out what your hero wants, then just follow him!'
    },
    {   
        author: 'Malcolm X',
        quote: 'If you have no critics, you’ll likely have no success.'
    },
    {   
        author: 'Margaret Atwood',
        quote: 'If I waited for perfection, I would never write a word.'
    },
    {   
        author: 'C.S. Lewis',
        quote: 'You can make anything by writing.'
    },
    {   
        author: 'Ernest Hemingway',
        quote: 'Prose is architecture, not interior decoration.'
    },
    {   
        author: 'Robert Benchley',
        quote: 'It took me fifteen years to discover I had no talent for writing, but I couldn\'t give it up because by that time I was too famous.'
    },
    {   
        author: 'Oscar Wilde',
        quote: 'Be yourself; everyone else is already taken.'
    },    

]

console.log(quotes.length);
createRandomQuote = () => {

    let randomQuote = Math.floor(Math.random() * (quotes.length));     
   

    document.getElementById("text").innerHTML = `&#8220;${quotes[randomQuote]['quote']}&#8221`;
    document.getElementById("author").innerHTML = `-${quotes[randomQuote]['author']}`;


}
