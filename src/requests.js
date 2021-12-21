import axios from 'axios';

const ACCESS_TOKEN = 4911377808896495;
const API_URL = `https://superheroapi.com/api/${ACCESS_TOKEN}`;

export const getBasicHeroInfoById = async id => {
    const { data: powerstats } = await axios.get(`${API_URL}/${id}/powerstats`);
    const { data: image } = await axios.get(`${API_URL}/${id}/image`);
    
    return { name: powerstats.name, powerstats, imgUrl: image.url };
}

export const searchHeroesByName = name => {
    return axios.get(`${API_URL}/search/${name}`);
}