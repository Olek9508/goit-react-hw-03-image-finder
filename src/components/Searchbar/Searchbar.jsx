import { Component } from "react"

export class SearchBar extends Component {
    state = {
    searchQuery: '',
    }
    
    onChange =(event) =>{
        this.setState({ searchQuery: event.currentTarget.value.toLowerCase() })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        if (this.state.searchQuery.trim() === "") {
            alert("Field is empty, please write smth");
            return;
        }
        this.props.onSubmit(this.state.searchQuery)
        this.setState({ searchQuery: "" })
    }

    render() {
    const { searchQuery } = this.state;
        return (
<header className="searchbar">
    <form className="form" onSubmit={this.onFormSubmit}>
    <button type="submit" className="button">
    <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.onChange}
      value= {searchQuery}
    />
  </form>
</header>
        )
    }
}