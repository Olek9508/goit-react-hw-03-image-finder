import { Component } from "react"
  import { toast } from 'react-toastify';

export class SearchBar extends Component {
    state = {
    itemName: '',
    }
    
    onNameChange =(event) =>{
        this.setState({ itemName: event.currentTarget.value.toLowerCase() })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        if (this.state.itemName.trim() === "") {
            toast.warn("Field is empty, please write smth");
            return;
        }
        this.props.onSubmit(this.state.itemName)
        this.setState({ itemName: "" })
    }

    render() {
    const { itemName } = this.state;
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
      onChange={this.onNameChange}
      value= {itemName}
    />
  </form>
</header>
        )
    }
}