"use client";

import "@/app/globals.scss";
import ProjectPreview from "@/components/atoms/project-preview/ProjectPreview";
import { projects } from '@/data/projects';
import { useSearchParams } from "next/navigation";

/**
 * The projects page component.
 */
export default function ProjectsPage() {
  /** useSearchParams hook to access the query parameters. */
  const searchParams = useSearchParams();
  /** The search term for filtering projects. */
  const searchTerm = searchParams.get("type");
  /** Filtered projects based on the search term. */
  const filteredProjects = searchTerm ? projects.filter(project => project.type === searchTerm) : projects;

  /** Render */
  return (
    <main className="main">
        <h1>Progetti</h1>
        <div className='section'>
            {
              filteredProjects.map((project) => (
                <ProjectPreview key={project.id} title={project.title} coverUrl={project.cover} />
              ))
            }
        </div>
    </main>
  )
}