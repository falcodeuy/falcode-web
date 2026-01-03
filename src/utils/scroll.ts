export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const handleScrollClick = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  sectionId: string,
  callback?: () => void
) => {
  e.preventDefault();
  scrollToSection(sectionId);
  callback?.();
};
