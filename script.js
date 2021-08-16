function generate(){
    var quotes = {
        "- Thomas Jefferson" : '"Nenhuma pessoa ignorante pode ser verdadeiramente livre."',
        "- Gustave de Molinari" : '"Assim como a guerra é a conseqüência natural do monopólio, a paz é a conseqüência natural da liberdade."',
        "- Albert Einstein" : '"Nossa tarefa deve ser nos libertar ... alargando nosso círculo de compaixão para abraçar todas as criaturas vivas e toda a natureza e sua beleza."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];
    
    document.getElementById("quote").innerHTML = 
    quote;
    document.getElementById("author").innerHTML = 
    author;
}