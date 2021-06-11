import {createGlobalStyle} from 'styled-components'
import primaryFont from './utils/fonts/Hind-Light.woff'


const GlobalStyles = createGlobalStyle`
.Container_Text{
	display: flex;
	flex-direction: column;
	width: 50%;
	margin: 10px;
	font-family: Impact;
	font-size: 30px;
}
.Container_Text p{
	font-family:'Hind';
}

.Container_img{
	display: flex;
	width: 50%;
	margin-right: 10px;
	height: 100%;
	justify-content: center;
	box-shadow: 

}

.Container_img img{
	width100%;
	height: auto;
}


@font-face{
	font-family: 'Hind';
	src: local('Hind'), url(${primaryFont}) format('woff');
	font-style: normal;
}
`;

export default GlobalStyles