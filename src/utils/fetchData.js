export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '23ec6af8d8msha5d6875e16cec91p13fcb3jsn3775b21dc907',
        // 'X-RapidAPI-KEY': process.env.REACT_APP_RAPID_API_KEY
    },
};



export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
}