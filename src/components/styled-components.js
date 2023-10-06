import styled from 'styled-components'
function reactStyles(style) {
    let styles = ''
    for (const [key, value] of Object.entries(style)) {
        styles += `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`
    }
    return styles
}
export const Button = styled.button`
    background-color: ${(props) => (props.disabled ? '#eee' : props.$primary ? '#007bff' : '#ccc')};
    color: ${(props) => (props.disabled ? '#aaa' : props.$primary ? '#fff' : '#111')};
    padding: 10px 20px;
    border: none;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    border-radius: 5px;
`
export const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.$column ? 'column' : 'row')};
    gap: ${(props) => props.$gap};
    /*Lite mer avancerat exempel. Här tar vi in en React-style-prop {backgroundColor:'#ee77dd', marginTop:'12px'} och loopar igenom*/
    ${(props) => reactStyles(props.style)}
`
