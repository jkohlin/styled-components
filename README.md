# Skapa komponenter med Styled-components och Props

Styled-components är ett kraftfullt bibliotek för att skapa komponenter av standard HTML-element med hjälp av CSS i JavaScript. Du kan också använda props för att dynamiskt ändra stilen på dina komponenter. Här är en steg-för-steg-guide:

## Steg 1: Installation

Först och främst måste du installera Styled-components i ditt projekt. Du kan använda npm eller yarn:

```bash
npm install styled-components
```

## Steg 2: Importera Styled-components

Importera Styled-components i den fil där du planerar att skapa dina komponenter:

```javascript
import styled from 'styled-components';
```

## Steg 3: Skapa en komponent

Skapa en ny komponent genom att använda `styled` funktionen vi just importerat följt av `.` och valfritt html-element. Här är ett exempel på en enkel knappkomponent:

```javascript
# components/styled-components
import styled from 'styled-components';

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
```

## Steg 4: Använd komponenten

Du kan nu använda din nya Style:ade knappkomponent i din applikation:

```jsx
import {Button} from './components/styled-components'

export default function App() {
  return (
    <div>
      <Button>Default Button</Button>
    </div>
  );
}
```

## Steg 5: Använd Props

För att använda props för att ändra stilen på din komponent, kan du enkelt göra det genom att interpolera props i ditt styled-component. Till exempel, om du vill ändra bakgrundsfärgen baserat på en `disabled` props vara eller inte vara (obs, icke standard attribut för html-element måste anges med $-tecken tex `<Button $primary disabled>`):

```javascript
import styled from 'styled-components'
export const Button = styled.button`
    background-color: ${(props) => (props.disabled ? '#eee' : props.$primary ? '#007bff' : '#ccc')};
    color: ${(props) => (props.disabled ? '#aaa' : props.$primary ? '#fff' : '#111')};
    padding: 10px 20px;
    border: none;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    border-radius: 5px;
`
```

Nu kan du använda din knappkomponent med olika bakgrundsfärger beroende på `$primary` och `disabled` prop:

```jsx
<Button primary>Primary Button</Button>
<Button disabled>Disabled Button</Button>
```

Detta är en grundläggande översikt över hur du skapar komponenter med Styled-components och använder props för att ändra deras utseende. Du kan utforska mer avancerade funktioner och stilmöjligheter i Styled-components när du känner dig bekväm med grunderna.