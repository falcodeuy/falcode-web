export interface ProductCardProps {
  titleId: string;
  descriptionId: string;
  image: React.ReactNode;
  imageClassName: string;
  imagePosition?: "left" | "right";
  size?: "small" | "large";
  reversed?: boolean;
  link?: string;
}
