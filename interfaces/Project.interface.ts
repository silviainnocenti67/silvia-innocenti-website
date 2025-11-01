import { ProjectTypes } from "@/enums/projectTypes.enum";

export interface Project {
  id: number;
  type: ProjectTypes;
  title: string;
  description: string;
  date?: string;
  location?: string;
}