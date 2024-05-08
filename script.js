const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    const username = "seu_usuario";
    const password = "sua_senha";
    const apiURL = "endereço API";
    const basicAuthHeader = "Basic " + btoa(username + ":" + password);

    fetch(apiURL, {
        headers: {
            Authorization: basicAuthHeader,
        },
    })
        .then((response) => {
            response.json();
            console.log(response);
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.error("Error:", error));
});
