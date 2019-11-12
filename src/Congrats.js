import React from "react";

/**
 * Functionsl react component for congratulatory message
 * @function
 * @returns {JSX.Element} - Rendered component (or null if `success` props is false)
 */

export default props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  }
  return <div data-test="component-congrats" />;
};
