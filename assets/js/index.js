//Variables

var arrayPrice = []
var checkedRemove = []
var finalPrice = 0
var incrementId = 0
var inputCheckbox
var lineOptions
var sessionUser = 0

//Functions

    //Function that logs out

    function logout() {
        return window.location.href = 'index.html'
    }

    //Function that prints the user

    function printUser(sessionUser) {
        let nameUser = document.getElementById('nome-do-usuario')
        let matriculationUser = document.getElementById('matricula-do-usuario')
        let ageUser = document.getElementById('idade-do-usuario')
        let aux = funcionarios[sessionUser];
        nameUser.innerHTML = nameUser.innerHTML + ' ' + aux['user']
        matriculationUser.innerHTML = matriculationUser.innerHTML + ' ' + aux['matriculation']
        ageUser.innerHTML = ageUser.innerHTML + ' ' + aux['age']
    }

    //Function that shows the user of the respective session

    function respectiveUserSession() {
        if (sessionStorage.getItem('valueUser') == 0) {
            printUser(0)
        }
        else if (sessionStorage.getItem('valueUser') == 1) {
            printUser(1)
        }
        else if (sessionStorage.getItem('valueUser') == 2) {
            printUser(2)
        }
    }

    //Function that prints li of ul drinks

    function printListDrinks() {
        var ulBebida = document.getElementById('ul-bebidas')
        for (let index = 0; index < produtos.length; index++) {
            let aux = produtos[index]
            if (aux['type'] == 'Bebida') {
                ulBebida.innerHTML = ulBebida.innerHTML + '<li class="principal-section-lista-item"><strong>Nome: </strong>' + aux['name'] + ' <strong>Id: </strong> ' + aux['id'] + ' <strong>Preço: </strong>' + aux['price'] + '</li>'
            }
        }
    }

    //Function that prints li of ul foods

    function printListFoods() {
        var ulComida = document.getElementById('ul-comidas')
        for (let index = 0; index < produtos.length; index++) {
            let aux = produtos[index]
            if (aux['type'] == 'Comida') {
                ulComida.innerHTML = ulComida.innerHTML + '<li class="principal-section-lista-item"><strong>Nome: </strong>' + aux['name'] + ' <strong>Id: </strong> ' + aux['id'] + ' <strong>Preço: </strong> ' + aux['price'] + '</li>'
            }
        }
    }

    //Function that checks whether the login is valid or not

function checkData() {
    var valueInputMatriculation = document.getElementById('matriculation').value
    var valueInputPassword = document.getElementById('senha').value
    for (let index = 0; index < funcionarios.length; index++) {
        let aux = funcionarios[index];
        if (aux['matriculation'] == valueInputMatriculation && aux['password'] == valueInputPassword) {
            if (aux['matriculation'] == '010') {
                sessionStorage.setItem('valueUser', 2);
            }
            else if (aux['matriculation'] == '070') {
                sessionStorage.setItem('valueUser', 0);
            }
            else if (aux['matriculation'] == '090') {
                sessionStorage.setItem('valueUser', 1);
            }
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
                tableBody.innerHTML = tableBody.innerHTML + '<tr class="newLine"><td><input type="checkbox" id="nome' + incrementId + '" name="product" class="boxesSelect" value="select">' + '<label for="nome' + incrementId+ '">' + aux['name'] + '</label>' +'</td><td>' + aux['type'] + '<td>' + aux['id'] + '</td><td>' + aux['price'] + '</td></tr>'
                inputCheckbox = document.querySelectorAll('input[type="checkbox"]')
                lineOptions = document.querySelectorAll('.newLine')
                arrayPrice.push(aux['price'])
                checkedRemove.push(false)
            }
        }
    incrementId++;
}

    //Function that performs the purchase

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
