import { Component } from "react";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";


export class ImageGallery extends Component {

    static propTypes = {
    onClick: PropTypes.func.isRequired,
    onClickItem: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
    
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