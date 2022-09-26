import PropTypes from "prop-types";

export const Button = ({ onPress }) => {
    return (
    <button type="button" onClick={onPress}>Load More</button>
    )
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
};