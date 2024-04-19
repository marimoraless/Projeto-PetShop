function criarPet(nome, raca, presenca, castrado, cor, sexo, porte,) {
    return {
        nome: nome,
        raca: raca,
        castrado: castrado,
        cor: cor,
        sexo: sexo,
        porte: porte,
        presenca: presenca ? 'SIM ✔️ ' : 'NÃO ❌ '
    };
}

function criarCliente(nome, endereco, celular, cpf, email, dataNascimento, ) {
    return {
        nome: nome,
        endereco: endereco,
        celular: celular,
        cpf:cpf,
        email: email,
        dataNascimento: dataNascimento,

    };
}

function servicoHotelPet(cliente, pet) {
    console.log('Bem-vindo ao Pet Palace Hotel 🐶 \n');
    console.log(`Pet ${pet.nome} - Raça: ${pet.raca} | Está presente no Hotel? ${pet.presenca} | Tutor: ${cliente.nome} - 📞 ${cliente.celular} - End: ${cliente.endereco}. \n`);
}

function criarPetHotel() {
    const clientes = [];

    return {
        adicionarCliente: function(cliente) {
            clientes.push(cliente);
        },
        gerarJSON: function() {
            return JSON.stringify(clientes);
        }
    };
}

function agendarBanhoTosa(pet, data, horario) {
    console.log(`- Agendamento de Banho e Tosa para o Pet ${pet.nome} confirmado para o dia (${data} - ${horario}). \n`);
}

function reciclaPet() {
    console.log('♻️  Recicla Pet ♻️');
    console.log('Juntos podemos fazer mais, doe sua garrafa pet no Pet Palace e ajude um abrigo pet!\n');
}

const cliente1 = criarCliente("Mariana Morales", "Rua xxxxxx, 123", "(11) 9123-45678");

const pet1 = criarPet("Toby", "Pug", true);

const hotelPet = criarPetHotel();

hotelPet.adicionarCliente(cliente1);

servicoHotelPet(cliente1, pet1);

agendarBanhoTosa(pet1, "19/04/2024", "10:00");

reciclaPet();

const fs = require('fs');
const conteudoJSON = hotelPet.gerarJSON();
fs.writeFileSync('clientes.json', conteudoJSON);
