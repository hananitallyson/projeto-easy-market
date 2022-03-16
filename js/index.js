//Variables

var finalPrice = 0
var incrementId = 0
var inputCheckbox
var lineOptions
var arrayPrice = []
var verificarPrice = [false, false, false, false]

//Functions

function checkData() {
    var valueInputMatriculation = document.getElementById('matriculation').value
    var valueInputPassword = document.getElementById('senha').value
    for (let index = 0; index < funcionarios.length; index++) {
        let aux = funcionarios[index];
        if (aux['matriculation'] == valueInputMatriculation && aux['password'] == valueInputPassword) {
            alert('Você conseguiu entrar no sistema com sucesso!\nAgora você vai ser redirecionado para outra página')
            return window.location.href = 'menu.html'
        }
    }
    alert('Usuário ou senha errados')
}

function addProduct() {
    var tableBody = document.getElementById('table-body')
    var inputId = document.getElementById('input-id').value
    for (let index = 0; index < produtos.length; index++) {
        let aux = produtos[index]
        if (aux['id'] == inputId) {
            tableBody.innerHTML = tableBody.innerHTML + '<tr class="newLine"><td><input type="checkbox" id="nome' + incrementId + '" name="produtc" class="boxesSelect" value="select">' + '<label for="nome' + incrementId+ '">' + aux['name'] + '</label>' +'</td><td>' + aux['id'] + '</td><td>' + aux['price'] + '</td></tr>'
            inputCheckbox = document.querySelectorAll('input[type="checkbox"]')
            lineOptions = document.querySelectorAll('.newLine')
            finalPrice = finalPrice + aux['price']
            arrayPrice.push(aux['price'])
        }
        buy()
    }
    incrementId++;
}

function buy() {
    document.getElementById('show-final-price').innerHTML = 'Preço final: ' + finalPrice;
}

function deleteProduct() {
    for (let index = 0; index < lineOptions.length; index++) {
        let aux = produtos[index]
        if (inputCheckbox[index].checked) {
            console.log('Preço final inicial ' + index + ': ' + finalPrice)
            finalPrice = finalPrice - arrayPrice[index]
            console.log('Preço do item correspondente ' + index + ': ' + arrayPrice[index])
            console.log('Preço final ' + index + ': ' + finalPrice)
            console.log('\n --------------------- Próximo Item --------------------- \n');
            $(lineOptions[index]).remove()
        }
    }
    buy()
}