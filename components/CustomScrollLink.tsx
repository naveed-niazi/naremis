"use client";

import React from "react";
import {
  Link as ScrollLink,
  animateScroll as scroll,
  LinkProps,
} from "react-scroll";

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
}

function CustomScrollLink({ to, children }: CustomLinkProps) {
  return (
    <ScrollLink
      href={`#${to}`}
      to={to}
      smooth={true}
      duration={800}
      spy={true}
      offset={-20}
    >
      <span className='text-lg font-normal cursor-pointer opacity-90 hover:underline underline-offset-2'>
        {children}
      </span>
    </ScrollLink>
  ) as JSX.Element;
}

export default CustomScrollLink;
