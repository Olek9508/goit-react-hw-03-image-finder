import { Component } from "react";

export class ImageGalleryItem extends Component {
    contentForModal(id) {
    this.props.onClickItem(id)
}

    render() {
        const { id, webformatURL  } = this.props;
        return (
          <img src={webformatURL } alt="" onClick={()=>this.contentForModal(id)}/>
        )
    }
}