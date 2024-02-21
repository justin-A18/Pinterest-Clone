import { Form } from './Form';
import { Bell, Logo, Message, User } from './Icons';

export const Header = () => {
	return (
		<header className='header flex-center'>
			<a href='#' className='header__logo'>
				<Logo />
			</a>

			<nav className='header__nav flex-center'>
				<ul className='nav__menu flex-center'>
					<li className='menu__items'>
						<a
							className='menu__links active'
							href='#'>
							Inicio
						</a>
					</li>
					<li className='menu__items'>
						<a
							className='menu__links'
							href='#'>
							Explorar
						</a>
					</li>
					<li className='menu__items'>
						<a
							className='menu__links'
							href='#'>
							Crear
						</a>
					</li>
				</ul>

				<Form />

				<ul className='nav__icons flex-center'>
					<li className='icons_items'>
						<a
							className='icons__links'
							href='#'>
							<Bell />
						</a>
					</li>

					<li className='icons_items'>
						<a
							className='icons__links'
							href='#'>
							<Message />
						</a>
					</li>

					<li className='icons_items'>
						<a
							className='icons__links'
							href='#'>
							<User />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
