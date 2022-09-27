import { Component } from "react"
import PropTypes from "prop-types";
import { SearchBarStyled, SearchForm, SubmitBtn, SearchInput, SearchFormButtonLabel } from "./SearchBar.styled";
import { FaSearch } from "react-icons/fa"



export class SearchBar extends Component {
    state = {
    searchQuery: '',
    }

    static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
    
    onChange =(event) =>{
        this.setState({ searchQuery: event.currentTarget.value.toLowerCase() })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
      if (this.state.searchQuery.trim() === "") {
          alert("Please write anything in the field, to start the searching")
            return;
        }
        this.props.onSubmit(this.state.searchQuery)
        this.setState({ searchQuery: "" })
    }

    render() {
    const { searchQuery } = this.state;
        return (
          <SearchBarStyled>
    <SearchForm  onSubmit={this.onFormSubmit}>
    <SubmitBtn type="submit"> <FaSearch/>
    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
    </SubmitBtn>

    <SearchInput
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos..."
      onChange={this.onChange}
      value= {searchQuery}
    />
              </SearchForm>
</SearchBarStyled>
        )
    }
}