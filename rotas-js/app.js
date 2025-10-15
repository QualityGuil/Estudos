// Dados fictícios dos produtos
const PRODUCTS = {
    '1': { name: 'Teclado Mecânico', description: 'Teclado de alta performance com switches azuis.', price: 'R$ 350,00' },
    '2': { name: 'Mouse Gamer RGB', description: 'Mouse com 10.000 DPI e iluminação personalizável.', price: 'R$ 150,00' },
    '3': { name: 'Monitor Ultrawide 34"', description: 'Monitor com taxa de atualização de 144Hz para imersão total.', price: 'R$ 2.500,00' }
};

const contentArea = document.getElementById('content-area');

// Função para mostrar a Home
function renderHome() {
    contentArea.innerHTML = '<h2>Página Inicial</h2><p>Bem-vindo à nossa loja! Explore nossos produtos.</p>';
}

// Função para mostrar os detalhes de um produto
function renderProductDetail(productId) {
    const product = PRODUCTS[productId];

    if (product) {
        contentArea.innerHTML = `
            <h2>${product.name}</h2>
            <p><strong>Preço:</strong> ${product.price}</p>
            <p>${product.description}</p>
            <a href="#/home">Voltar para a lista</a>
        `;
    } else {
        contentArea.innerHTML = `
            <h2>Produto Não Encontrado</h2>
            <p>O produto com ID ${productId} não existe.</p>
        `;
    }
}

// Função principal de roteamento
function router() {
    // Pega a parte da URL após o '#' (ex: '#/produto/1')
    const path = window.location.hash; 

    // Se não houver hash, ou se for a home
    if (!path || path === '#/home') {
        renderHome();
        return;
    }

    // O path tem o formato: '#/tipo/id'
    // Ex: '#/produto/1' -> ['', 'produto', '1']
    const parts = path.split('/'); 
    const routeType = parts[1]; // 'produto'
    const routeId = parts[2];   // '1'

    if (routeType === 'produto' && routeId) {
        renderProductDetail(routeId);
    } else {
        // Rota de fallback para erros ou URLs desconhecidas
        contentArea.innerHTML = '<h2>Rota Desconhecida</h2><p>Por favor, utilize os links de navegação.</p>';
    }
}

// ---------------------
// Eventos
// ---------------------

// 1. Ouve o evento de mudança da hash na URL
// Este é o truque principal! Sempre que o usuário clica em um link com '#' 
// ou usa os botões Voltar/Avançar do navegador, este evento é disparado.
window.addEventListener('hashchange', router);

// 2. Chama a função router na primeira vez que a página carrega
// Isso garante que a página renderize o conteúdo correto se ela for carregada
// diretamente com uma hash (ex: 'pagina.html#/produto/2')
window.addEventListener('load', router);