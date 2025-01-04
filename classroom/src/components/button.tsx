// Aproveitando as propriedades do botão & adicionando outras
type Props = React.ComponentProps<"button"> & {
    name: string
    
    // O "?" quer dizer que não é obrigatório e o "void" quer dizer que não tem retorno
    //onClick?: () => void
}

export function Button({name, ...rest }: Props) {
    return <button {...rest}>{name}</button>
}