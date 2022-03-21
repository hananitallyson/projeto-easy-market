//Variables

var arrayPrice = []
var checkedRemove = []
var finalPrice = 0
var incrementId = 0
var inputCheckbox
var lineOptions



//Functions


    
    //Function that checks whether the login is valid or not

function checkData() {
    var valueInputMatriculation = document.getElementById('matriculation').value
    var valueInputPassword = document.getElementById('senha').value
    for (let index = 0; index < funcionarios.length; index++) {
        let aux = funcionarios[index];
        if (aux['matriculation'] == valueInputMatriculation && aux['password'] == valueInputPassword) {
            return window.location.href = 'home.html'
        }
    }
    alert('Usuário ou senha errados')
}

    //Function that deletes a product

function deleteProduct() {
    for (let index = 0; index < lineOptions.length; index++) {
        if (!checkedRemove[index]) {
            if (inputCheckbox[index].checked) {
                $(lineOptions[index]).css("display", "none")
                finalPrice = finalPrice - arrayPrice[index]
                checkedRemove[index] = true
                incrementId--
                console.log('Increment id no remover: ' + incrementId);
            }
        }
    }
}

    //Function that adds a line with the given product and its information

function addProduct() {
    var tableBody = document.getElementById('table-body')
    var inputId = document.getElementById('input-id').value
        for (let index = 0; index < produtos.length; index++) {
            let aux = produtos[index]
            if (aux['id'] == inputId) {
                finalPrice = finalPrice + aux['price']
                tableBody.innerHTML = tableBody.innerHTML + '<tr class="newLine"><td><input type="checkbox" id="nome' + incrementId + '" name="product" class="boxesSelect" value="select">' + '<label for="nome' + incrementId+ '">' + aux['name'] + '</label>' +'</td><td>' + aux['id'] + '</td><td>' + aux['price'] + '</td></tr>'
                inputCheckbox = document.querySelectorAll('input[type="checkbox"]')
                lineOptions = document.querySelectorAll('.newLine')
                arrayPrice.push(aux['price'])
                checkedRemove.push(false)
            }
        }

    incrementId++;
    console.log('Increment id no adicionar: ' + incrementId);
}

function makePurchase() {
    if (incrementId != 0) {
        alert('Sua compra foi realizada com sucesso!\nO preço total é: ' + finalPrice)
        alert('Esperamos que você tenha um bom dia e volte sempre :)')
        return location.reload()
    }
    else {
        alert('Insira algum produto para poder efetuar a compra!')
    }
}