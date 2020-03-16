// trabalhando com AJAX (requisisção assincrona que evita ter que atualiazar a página para receber informações do servidor)

var xhr = new XMLHttpRequest(); //dá acesso as funcionalidades do ajax 

xhr.open('GET', 'https://api.github.com/users/AmandaCPA');
xhr.send(null);