import svg from "../../Images/public/icons.svg";
import PropTypes from 'prop-types';

const Icon = ({ id, style, width, height }) => {
  return (
    <svg width={width} height={height} style={style}>
      <use href={`${svg}#${id}`} />
    </svg>
  );
};

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  style: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Icon;