import React from 'react'
import styled from 'styled-components'

// Skapa en styled-komponent som renderar en <button> tagg
const StyledButton = styled.button`
    background-color: #4caf50; /* Sätt bakgrundsfärgen till grön */
    border: none; /* Ta bort kanten */
    color: white; /* Sätt textfärgen till vit */
    padding: 15px 32px; /* Lägg till padding */
    text-align: center; /* Centrera texten */
    text-decoration: none; /* Ta bort understrykning */
    display: inline-block; /* Visa som blockelement */
    font-size: 16px; /* Sätt fontstorleken */
    margin: 4px 2px; /* Lägg till marginal */
    cursor: pointer; /* Visa en pekare när musen är över knappen */
    border-radius: 10px; /* Runda hörnen */
`

// Skapa en funktionell komponent som renderar vår styled-komponent
function Button() {
    return <StyledButton>Klicka här</StyledButton>
}

export default Button
