
import { Card } from "../card/card"
import "./cardlist.styles.css"

export const Cardlist = ({users}) => {
    return (
      <div className="cardlist">
        {
            users.map((user) => (
                <Card key={user.id} singleuser={user} />
            ))
        }

      </div>
    )
}