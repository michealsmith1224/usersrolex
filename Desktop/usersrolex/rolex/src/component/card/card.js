import "./card.styles.css"


export const Card = ({singleuser}) => {
    return (
        <div className="card-container">
            <img alt="users" src={`https://robohash.org/${singleuser.id}?set=set5&size=180x180`}/>

            <h4>Fullname:{singleuser.name}</h4>
            <small>Email:{singleuser.email}</small>
             

        </div>
    )
}