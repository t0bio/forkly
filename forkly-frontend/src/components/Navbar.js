import './NavbarStyles.css'
import logo from './images/ForklyLogo.png'

function Navbar() {
	return (
		<nav className = "navbar">
			<div class = "topnav-left">
				<a href = "/Home" className = "site-title">
					<img src = {logo} alt = "Forkly Logo" width = "200"></img>
				</a>
			</div>
			<div class = "topnav-right">
				<a href = "/About" title = "Meet the team!">About</a>
				<a href = "/Contact" title = "Get in touch!">Contact</a>
			</div>
		</nav>
	)
}

export default Navbar