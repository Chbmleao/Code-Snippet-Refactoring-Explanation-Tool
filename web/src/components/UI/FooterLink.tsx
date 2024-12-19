import React from 'react';

interface FooterLinkProps {
  href: string;
  text: string;
  icon: React.ReactNode;
  gap?: string;
}

/**
 * A functional component that renders a footer link with an optional icon.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.href - The URL that the link points to.
 * @param {string} props.text - The text to display for the link.
 * @param {React.ReactNode} [props.icon] - An optional icon to display next to the link text.
 * @param {string} [props.gap='gap-2'] - An optional CSS class to control the gap between the icon and the text.
 * @returns {JSX.Element} The rendered footer link component.
 */
const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  text,
  icon,
  gap = 'gap-2',
}) => {
  return (
    <a className={`container flex items-center py-1 ${gap}`} href={href}>
      {icon}
      <h4>{text}</h4>
    </a>
  );
};

export default FooterLink;
