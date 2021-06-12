import React from 'react' //importar react ALLLLLWAYS
import '../utils/CSS/Title.css'
import {Link} from "react-router-dom"

function Title() {
	return (
		<div className="Container_Title">
			<h1 id="PrincipalTitle">EXAMPLE WITH RICK AND MORTY</h1>
			<Link to="/contact">
				<button type="button">Go to Contact</button>
			</Link>
			<Link to="/">
				<button type="button">Go to Home</button>
			</Link>
		</div>
	)
}
export default Title