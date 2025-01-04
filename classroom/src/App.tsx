import { Button } from "./components/button"

export function App() {
    return (
        <div>
            <Button name="Criar" onClick={() => alert("Criar")}/>
            <Button name="Edtar"/>
            <Button name="Remover"/>
        </div>
    )
}