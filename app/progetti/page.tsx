"use client";

import "@/app/globals.scss";
import ProjectPreview from "@/components/atoms/project-preview/ProjectPreview";
import { projects } from '@/data/projects';
import { useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";

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

  return (
    <main className="main">
      <h1>Progetti</h1>
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