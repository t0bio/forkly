import './SearchbarStyles.css'

function Searchbar() {
    return (
        <div class = "searchbar">
            <input type = "text" placeholder = "Search for a recipe..."></input>
            <br></br><input type = "submit" value = "Let's go!"></input>
        </div>
    )
}

export default Searchbar