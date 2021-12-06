import { v4 as uuidv4 } from 'uuid'

import portfolioBen from '../../assets/portfolio-ben.webp'
import carousel from '../../assets/carousel.webp'
import newsletter from '../../assets/newsletter.webp'
import cocktail from '../../assets/cocktail.webp'
import datePicker from '../../assets/date-picker.webp'
import productPage from '../../assets/product-page.webp'
import maxamp from '../../assets/maxamp.webp'

const portfolioContentPartI = [
    {
        title: 'Portfolio',
        img: portfolioBen,
        gitLink: 'https://github.com/maxew33/portfolio-photographer-priam',
        codePenLink: false,
        directLink: 'https://www.maxime-malfilatre.com/sandbox/BenPriam/',
        prez: 'Portfolio de Benedict Priam, photographe sur Bordeaux et sa région.',
        txt: 'Ce site réalisé avec React, présente un slider permettant d\'accéder à une galerie à défilement infini.',
        id: uuidv4()
    },
    {
        title: 'Carousel',
        img: carousel,
        gitLink: '',
        codePenLink: 'https://codepen.io/maxew33/full/QWpgyBQ',
        directLink: false,
        prez: 'Carousel avec une rotation en 3 dimensions.',
        txt: 'Il s\'agit d\'un carousel présentant les personnages principaux de la série animée Rick et Morty dont les informations ont été récupérées via l\'API de Rick et Morty',
        id: uuidv4()
    },
    {
        title: 'Newsletter',
        img: newsletter,
        gitLink: '',
        codePenLink: 'https://codepen.io/maxew33/full/oNWNxxr',
        directLink: false,
        prez: 'Copie d\'une newsletter d\'une célèbre marque d\'habillement.',
        txt: 'Cette newsletter a été codée en prenant en compte toutes les contraintes liées au mailing (imbrication de tableaux, css inline).',
        id: uuidv4()
    },
    {
        title: 'Recettes de cocktail',
        img: cocktail,
        gitLink: 'https://github.com/maxew33/cocktail',
        codePenLink: 'https://codepen.io/maxew33/full/YzVrWqB',
        directLink: false,
        prez: '627 recettes de cocktails avec et sans alcool.',
        txt: 'Catalogue de cocktails issu de l\'API TheCocktailDB. Une transition circulaire permet de passer de liste des cocktails à la recette du cocktail selectionné.',
        id: uuidv4()
    }
]

export default portfolioContentPartI