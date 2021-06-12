import React from 'react' //importar react ALLLLLWAYS
import '../utils/CSS/Todoestilo.css'
import dos from'../utils/images/4b49dce37565d28aaea0fe91e7c49c87.jpg'

function Todo() {
	return (
		<div className="Container_Cabecera">
			<div className="Container_Text">
				<h1 id="TextoCabecera">Part of header</h1>
				<p>
				Lorem ipsum dolor sit amet consectetur adipiscing elit euismod condimentum eleifend et, nibh nisi facilisis metus risus primis vehicula nam interdum. Facilisis ornare mus lobortis neque ad hac, molestie ut arcu himenaeos accumsan integer, pretium at aliquet diam scelerisque. Sem diam natoque egestas lobortis nisi tortor molestie ultrices, sagittis primis nec ante congue nulla dignissim.
				</p>
			</div>
			
			<div className="Container_img">
				<img id='image1' src={dos} alt=" es dos"/>
			</div>

		</div>
	)
}
export default Todo