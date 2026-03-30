import React, { useEffect, useState } from "react";

const SHOW_AFTER_SCROLL_PX = 250;

const GoToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_SCROLL_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      className="go-to-top-btn"
      aria-label="Go to top"
      onClick={handleClick}
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </button>
  );
};

export default GoToTopButton;
