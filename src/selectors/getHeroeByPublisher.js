import { heroes } from '../data/heroes'

export const getHeroeByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics']

    //SINO ENCUENTRA NINGUNO DE LOS DOS SE EJECUTA ESTE CÓDIGO
    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto`)
    }

    return heroes.filter(hero => hero.publisher === publisher)

}
