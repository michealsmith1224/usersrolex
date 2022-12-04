import "./card.styles.css"

export const Card = (props) => {
    return (
        <div className="card-container">
        <img alt="users" src={`https://robohash.org/"${props.monster.id}?set=set5&size=180x180`}/>
        <h2>{props.monster.name}</h2>
        <small>{props.monster.email}</small>
        </div>

    )
} 