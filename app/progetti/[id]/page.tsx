import { projects } from "@/data/projects";
import "../../globals.scss";
import classes from "./page.module.scss";
import CustomMasonry from "@/components/molecules/custom-masonry/CustomMasonry";
import BeforeAfterCarousel from "@/components/molecules/before-after-carousel/BeforeAfterCarousel";
import { PROJECT_TYPE_LABELS } from "@/enums/projectTypes.enum";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>
}

/**
 * Project Details Page Component
 * This component represents the details page for a specific project
 * based on the id provided in the URL.
 */
export default async function ProjectDetailsPage({ params }: Props) {
  /** Project ID string */
  const { id } = await params;
  /** Numeric Project ID */
  const numId = parseInt(id, 10);
  /** Find the project by ID */
  const project = projects.find(proj => proj.id === numId);

  if (!project) {
    notFound();
  }

  return (
    <main className="main">
      {/* Preview */}
      <div className="section">
        <div className={classes.projectPreviewContainer}>
          <img src={project.cover ?? ""} alt={project.title ?? ""} className={classes.projectPreviewImage} />
          <h1 className={classes.projectTitle}>{project.title}</h1>
          <div className={classes.overlay} />
        </div>
      </div>

      {/* Dettagli */}
      <div className="section">
        <h2>Dettagli</h2>
        <div className={classes.characteristicsContainer}>
          {project.location && <p><strong>Luogo: </strong>{project.location}</p>}
          <p><strong>Tipo: </strong>{PROJECT_TYPE_LABELS[project.type]}</p>
          {project.date && <p><strong>Data: </strong>{project.date}</p>}
        </div>
        {project.description && (
          <div className={classes.descriptionContainer}>
            <p>{project.description}</p>
          </div>
        )}
      </div>

      {/* Prima e dopo */}
      {project.beforeAfter && project.beforeAfter.length > 0 && (
        <div className="section">
          <h2>Prima e dopo</h2>
          <BeforeAfterCarousel pairs={project.beforeAfter} />
        </div>
      )}

      {/* Gallerie */}
      {project.galleries && project.galleries.length > 0 ? (
        project.galleries.map((gallery, i) => (
          <div className="section" key={i}>
            <h2>{gallery.title}</h2>
            <CustomMasonry images={gallery.images} />
          </div>
        ))
      ) : (
        <div className="section">
          <h2>Galleria</h2>
          <CustomMasonry images={project.collection ?? []} />
        </div>
      )}
    </main>
  )
}
