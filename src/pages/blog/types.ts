export interface PostProps {
  id: string;
  cover?: Cover;
  coverAlt?: string;
  coverInPost?: boolean;
  pubDate: Date;
  title: string;
  description?: string;
  showDescription?: boolean;
  horizontal?: boolean;
  video?: {
    youtube?: string;
    vk?: string;
  };
}
interface Cover {
  src: string;
  width: number;
  height: number;
  format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif";
}