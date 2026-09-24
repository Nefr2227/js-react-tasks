import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
const Collapse = ({ text, opened = true }) => {
  const [isOpen, setIsOpen] = useState(opened);

  const toggle = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <p>
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#"
          role="button"
          aria-expanded={isOpen}
          onClick={toggle}
        >
          Link with href
        </a>
      </p>
      <div className={cn('collapse', { show: isOpen })}>
        <div className="card card-body">{text}</div>
      </div>
    </div>
  );
};

export default Collapse;
// END
