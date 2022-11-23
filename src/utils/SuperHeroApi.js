const getUrlForSearchOnSuperheroName = value =>{
    const data = {
        //api_key: '10228487874639866',
        heroName: value
    };

    const querystring = Object.keys(data)
        .map(key => `search/${encodeURIComponent(data[key])}`)
        .join('/');

        return `https://superheroapi.com/api.php/10228487874639866/${querystring}`
};


export const getData = async heroName => {
    const url = getUrlForSearchOnSuperheroName(heroName);

    return fetch(url)
        .then(response => response.json())
        .then(json => {
            return json
        });
};