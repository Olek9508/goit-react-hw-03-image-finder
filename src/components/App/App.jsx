import { Component } from "react";
import { ToastContainer } from "react-toastify";
import { SearchBar } from "components/Searchbar/Searchbar";

export class App extends Component  {
  state = {
    itemName: "",
  }

  onSubmitForm = (itemName) => {
    this.setState({ itemName });
}

  render() {
    return (
       <div>
        <SearchBar onSubmit={this.onSubmitForm} />
        <ToastContainer autoClose={3000} />
    </div>
 
  );}

};


      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}


      // {this.state.loading&& <h1>Loading</h1>}
      // {this.state.hit && (<div>Here is hit</div>)}

//   componentDidMount() {
//     this.setState({loading:true})


//     fetch("https://pixabay.com/api/?q=cat&page=1&key=29244012-a3c66d184bfa690c232ef78cc&image_type=photo&orientation=horizontal&per_page=12")
//     .then(res => res.json())
//     .then(hit => this.setState({ hit }))
//     .finally(()=> this.setState({loading:false}))
// }



