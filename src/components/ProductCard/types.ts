export interface ProductCardProps {
  titleId: string;
  descriptionId: string;
  image: React.ReactNode;
  imagePosition?: "left" | "right";
  size?: "small" | "large";
  reversed?: boolean;
  link?: string;
}
