import './NavbarStyles.css'

function Navbar() {
	return (
		<nav className = "navbar">
			<a href = "/Home" className = "site-title">AngoeMango</a>
			<a href = "/Contact" title = "Get in touch!">Contact</a>
			<a href = "/About" title = "Personal Life and Biography">Angeleeca</a>
		</nav>
	)
}

export default Navbar