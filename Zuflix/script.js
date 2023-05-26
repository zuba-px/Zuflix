function funcao1() {
    let email = document.getElementById('mail').value;
    let senha1 = document.getElementById('senha').value;
    let usuario = "email@gamour.com";
    let usuarioSenha = "senha123";
    if (email == usuario & senha1 == usuarioSenha) {
        window.location.href = "file:///C:/Users/kaiqu/OneDrive/Área%20de%20Trabalho/Netlix/pagina.html";
    } else if (email == "" & senha1 == "") {
        alert('Preencha os campos');

    } else {
        alert('Verifique se o email ou a senha foram postos corretamente');
    }
}
