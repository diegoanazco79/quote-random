export interface Quote {
  _id: string;
  author: string;
  authorSlug: string;
  dateAdded: string;
  dateModified: string;
  length: number;
  tags: string[];
  content: string;
}
