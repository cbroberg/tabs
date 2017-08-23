import styled from 'styled-components'

export const Button = styled.button`
	border-radius: 4px;
	font-size: '18px';
	font-weight: 300;
	font-style: 'normal'; 
	/* color: 'white'; */
	background: ${(props) => props.disable ? '#EEEDED' : '#FF9600'};
	padding: '9px 20px 9px 15px';
	margin-right: 0.7rem;
	border: 1px solid black;
	cursor: ${(props) => props.disable ? 'not-allowed' : 'pointer'};  
	text-decoration: none;
	user-select: none;
`

export const Header = styled.h2`
	font-family: 'Source Sans Pro';
	font-weight: 300;
	font-style: 'italic';
`


/* className={isDisabled ? 'tab disabled' : isActive ? 'tab active' : 'tab'} */

