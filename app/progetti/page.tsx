"use client";

import "@/app/globals.scss";
import ProjectPreview from "@/components/atoms/project-preview/ProjectPreview";
import { projects } from '@/data/projects';
import { ProjectTypes, PROJECT_TYPE_LABELS } from "@/enums/projectTypes.enum";
import { useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";

/**
 * The projects page component.
 */
export default function ProjectsPage() {
  /** Search parameters from the URL. */
  const searchParams = useSearchParams();
  /** Category of projects to be filtered. */
  const searchTerm = searchParams.get("type");
  /** Filtered list of projects based on the search term, or all projects if no filter is applied. */
  const filteredProjects = searchTerm
    ? projects.filter(project => project.type === searchTerm)
    : projects;
  /** Page title: the filtered category label, or "Progetti" when no filter is applied. */
  const pageTitle = (searchTerm && PROJECT_TYPE_LABELS[searchTerm as ProjectTypes]) || "Progetti";

  return (
    <main className="main">
      <h1>{pageTitle}</h1>
      <div className='section'>
        <AnimatePresence mode="wait">
            {
              filteredProjects.map((project, index) => (
                <ProjectPreview
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  coverUrl={project.cover}
                />
              ))
            }
        </AnimatePresence>
      </div>
    </main>
  )
}