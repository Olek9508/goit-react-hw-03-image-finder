import { Component } from "react";

export class Modal extends Component{
    componentDidMount() { 
        window.addEventListener("keydown",this.onKeyDown)
    }
    
    componentWillUnmount() {
        window.removeEventListener("keydown",this.onKeyDown)
    }

    onKeyDown(event) {
        if (event.code === "Escape") {
                this.props.onBackdrop()
            }
    }

    onClickBackdrop(event) {
        if (event.target === event.currentTarget) {
            this.props.onBackdrop()
        }
    }

    render() {
    const { smallImage } = this.props;
        return (
    <div onClick={this.handleBackdropClick}>
        <div>
          <img src={smallImage} alt="" />
        </div>
    </div>
        )
    }
}