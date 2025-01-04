// Aproveitando as propriedades do botão & adicionando outras
type Props = React.ComponentProps<"button"> & {
    name: string
    
    // O "?" quer dizer que não é obrigatório e o "void" quer dizer que não tem retorno
    //onClick?: () => void
}

export function Button({name, onClick }: Props) {
    return <button onClick={onClick}>{name}</button>
}