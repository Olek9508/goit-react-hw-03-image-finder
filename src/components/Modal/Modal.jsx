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

    onBackdropClick(event) {
        if (event.target === event.currentTarget) {
            this.props.onBackdrop()
        }
    }

    render() {
    const { content } = this.props;
        return (
    <div onClick={this.onBackdropClick}>
        <div>
          <img src={content} alt="" />
        </div>
    </div>
        )
    }
}