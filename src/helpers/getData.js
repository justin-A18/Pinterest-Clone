export const getData = async (url) => {
	try {
		const res = await fetch(url, {
			headers: {
				'Authorization': `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
			},
		});
		if (!res.ok) throw { status: res.status, statusText: res.statusText };
		const data = await res.json();
		return data;
	} catch (error) {
		const message = error.statusText || 'Ocurrió un error';
		console.log(`Error ${error.status}: ${message}`);
	}
};
