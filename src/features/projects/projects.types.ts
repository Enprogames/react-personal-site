export type ProjectElement =
  | { type: 'paragraph'; content: string }
  | { type: 'points'; content: string[] }
  | { type: 'image'; content: string; alt?: string }
  | { type: 'code'; content: string; language?: string };

export interface Project {
  id: string;
  title: string;
  description?: string;
  keyPoints?: string[];
  technologies?: string[];
  thumbnail: string;
  landscapeImage: string;
  elements?: ProjectElement[];
  repositoryLink?: string;
}
