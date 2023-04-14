const loadQuote = () =>{
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => loadQuote2(data))
}
const loadQuote2 = man =>{
    const load = document.getElementById('quote');
    console.log(man)
    load.innerHTML= man.quote;
}
loadQuote();