// Meu conteudo principal de JS

function Interruptor(){
    let element = document.getElementById("imagem")
    let estado = element.src
    alert(estado)
    if(estado == "https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"){
        document.getElementById("imagem").src = "https://lh3.googleusercontent.com/ogw/ADGmqu-NHYegQID9VT8PGM48d_g9a3a5vFmpTc-ojzCe=s83-c-mo"
    }
    else {
        document.getElementById("imagem").src = "https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    }
}


