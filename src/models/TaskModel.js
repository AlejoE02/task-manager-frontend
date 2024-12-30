import PropTypes from "prop-types";

export const TaskPropType = PropTypes.shape({
  _id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  completed: PropTypes.bool,
  cretedAt: PropTypes.string,
});
