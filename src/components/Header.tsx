import { PropsWithChildren, ReactNode } from "react";

// props for header
type HeaderProps = PropsWithChildren<{
  image: { src: string; alt: string };
}>;

/**
 * Header for the goals application
 * @function
 * @param {image} - image details containing a 'src' and an 'alt' description
 * @return {tsx}
 */
function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img src={image?.src} alt={image?.alt} />
      {children}
    </header>
  );
}

export default Header;
