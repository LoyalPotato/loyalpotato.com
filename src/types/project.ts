export interface ProjectFrontmatter {
  title: string;
  subtitle?: string;
  thumbnail?: string;
  publishDate: string;
  description: string;
  thumbnailAR?: "4-3" | "16-9";
}
