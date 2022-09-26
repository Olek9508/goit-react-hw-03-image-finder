import { Component } from "react";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {
    
      onOpenModal = (e) => {
    if (e.target !== e.currentTarget) {
      this.props.onClick();
    }
  };
    render() {
        const {images,onClickItem} = this.props
        return (
    <ul onClick={this.onOpenModal}>
        {images &&
          images.map((image) => (
            <li key={image.id}>
              <ImageGalleryItem {...image} onClickItem={onClickItem} />
            </li>
          ))}
    </ul>
        )
    }
}