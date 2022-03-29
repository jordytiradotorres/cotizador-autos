import React, { useRef } from 'react';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const linkProtectRef = useRef();
  const linkEncircleRef = useRef();
  const linkBetterRef = useRef();

  useEffect(() => {
    if (location.pathname === '/assured') {
      linkProtectRef.current.classList.add('activated');
      linkEncircleRef.current.classList.remove('activated');
      linkBetterRef.current.classList.remove('activated');
    }
    if (location.hash === '#encircle') {
      linkEncircleRef.current.classList.add('activated');
      linkProtectRef.current.classList.remove('activated');
      linkBetterRef.current.classList.remove('activated');
    }
    if (location.hash === '#better') {
      linkBetterRef.current.classList.add('activated');
      linkProtectRef.current.classList.remove('activated');
      linkEncircleRef.current.classList.remove('activated');
    }
  });

  return (
    <ul className="addOrRemove__list">
      <li className="addOrRemove__item">
        <NavLink
          to="/assured"
          className="addOrRemove__link activated"
          ref={linkProtectRef}
        >
          Protege a tu auto
        </NavLink>
      </li>
      <li className="addOrRemove__item">
        <NavLink
          to="#encircle"
          className="addOrRemove__link"
          ref={linkEncircleRef}
        >
          Protege a los que te rodean
        </NavLink>
      </li>
      <li className="addOrRemove__item">
        <NavLink to="#better" className="addOrRemove__link" ref={linkBetterRef}>
          Mejora tu plAN
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
