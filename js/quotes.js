const quotes = [
{
        quote : "As long as there is life, there is hope",
        author : "Cicero",
    },
    {
        quote : "To live is a fierce battle",
        author : "Roman Laurent",
    },
    {
        quote: "If you walk 3 hours a day, you can circle the Earth in 7 years.",
        author : "Samuel Johnson",
    },
    {
        quote : "If you can always focus on the present, you will be happy.",
        author: "Paulo Coelho",
    },
    {
        quote: "In order to truly laugh, you must endure pain, and you must also learn to enjoy it",
        author: "Charlie Chaplin",
    },
    {
        quote: "When one door of happiness closes, the other opens. But often we look at the closed door for a long time and thus do not see the one that is open for us.",
        author: "Helen Keller",
    },
    {
        quote: "He who knows how to be content is truly rich, and he who is greedy is truly poor.",
        author : "Solon",
    },
    {
        quote : "Now is the time to work. Now is the time to fight. Now is the time to make me a better person. If I can't do it today, can I do it tomorrow?",
        author: "Thomas Akempis",
    },
    {
        quote : "I'm worried whether what I've seen with my own eyes is actually true, but what's more, it's what other people are saying behind my back. How can you believe this deeply?",
        author : "Myeongsimbogam",
    },
    {
        quote : "Regret for not doing the things you wanted to do rather than regretting things that have already been done.",
        author : "Talmud",
    },
    {
        quote : "Today I spent in vain is the day that those who died yesterday longed for. In just one day, everything that is human can be destroyed or revived.",
        author: "Sophocles",
    },
    {
        quote: "There are only two ways to live life. One is to think that there are no miracles at all, and the other is to think that everything is a miracle.",
        author: "Albert Einstein",
    },
    {
        quote : "Dream as if you will live your life, and live today as if you will die tomorrow.",
        author: "James Dean",
    },
    {
        quote: "Don't confuse one failure with eternal failure",
        author : "F. Scott Fitzgerald",
    },
    {
        quote : "If you can't avoid it, enjoy it",
        author: "Robert Elliott",
    },
    {
        quote : "1% chance, that's my way.",
        author : "Napoleon",
    },
    {
        quote : "Look after the pain left behind! After suffering, joy will surely permeate.",
        author: "Goethe",
    },
    {
        quote : "You must not have only your heart. You must practice it.",
        author : "Bruce Lee",
    },
    {
        quote : "If we do all we can, we will surprise ourselves.",
        author : "Edison",
    },
    {
        quote : "Do what you have to do. Everything is for the well-being of others, and at the same time especially for your own happiness.",
        author: "Tolstoy",
    },
]
const quote =  document.querySelectorAll('#quote div')[0];
const author = document.querySelectorAll('#quote div')[1];

const toDayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDayQuote.quote
author.innerText = toDayQuote.author

