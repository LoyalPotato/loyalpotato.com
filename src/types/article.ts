
export interface ArticleFrontmatter {
  title: string;
  subtitle?: string;
  thumbnail?: string;
  publishDate: string;
  description: string;
  thumbnailAR?: "4-3" | "16-9";
  hideThumbnailInArticle?: boolean;
  draft?: boolean;
}
