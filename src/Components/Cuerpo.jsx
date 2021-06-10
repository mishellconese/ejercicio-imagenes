import React from 'react' //importar react ALLLLLWAYS
import '../utils/CSS/Cuerpo.css'
import Mishell from'../utils/images/2.jpg'

function Cuerpo() {
	return (
		<div className="Container_Cuerpo">
		<div className="Container_Text">
			<h1 id="textoCuerpo">
			Hola esté es el componente del Cuerpo
			</h1>
			<p>
			Lorem ipsum dolor sit amet consectetur adipiscing elit euismod condimentum eleifend et, nibh nisi facilisis metus risus primis vehicula nam interdum. Facilisis ornare mus lobortis neque ad hac, molestie ut arcu himenaeos accumsan integer, pretium at aliquet diam scelerisque. Sem diam natoque egestas lobortis nisi tortor molestie ultrices, sagittis primis nec ante congue nulla dignissim massa felis nullam scelerisque faucibus erat rutrum posuere.
			</p>
		</div>
			<div className="Container_img">
			<img src={Mishell} alt=" es Mishell"/>
			</div>

		</div>
	)
}
export default Cuerpo

