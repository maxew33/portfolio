import { v4 as uuidv4 } from 'uuid'

const dataTvShow = [
    {
        id: uuidv4(),
        name: 'The office',
        src: process.env.PUBLIC_URL + ' /video/ben-video.mp4',
        prez: 'Mon environnement de travail',
        txt: 'Une présentation de mon environnement de travail actuel : un PC portable HP OMEN 17\'\' (windows10, processeur intel I5, 8.0GB de RAM et une carte graphique intel hd graphics 630) avec un second écran samsung de 21\'\'',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: false
    },
    {
        id: uuidv4(),
        name: 'Friends',
        src: process.env.PUBLIC_URL + ' /video/cpc-text-shadow.mp4',
        prez: 'Animation en pur CSS',
        txt: 'L\'objectif de cette animation était d\'utiliser au mieux la propriété text-shadow sur le texte "Good morning friends". J\'ai décidé d\'en faire une enseigne lumineuse rappelant celles que l\'on peut voir dans les séries américaines. (Réalisé dans le cadre d\'un challenge codepen).',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/OJjOOVZ'
    },
    {
        id: uuidv4(),
        name: 'Robocop',
        src: process.env.PUBLIC_URL + ' /video/defi-7.mp4',
        prez: 'Enzo Ustariz présente...',
        txt: 'Enzo "le designer du web" Ustariz analyse mon code d\'une page de la société OCP introduisant son produit phare : l\'ED-209. (Réalisé dans le cadre d\'un défi discord).',
        youtubeLink: 'https://youtu.be/CbWv29ar71c?t=683',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/zYZVdQV'
    },
    {
        id: uuidv4(),
        name: 'Un jour, un livre',
        src: process.env.PUBLIC_URL + ' /video/cpc-book-style.mp4',
        prez: 'Un extrait de Mrs Dalloway.',
        txt: 'L\'objectif était de mettre en page un extrait de Mrs Dalloway. Et comment mettre en page un extrait de Virginia Woolf ? En en faisant un livre ! (Réalisé dans le cadre d\'un challenge codepen).',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/LYjKNVx'
    },
    {
        id: uuidv4(),
        name: 'Rick et Morty',
        src: process.env.PUBLIC_URL + ' /video/defi-5.mp4',
        prez: 'Enzo Ustariz contre attaque',
        txt: 'Enzo "le designer du web" Ustariz analyse mon code sur un slider en 3D utilisant l\'API de Rick et Morty. (Réalisé dans le cadre d\'un défi discord).',
        youtubeLink: 'https://youtu.be/2ogH9PKILqY?t=339',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/QWpgyBQ'
    },
    {
        id: uuidv4(),
        name: 'Staying alive',
        src: process.env.PUBLIC_URL + ' /video/cpc-knock-out.mp4',
        prez: 'Let\'s Party !',
        txt: 'La contrainte de ce challenge était de faire un knockout ou cutout : un texte qui révèle une image d\'arrière plan. (Réalisé dans le cadre d\'un challenge codepen)',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/VwzqYJO'
    },
    {
        id: uuidv4(),
        name: 'Volte-face',
        src: process.env.PUBLIC_URL + ' /video/defi-3.mp4',
        prez: 'Le retour d\'Enzo Ustariz ',
        txt: 'Enzo "le designer du web" Ustariz revient sur une de mes productions : le formulaire à onglets. (Réalisé dans le cadre d\'un défi discord)',
        youtubeLink: 'https://youtu.be/tBN16ReqkUw?t=1148',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/rNyBYBK'
    },
    {
        id: uuidv4(),
        name: 'D\'art d\'art',
        src: process.env.PUBLIC_URL + ' /video/happy-halloween-1.mp4',
        prez: 'Happy halloween !',
        txt: 'Une animation d\'halloween à base de svg laissant apparaître une chauve-souris qui s\'envole (désolé pour le spoil).',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/eYEgzLo'
    },
    {
        id: uuidv4(),
        name: 'Halloween',
        src: process.env.PUBLIC_URL + ' /video/happy-halloween-2.mp4',
        prez: 'Scary Halloween',
        txt: 'CSS art : une tête de mort dessiné en pur css.',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/XWaeRgL'
    },
    {
        id: uuidv4(),
        name: 'Ghostbusters',
        src: process.env.PUBLIC_URL + ' /video/cpc-bad-buttons.mp4',
        prez: 'Tic tac ghost',
        txt: 'Un jeu de morpion sur le thème d\'halloween, avec une IA presqu\'imbattable (Réalisé dans le cadre d\'un challenge codepen).',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/NWvRLPV'
    },
    {
        id: uuidv4(),
        name: 'ça',
        src: process.env.PUBLIC_URL + ' /video/cpc-input.mp4',
        prez: 'Ils flottent tous en-bas',
        txt: 'Un humble hommage à une histoire qui a traumatisé toute une génération (Réalisé dans le cadre d\'un challenge codepen).',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/bGrdxZj'
    },
    {
        id: uuidv4(),
        name: 'X-files',
        src: process.env.PUBLIC_URL + ' /video/404-error.mp4',
        prez: 'La page est ailleurs',
        txt: 'Nananananana nananananana nananananana nananananana',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/pen/eYEvNRW'
    },
    {
        id: uuidv4(),
        name: 'Chef Michel',
        src: process.env.PUBLIC_URL + ' /video/cpc-text.mp4',
        prez: 'A taaable !',
        txt: 'Mise en page d\'un menu de trois plats. En tirant sur la languette la description du plat apparait (Réalisé dans le cadre d\'un challenge codepen)',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/xxLzMoY'
    }
]

export default dataTvShow