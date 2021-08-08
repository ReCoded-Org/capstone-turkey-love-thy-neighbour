import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: var(--dark-blue);
`;

function CustomButton({ children, className }) {
  return <Button className={className}>{children}</Button>;
}

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CustomButton.defaultProps = {
  className: true,
};

export default CustomButton;
