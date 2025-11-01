import { ProjectTypes } from "@/enums/projectTypes.enum";

/**
 * Interface representing a project.
 */
export interface Project {
  /** Identifier of the project */
  id: number;

  /** Type of the project */
  type: ProjectTypes;
  
  /** Title of the project */
  title: string;

  /** Description of the project */
  description: string;

  /** Date of the project */
  date?: string;

  /** Location of the project */
  location?: string;

  /** Cover image URL of the project */
  cover?: string;

  /** Collection of image URLs related to the project */
  collection?: string[];
}