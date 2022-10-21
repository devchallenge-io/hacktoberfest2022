

//criando função de login para autenticação daS ROTAS
function login(){
    var emailField = document.getElementById("email");
    var passwordField = document.getElementById("password");

    var email = emailField.value;
    var password = passwordField.value;
    
    axios.post('http://localhost:3000/auth', {email, password}).then((response) => {
        console.log("Logado com sucesso!");
        console.log(response.data.token);
        
        localStorage.setItem("token", response.data.token);
    }).catch((err) => {
        console.log(err + "Erro ao logar!");
    });
}


var axiosConfig = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
    }
}


function deleteGame(listItem){
    var id = listItem.getAttribute("data-id");
    axios.delete("http://localhost:3000/game/"+id).then(response => {
        alert("Game deletado!")
       window.location.reload();
    }).catch(err => {
        console.log(err);
    });
}


axios.get("http://localhost:3000/games",axiosConfig).then((response) => {
    var games = response.data;
    console.log(games);
    var lista = document.getElementById("games");

    games.forEach(game => {
        var item = document.createElement("li");
        
        item.setAttribute("data-id", game.id);
        item.setAttribute("data-titulo", game.titulo);
        item.setAttribute("data-ano", game.ano);
        item.setAttribute("data-valor", game.valor);

        item.innerHTML = game.id + " - " + game.titulo + " - " + "R$"  + game.valor + " -" + game.ano + " - ";
        
        var deleteBtn = document.createElement("button");
        
        deleteBtn.setAttribute("class", "bg-gradient-to-r from-purple-800 to-red-500 hover:from-blue-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out mb-5 p-1 ");
        
        deleteBtn.innerHTML = "Deletar";
        deleteBtn.addEventListener("click", () => {
            deleteGame(item);
        });

        item.appendChild(deleteBtn);        
        lista.appendChild(item);
        
    });


}).catch((error) => {
    console.log("Erro: ", error);
});

//cadastra um novo game
function cadastrarGame(){
    var tituloInput = document.getElementById("titulo");
    var anoInput = document.getElementById("ano");
    var valorInput = document.getElementById("valor");

    var game = {
        titulo: tituloInput.value,
        ano: anoInput.value,
        valor: valorInput.value
    }

    axios.post("http://localhost:3000/game", game, axiosConfig).then((response) => {
        if(response.status == 200){
            alert("Cadastrado com sucesso!");
            window.location.reload();
        }
    }).catch((error) => {
        console.log("Erro: ", error);
    });
}