import "./usercount.style.css"

export const Usercount = ({count}) => {
    return (
    <div className="count"><p>No of users: {count.length}</p></div>
     
    )

}