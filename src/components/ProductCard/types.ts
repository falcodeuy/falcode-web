export interface ProductCardProps {
  titleId: string;
  descriptionId: string;
  image: React.ReactNode;
  imagePosition?: "left" | "right";
  size?: "small" | "large";
  imageClassName?: string;
  reversed?: boolean;
  link?: string;
}
