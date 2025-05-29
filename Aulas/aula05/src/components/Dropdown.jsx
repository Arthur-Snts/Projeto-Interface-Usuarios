import "./Dropdown.css"

export default function Dropdown (props) {

    const links = props.links
    const titulos = props.titulos

    return (
        <>
            <div className="dropdown-container">
                {titulos.map(titulo => (
                    <ul key={titulo}>
                    <li>
                        {titulo}
                        <ul>
                        {links.map(link => (
                            <li key={link}>{link}</li>
                        ))}
                        </ul>
                    </li>
                    </ul>
                ))}
            </div>
        </>
    )
}