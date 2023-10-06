import logo from './logo.svg'
import './App.css'
import { Button, Flex } from './components/styled-components'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a className="App-link" href="https://styled-components.com/docs" target="_blank" rel="noopener noreferrer">
                    Styled Components Docs
                </a>
                <Flex $gap="8px" style={{ marginTop: '16px' }} $column>
                    <Button>default</Button>
                    <Button $primary>Primary</Button>
                    <Button $primary disabled>
                        primary och disabled
                    </Button>
                    <Button disabled>disabled</Button>
                </Flex>
            </header>
        </div>
    )
}

export default App
