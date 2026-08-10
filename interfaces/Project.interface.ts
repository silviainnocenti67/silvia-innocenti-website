import { ProjectTypes } from '@/enums/projectTypes.enum';

/**
 * Coppia di immagini per la comparazione "prima / dopo".
 */
export interface BeforeAfterPair {
  /** Immagine "prima". */
  before: string;
  /** Immagine "dopo". */
  after: string;
}

/**
 * Galleria con titolo (es. "Esterni", "Interni").
 */
export interface ProjectGallery {
  /** Titolo della sezione. */
  title: string;
  /** Immagini della galleria. */
  images: string[];
}

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

  /** Description of the project (optional) */
  description?: string;

  /** Date of the project */
  date?: string;

  /** Location of the project */
  location?: string;

  /** Cover image URL of the project */
  cover?: string;

  /** Before/after comparisons (optional) */
  beforeAfter?: BeforeAfterPair[];

  /** Galleries split into sections (optional) */
  galleries?: ProjectGallery[];

  /** Simple collection of image URLs (optional) */
  collection?: string[];
}
