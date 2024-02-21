import PropTypes from 'prop-types';

export const PictureItem = ({ picture }) => {
	return (
		<article className='card'>
			<div className='image-container'>
				<img
					src={picture.urls.raw}
					alt={picture.alt_description}
				/>
				<p>{picture.alt_description}</p>

				<a
					className='card__guardar'
					href='#'>
					Guardar
				</a>
			</div>
			<footer className='card__footer'>
				<img
					src={picture.user.profile_image.small}
					alt={picture.user.first_name}
				/>

				<h3>
					{picture.user.first_name} {picture.user.last_name}
				</h3>
			</footer>
		</article>
	);
};

PictureItem.propTypes = {
	picture: PropTypes.object.isRequired,
};
