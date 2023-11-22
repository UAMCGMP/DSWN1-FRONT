import axios from "axios";

const nomesDeCachorros = [
  'Buddy',
  'Daisy',
  'Rocky',
  'Lola',
  'Zeus',
  'Lily',
  'Milo',
  'Sadie',
  'Leo',
  'Zoe',
  'Coco',
  'Max',
  'Bailey',
  'Sophie',
  'Charlie',
  'Ruby',
  'Tucker',
  'Lucy',
  'Oliver',
  'Rosie',
  'Bentley',
  'Chloe',
  'Winston',
  'Molly',
  'Bear',
  'Mia',
  'Teddy',
  'Luna',
  'Oscar',
  'Zara',
  'Riley',
  'Lulu',
  'Cody',
  'Duke',
  'Nala',
  'Jackson',
  'Emma',
  'Baxter',
  'Ivy',
  'Gus',
  'Hazel',
  'Cooper',
  'Roxy',
  'Louie',
  'Maddie',
  'Sasha',
  'Koda',
  'Lola',
  'Olive',
];

export function getNomeCachorros(){
  return nomesDeCachorros[Math.floor(Math.random() * (nomesDeCachorros.length-1 + 1))]
}


const bioCachorros = [
  "Olá, sou um cachorro amigável e brincalhão que adora correr no parque e fazer novos amigos.",
  "Oi, sou uma cachorra adorável que ama receber carinho e está sempre pronta para um passeio descontraído.",
  "E aí, galera? Sou um cachorro leal e protetor. Adoro brincar de buscar e fazer longas caminhadas.",
  "Oi, sou uma cachorra cheia de personalidade e adoro cochilar no sofá depois de um dia agitado.",
  "Oi, sou um cachorro alegre e curioso. Sempre pronto para explorar novos lugares e fazer truques fofos.",
  "Oi, sou uma cachorra super simpática e amorosa. Adoro abraços e fazer novos amigos peludos.",
  "E aí, pessoal! Aqui é um cachorro energético que adora correr e praticar esportes ao ar livre. Vamos nos exercitar juntos?",
  "Olá, sou uma cachorra fofa e peluda. Adoro brincar de esconde-esconde e tenho um olhar irresistível.",
  "Oi, sou um cachorro animado e cheio de pintas. Adoro ser o centro das atenções e brincar de bolinha.",
  "Oi, pessoal! Aqui é um cachorro super carismático que adora fazer amigos e está sempre em busca de novas aventuras.",
];

export function getBioCachorros(){
  return bioCachorros[Math.floor(Math.random() * (bioCachorros.length-1 + 1))]
}



export async function getphotosCachorros() {
   axios.get('https://dog.ceo/api/breeds/image/random').then(
    response => {
      return response.data.message
    }).catch(err => {
      return 'https://images.dog.ceo/breeds/malamute/n02110063_13228.jpg'
    })
}

export function getAge(){
  return Math.floor(Math.random() * (10 + 1))
}

export function getSize(){
  const sizes = ["small", "medium", "large"]
  return sizes[ Math.floor(Math.random() * (sizes.length-1 + 1))]
}


