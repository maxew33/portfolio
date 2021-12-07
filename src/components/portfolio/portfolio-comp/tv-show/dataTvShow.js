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
        txt: 'Cette animation a été réalisé dans le cadre d\'un challenge codepen où il fallait utiliser au mieux la propriété text-shadow sur le texte "Good morning friends". J\'ai décidé d\'en faire une enseigne lumineuse rappelant celles que l\'on peut voir dans les séries américaines.',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/OJjOOVZ'
    },
    {
        id: uuidv4(),
        name: 'Robocop',
        src: process.env.PUBLIC_URL + ' /video/defi-7.mp4',
        prez: '',
        txt: 'Une animation sur du svg (dessin vectoriel)',
        youtubeLink: 'https://youtu.be/CbWv29ar71c?t=683',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/zYZVdQV'
    },
    {
        id: uuidv4(),
        name: 'Un jour, un livre',
        src: process.env.PUBLIC_URL + ' /video/cpc-book-style.mp4',
        prez: '',
        txt: 'Une animation sur du svg (dessin vectoriel)',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/LYjKNVx'
    },
    {
        id: uuidv4(),
        name: 'Rick et Morty',
        src: process.env.PUBLIC_URL + ' /video/defi-5.mp4',
        prez: '',
        txt: 'Une animation sur du svg (dessin vectoriel)',
        youtubeLink: 'https://youtu.be/2ogH9PKILqY?t=339',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/QWpgyBQ'
    },
    {
        id: uuidv4(),
        name: 'Let\'s Party !',
        src: process.env.PUBLIC_URL + ' /video/cpc-knock-out.mp4',
        prez: '',
        txt: 'Une animation sur du svg (dessin vectoriel)',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/VwzqYJO'
    },
    {
        id: uuidv4(),
        name: 'silence, ça tourne',
        src: process.env.PUBLIC_URL + ' /video/defi-3.mp4',
        prez: '',
        txt: 'Une animation sur du svg (dessin vectoriel)',
        youtubeLink: 'https://youtu.be/tBN16ReqkUw?t=1148',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/rNyBYBK'
    },
    {
        id: uuidv4(),
        name: 'D\'art d\'art',
        src: process.env.PUBLIC_URL + ' /video/happy-halloween-1.mp4',
        prez: '',
        txt: 'Une animation sur du svg (dessin vectoriel)',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/eYEgzLo'
    },
    {
        id: uuidv4(),
        name: 'Halloween',
        src: process.env.PUBLIC_URL + ' /video/happy-halloween-2.mp4',
        prez: '',
        txt: 'Une animation sur du svg (dessin vectoriel)',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/XWaeRgL'
    },
    {
        id: uuidv4(),
        name: 'Ghostbusters',
        src: process.env.PUBLIC_URL + ' /video/cpc-bad-buttons.mp4',
        prez: '',
        txt: 'Une animation sur du svg (dessin vectoriel)',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/NWvRLPV'
    },
    {
        id: uuidv4(),
        name: 'ça',
        src: process.env.PUBLIC_URL + ' /video/cpc-input.mp4',
        prez: '',
        txt: 'Une animation sur du svg (dessin vectoriel)',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/bGrdxZj'
    },
    {
        id: uuidv4(),
        name: 'télématin',
        src: process.env.PUBLIC_URL + ' /video/hello.mp4',
        prez: '',
        txt: 'Une animation sur du svg (dessin vectoriel)',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/pen/eYEvNRW'
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
        prez: '',
        txt: 'Une animation sur du svg (dessin vectoriel)',
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/xxLzMoY'
    }
]

export default dataTvShow