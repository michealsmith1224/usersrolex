import "./search.styles.css"

export const Searchfield = ({placeHolder, handleChange}) =>{
    return (
        <div className="search">
          <input type="search" placeholder={placeHolder} onChange={handleChange}/>
        </div>

    )
}