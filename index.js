
//Variables

var finalPrice = 0; //Variável do preço final. Ela está sendo declarada e atribuída um valor no escopo global para evitar o erro de NaN e de sempre que a função for chamada retornar ao valor de 0
var incrementId = 0;
var checkDeleted = [];
var inputCheckbox;
var lineOptions;

//Functions

function checkData() {
    var valueInputMatriculation = document.getElementById('matriculation').value; //Pega o valor do campo da matrícula
    var valueInputPassword = document.getElementById('senha').value; //Pega o valoro do campo da senha
    for (let index = 0; index < funcionarios.length; index++) { //Verifica os dados
        let aux = funcionarios[index]; //Variável auxiliar, que vai conter o objeto referente ao índice atual de index, que está dentro do array funcionarios
        if (aux['matriculation'] == valueInputMatriculation && aux['password'] == valueInputPassword) { //If que verifica se a matrícula e a senha existem dentro do objeto funcionário respectivo
            alert('Você conseguiu entrar no sistema com sucesso!\nAgora você vai ser redirecionado para outra página'); //Manda um alert dizendo que o login foi feito com sucesso
            return window.location.href = 'menu.html' //Retorna uma mudança na URL, redirecionando o usuário para o arquivo menu.html
        }
    }
    alert('Usuário ou senha errados'); //Exibe esse alert quando o if dentro do laço for falso. Se o if for verdadeiro, isso não vai ser executado, pois ele vai retornar o window.location.href = "menu.html" como última ação da função
}

function addProduct() {
    var tableBody = document.getElementById('table-body'); //Pega o tbody da table
    var inputId = document.getElementById('input-id').value; //Pega o value do input do ID
    for (let index = 0; index < produtos.length; index++) { //Laço que vai percorrer o array de produtos
        let aux = produtos[index]; //Mesma coisa que a outra variável auxiliar só que aplicando para produtos
        if (aux['id'] == inputId) { //Verifica se o id passado no input corresponde ao de algum produto
            tableBody.innerHTML = tableBody.innerHTML + '<tr class="newLine"><td> ' + incrementId + ' <input type="checkbox" id="nome' + incrementId + '" name="produtc" class="boxesSelect" value="select">' + '<label for="nome' + incrementId+ '">' + aux['name'] + '</label>' +'</td><td>' + aux['id'] + '</td><td>' + aux['price'] + '</td></tr>'; //Modifica o conteúdo do tbody, dizendo que ele vai ser o conteúdo anterior + uma nova linha com informações sobre o produto
            inputCheckbox = document.querySelectorAll('input[type="checkbox"]');
            lineOptions = document.querySelectorAll('.newLine');
            finalPrice = finalPrice + aux['price']; //Faz o cálculo do preço final (soma de todos os produtos adicionados)
            checkDeleted.push(false);
        }
    }
    incrementId++;
    /* var auxTableBody = tableBody.innerHTML; */ //Lembrar de testar uma coisa com isso
}

function buy() {
    document.getElementById('show-final-price').innerHTML = 'Preço final: ' + finalPrice; //Exibe o preço final
}

function deleteProduct() {
    for (let index = 0; index < incrementId; index++) {
        if (!checkDeleted[index]) {
            if (inputCheckbox[index].checked) {
                lineOptions[index].remove();
                //let position = lineOptions.indexOf(index);
                lineOptions.splice(index);
                console.log(lineOptions[3]);
                checkDeleted[index] = true;
                alert(checkDeleted);
            }
        }
    }
}