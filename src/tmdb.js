const API_KEY = '7cc863eaccaf5f853d06567d600eff0f';
const API_BASE = 'https://api.themoviedb.org/3'; 

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BRapi_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movies?with_genres=28&langugage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movies?with_genres=35&langugage=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movies?with_genres=27&langugage=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movies?with_genres=10749&langugage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movies?with_genres=99&langugage=pt-BR&api_key=${API_KEY}`)
            },
        ];
    }
}