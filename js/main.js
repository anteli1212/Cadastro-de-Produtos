let users = []

const addUserButton = document.querySelector("#AddButton");
const searchUserButton = document.querySelector("#SearchButton");

addUserButton.addEventListener("click", (e) =>{
    e.preventDefault();

    const nameValue = document.querySelector("#Username").value;
    const emailValue = document.querySelector("#Email").value;
    const passwordValue = document.querySelector("#Password").value;

    if(nameValue === "" || emailValue === "" || passwordValue === ""){
        ShowMessage("#Message1", "Por favor, insira todos os dados", 245, 89, 66);
        return;
    }

    const user ={
        codigo: users.length,
        username: nameValue,
        email: emailValue,
        password: passwordValue,
    }

    document.querySelector("#Username").value = "";
    document.querySelector("#Email").value = "";
    document.querySelector("#Password").value = "";

    ShowMessage("#Message1", `Usuário (id: ${users.length}) adicionado!`, 198, 245, 66);

    users.push(user);
});

searchUserButton.addEventListener("click", (e) =>{
    e.preventDefault();

    const Cards = document.querySelector("#Cards");

    const searchValue = document.querySelector("#SearchName").value;

    if(users.length == 0){
        ShowMessage("#Message2", "Por favor, insira usuários", 245, 89, 66);
        return;
    }

    Cards.innerHTML = "";

    if(searchValue === ""){
        users.forEach((item) => {
            const card = document.createElement("li");

            card.classList = "User";
            card.innerHTML = `<p>Id: ${item.codigo}</p><p>Username: ${item.username}</p><p>Email: ${item.email}</p><p>Password: ${item.password}</p>`;

            Cards.appendChild(card);
        })
        return;
    }

    users.forEach((item) => {
        if(item.username.substring(0, searchValue.length).toUpperCase() == searchValue.toUpperCase()){

            const card = document.createElement("li");

            card.classList = "User";
            card.innerHTML = `<p>Id: ${item.codigo}</p><p>Username: ${item.username}</p><p>Email: ${item.email}</p><p>Password: ${item.password}</p>`;

            Cards.appendChild(card);
        }
    })
});

function ShowMessage(id, message, red, green, blue){
    document.querySelector(id).textContent = message;
    document.querySelector(id).classList = "Message"
    document.querySelector(id).style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    setTimeout(() =>{
        document.querySelector(id).textContent = "";
        document.querySelector(id).classList = ""
    }, 3000)
}