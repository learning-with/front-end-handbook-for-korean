import * as React from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div>
      <div onClick={toggleMenu}>메뉴바</div>
      {isMenuOpen && (
        <div className="bg-blue">
          <a href="/contents/overview-of-field-of-work">개요</a>
        </div>
      )}
    </div>
  );
}
