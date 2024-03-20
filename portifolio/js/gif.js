// Função para trocar a imagem quando o mouse estiver sobre ela
function trocarImagem(id, novoSrc) {
    var imagem = document.getElementById(id); // Obtém o elemento da imagem pelo ID
    imagem.addEventListener("mouseover", function() { // Adiciona um ouvinte de evento para o mouseover
        imagem.src = novoSrc; // Troca o src da imagem pelo novoSrc fornecido imediatamente
    });
    imagem.addEventListener("mouseout", function() { // Adiciona um ouvinte de evento para o mouseout
        imagem.src = "img/site.PNG"; // Retorna ao src original quando o mouse sai da imagem imediatamente
    });
}
// Chamar a função para trocar a imagem quando o mouse estiver sobre ela para gif1
trocarImagem("gif1", "./gifs/unknown_2024.03.18-23.06_1.gif");