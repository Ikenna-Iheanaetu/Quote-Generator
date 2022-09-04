// Vairables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// A constant variable which holds a new quote and the peron who said it
const quotes = [{
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela"
}, {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. ", 
    person: "Steve Jobs"
}, {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. ",
    person: "Oprah Winfrey"
}, {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. ",
    person: "James Cameron"
}, {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt"
}, {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    person: "Thomas A. Edison"
}, { 
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    person: "Robert Frost"
}, {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    person: "Dr. Seuss"
}, {
    quote: "The secret of success is to do the common thing uncommonly well. ",
    person: "John D. Rockefeller Jr."
}, {
    quote: "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. ",
    person: "Barack Obama"
}, {
    quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    person: "Winston S. Churchill"
}, {
    quote: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
    person: "Jim Rohn"
}, {
    quote: "The only place where success comes before work is in the dictionary.",
    person: "Vidal Sassoon"
}, {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: "Confucius"
}, {
    quote: "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be.",
    person: "Naruto Uzumaki"
}, {
    quote: "A dropout will beat a genius through hard work.",
    person: "Rock Lee"
}, {
    quote: "Knowing what it feels to be in pain, is exactly why we try to be kind to others.",
    person: "Jiaiya"
}, {
    quote: "If you dont share someone's pain, you can never understand them.",
    person: "Nagato Uzumaki"
}, {
    quote: "If you really want to be strong… Stop caring about what your surrounding thinks of you!",
    person: "Saitama"
}, {
    quote: "A person grows up when he's able to overcome hardships. Protection is important, but there are some things that a person must learn on his own. ",
    person: "Jiraiya"
}, {
    quote:"People's lives don't end when they die. It ends when they lose faith.",
    person:"Itachi Uchiha"
}, {
    quote:"It is not wise to judge others based on your own preconceptions and by their apperances.",
    person:"Itachi Uchiha"
}, {
    quote:"You focus on the trivial, and lose sight of what is most important, change is impossible in this fog of ignorance.",
    person:"Itachi Uchiha"
},{
    quote:"So tell me where should I go, to the left where nothing is right or to the right where nothing is left?",
    person:"Itachi Uchiha"
}, {
    quote:"People live their lives bound by what they accept as correct and true. That's how they define 'reality'. But what does it mean to be 'correct' or 'true'? Merely vague concepts... Their 'reality' may all be a mirage. Can we consider them to simply be living in their own world, shaped by their beliefs?",
    person:"Itachi Uchiha"
}, {
    quote:"Those who forgive themselves, and are able to accept their true nature... They are the strong ones!",
    person:"Itachi Uchiha"
}, {
    quote:" I don't even know if there is such a thing as justice in the world. We fight believing in our own justice. But if the enemy is doing the same thing, who's right?",
    person:"Shisui Uchiha"
}, {
    quote:"It's stupid to talk about things you're not. Be yourself and you'll be fine.",
    person:"Shikamaru Nara"
}, {
    quote:"It's not because I'm lazy, it's just because I don't care.",
    person:"Shikamaru Nara"
}, {
    quote:"In life, nothing good comes out of hurrying.",
    person:"Shikamaru Nara"
}, {
    quote:"Laziness is the mother of all bad habits. But ultimately she is a mother and we should respect her.",
    person:"Shikamaru Nara"
}, {
    quote:"As long as you do not give up, there will always be a salvation.",
    person:"Kakashi Hatake"
}, {
    quote:"In society, those who do not have many skills tend to complain more.",
    person:"Kakashi Hatake"
}, {
    quote:"The next generation will always surpass the previous one. It is one of the endless cycles of life.",
    person:"Kakashi Hatake"
}, {
    quote:"The very fact of living itself means you're always fighting for your life.",
    person:"Kakashi Hatake"
}, {
    quote:" Only because you face adversity and difficulties is no reason to surrender.",
    person:"Kakashi Hatake"
}, {
    quote:" Do you understand pain a little now? If you don't share someone's pain, you can never understand them.",
    person:"Nagato Uzumaki"
}, {
    quote:"If love is just a word, then why does it hurt so much if you realize it isn't there?",
    person:"Gaara"
}, {
    quote:"Things never go according to our comfort but run according to their schedule.",
    person:"Madara Uchiha"
}, {
    quote:"When you sign up for any sort of teamwork, the other person becomes your partner, and you are supposed to stand by each other's side no matter what.",
    person:"Madara Uchiha"
}, {
    quote:"The road to be the champions is the road of freedom.",
    person:"Madara Uchiha"
}, {
    quote:"A person is powerful not when his roots and foundations are strong, but his way of carrying out things is commendable and gets him success from it.",
    person:"Madara Uchiha"
}, {
    quote:"Wake up to reality! Nothing ever goes as planned in this world.",
    person:"Madara Uchiha"
}]

// The event Listener 

btn.addEventListener('click', function() {

    /*
    This generates a rounded random number
    And multipies it by the index number of the constant variable
    */

    let random = Math.floor(Math.random() * quotes.length);

    /*
    This changes the inner text of the quote and the person who said it
    It generates a random number and multiplies it by the lenght of the constant variable quotes
    Then select the quote and the person who said it and changes the inner text
    */

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})


