const API_KEY = "eo66UhWn1AMWl7V8m2IPaX96Yoza4jhc";
const NUMERO = 10;

export const getGifs = async (category) => {
	const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${NUMERO}&api_key=${API_KEY}`;

	const resp = await fetch(URL);
	const { data } = await resp.json();

	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
		};
	});
	return gifs;
};
