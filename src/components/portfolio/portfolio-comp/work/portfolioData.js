import { v4 as uuidv4 } from 'uuid'

import portfolioBen from '../../assets/portfolio-ben.webp'
import carousel from '../../assets/carousel.webp'
import newsletter from '../../assets/newsletter.webp'
import cocktail from '../../assets/cocktail.webp'

import datePicker from '../../assets/date-picker.webp'
import productPage from '../../assets/product-page.webp'
import maxamp from '../../assets/maxamp.webp'

const portfolioData =
    [
        [
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
        ],
        [
            {
                title: 'Maxamp',
                img: maxamp,
                gitLink: 'https://github.com/maxew33/maxamp',
                codePenLink: 'https://codepen.io/maxew33/full/XWRvWdY',
                directLink: false,
                prez: 'Intégration d\'un lecteur de musique très fortement inspiré de winamp.',
                txt: 'J\'ai codé le plus fidèlement possible une réplique de winamp avec ses fonctionnalités telles que : lecture, modification du volume, navigation dans la paylist, lecture aléatoire ...',
                id: uuidv4()
            },
            {
                title: 'Landing page',
                img: datePicker,
                gitLink: '',
                codePenLink: 'https://codepen.io/maxew33/full/NWgvVVa',
                directLink: false,
                prez: 'Landing page d\'une agence de voyage (fictive)',
                txt: 'Le but est de créer une page qui présente efficacement et élégamment le service proposé. Il y a également un effet de transition entre le light et le dark mode.',
                id: uuidv4()
            },
            {
                title: 'E-commerce',
                img: productPage,
                gitLink: '',
                codePenLink: 'https://codepen.io/maxew33/full/xxrGvOY',
                directLink: false,
                prez: 'Intégration d\'un site fictif de commerce en ligne.',
                txt: 'Site d\'e-commerce. Pour chaque produit, il y a une page de présentation avec 4 visuels, un effet loupe, une description du produit, les boutons d\'ajout et de réseaux sociaux.',
                id: uuidv4()
            },
            
            {
                title: 'TvShow',
                img: productPage,
                gitLink: '',
                codePenLink: 'https://codepen.io/maxew33/full/xxrGvOY',
                directLink: false,
                prez: 'Intégration d\'un site fictif de commerce en ligne.',
                txt: 'Site d\'e-commerce. Pour chaque produit, il y a une page de présentation avec 4 visuels, un effet loupe, une description du produit, les boutons d\'ajout et de réseaux sociaux.',
                id: uuidv4()
            }
        ]
    ]

export default portfolioData