import { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { getData } from './helpers/getData';
import { PictureItem } from './components/PictureItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from '@mui/lab/Masonry';
import { useBookStore } from './store/bookStore';

function App() {
	const [pictures, setPictures] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	let index = useRef(1);

	const val = useBookStore((state) => state.value);

	useEffect(() => {
		index.current = 1;
		setHasMore(true);

		const getPicturesByName = async () => {
			const { results } = await getData(
				`https://api.unsplash.com/search/photos?page=${index.current}&query=${val}`
			);

			setPictures(results);
		};

		getPicturesByName();
	}, [val]);

	const moreData = async () => {
		index.current = index.current + 1;

		if (index.current === 4) {
			setHasMore(false);
		}

		const { results } = await getData(
			`https://api.unsplash.com/search/photos?page=${index.current}&query=${val}`
		);

		setPictures(pictures.concat(results));
	};

	return (
		<>
			<Header />
			<main className='main'>
				{pictures.length === 0 ? (
					<p className='no-results'>No se encontraron resultados</p>
				) : (
					''
				)}

				<InfiniteScroll
					dataLength={pictures.length}
					next={moreData}
					hasMore={hasMore}
					loader={<h4 className='loading'>Loading...</h4>}
					style={{ overflow: 'hidden' }}>
					<Masonry
						columns={{ xs: 2, sm: 3, md: 4 }}
						spacing={{ xs: 2, sm: 2, md: 3 }}>

						{pictures.map((picture) => (
							<PictureItem
								key={picture.id}
								picture={picture}
							/>
						))}
						
					</Masonry>
				</InfiniteScroll>
			</main>
		</>
	);
}

export default App;
