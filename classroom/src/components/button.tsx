type Props = {
    name: string
    onClick?: () => void // O "?" quer dizer que não é obrigatório e o "void" quer dizer que não tem retorno
}

export function Button({name, onClick }: Props) {
    return <button onClick={onClick}>{name}</button>
}