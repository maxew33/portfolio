import { v4 as uuidv4 } from 'uuid'

import portfolioBen from '../../assets/portfolio-ben.webp'
import carousel from '../../assets/carousel.webp'
import newsletter from '../../assets/newsletter.webp'
import cocktail from '../../assets/cocktail.webp'
import datePicker from '../../assets/date-picker.webp'
import productPage from '../../assets/product-page.webp'
import maxamp from '../../assets/maxamp.webp'

const portfolioContentPartII = [
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
    }
]

export default portfolioContentPartII