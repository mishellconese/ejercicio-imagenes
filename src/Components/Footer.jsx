import React from 'react' //importar react ALLLLLWAYS
import '../utils/CSS/Footer.css'
import uno from'../utils/images/3.jpg'

function Footer() {
	return (
		<div className="Container_Footer">
		<div className="Container_Text">
			<h1 id="textoFooter">
			Hola esté es el componente del Footer
			</h1>
			<p>
			Lorem ipsum dolor sit amet consectetur adipiscing elit euismod condimentum eleifend et, nibh nisi facilisis metus risus primis vehicula nam interdum. Facilisis ornare mus lobortis neque ad hac, molestie ut arcu himenaeos accumsan integer, pretium at aliquet diam scelerisque. Sem diam natoque egestas lobortis nisi tortor molestie ultrices, sagittis primis nec ante congue nulla dignissim massa felis nullam scelerisque faucibus erat rutrum posuere.
			</p>
		</div>
			<div className="Container_img">
			<img src={uno} alt=" es uno"/>
			</div>
			
		</div>
	)
}
export default Footer
