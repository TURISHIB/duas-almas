// Carrosel Automático
let index = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

setInterval(() => {
    index = (index + 1) % totalImages;
    document.querySelector('.carousel-images').style.transform = `translateX(-${index * 100}%)`;
}, 3000); // Alterna a cada 3 segundos

// Contador ao Vivo
const contador = document.getElementById('contador');
const dataAlvoInput = document.getElementById('data-alvo');

dataAlvoInput.addEventListener('change', () => {
    const dataAlvo = new Date(dataAlvoInput.value);

    // Verificação específica da data para mensagem personalizada
    if (dataAlvoInput.value === '2025-04-16') {
        contador.textContent = "Feliz 1 ano de nós dois!";
        return; // Sai da função para evitar sobreposição de mensagens
    }

    setInterval(() => {
        const agora = new Date();
        const diferenca = dataAlvo - agora; // Tempo restante
        const passado = agora - dataAlvo; // Tempo já passado

        // Cálculo de unidades de tempo
        const segundos = Math.abs(Math.floor((diferenca > 0 ? diferenca : passado) / 1000) % 60);
        const minutos = Math.abs(Math.floor((diferenca > 0 ? diferenca : passado) / (1000 * 60)) % 60);
        const horas = Math.abs(Math.floor((diferenca > 0 ? diferenca : passado) / (1000 * 60 * 60)) % 24);
        const dias = Math.abs(Math.floor((diferenca > 0 ? diferenca : passado) / (1000 * 60 * 60 * 24)) % 7);
        const semanas = Math.abs(Math.floor((diferenca > 0 ? diferenca : passado) / (1000 * 60 * 60 * 24 * 7)) % 4);
        const meses = Math.abs(Math.floor((diferenca > 0 ? diferenca : passado) / (1000 * 60 * 60 * 24 * 30.44)) % 12);
        const anos = Math.abs(Math.floor((diferenca > 0 ? diferenca : passado) / (1000 * 60 * 60 * 24 * 365.25)));

        // Mensagem dinâmica
        if (diferenca > 0) {
            contador.textContent = `Faltam ${anos} anos, ${meses} meses, ${semanas} semanas, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
        } else {
            contador.textContent = `Já se passaram ${anos} anos, ${meses} meses, ${semanas} semanas, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
        }
    }, 1000);
});
const emojiContainer = document.getElementById('emoji-container');
const emojis = ["❤️", "🇹🇩", "💓", "💖", "💗"]; // Emojis que caem

function createFallingEmoji() {
    const emoji = document.createElement('div');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.className = 'emoji';
    emoji.style.left = Math.random() * window.innerWidth + 'px'; // Posição horizontal aleatória
    emoji.style.animationDuration = Math.random() * 3 + 7 + 's'; // Duração aleatória da animação
    emoji.style.fontSize = Math.random() * 24 + 16 + 'px'; // Tamanho aleatório
    emojiContainer.appendChild(emoji);

    // Remove o emoji após a animação
    setTimeout(() => {
        emoji.remove();
    }, 5000); // Tempo deve coincidir com a duração da animação
}

// Cria emojis a cada 300ms
setInterval(createFallingEmoji, 300);

"❤️", "🇹🇩", "💓", "💖", "💗"