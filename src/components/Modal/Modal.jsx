import { Component } from "react";
import PropTypes from "prop-types";

export class Modal extends Component{
  static propTypes = {
    onBackdrop: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
  };

    componentDidMount() { 
        window.addEventListener("keydown",this.onKeyDown)
    }
    
    componentWillUnmount() {
        window.removeEventListener("keydown",this.onKeyDown)
    }

  onKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onBackdrop();
    }
  };

    onBackdropClick(event) {
        if (event.target === event.currentTarget) {
            this.props.onBackdrop();
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