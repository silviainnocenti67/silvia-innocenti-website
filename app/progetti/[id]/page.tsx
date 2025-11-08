import { projects } from "@/data/projects";
import "../../globals.scss";
import classes from "./page.module.scss";
import CustomMasonry from "@/components/molecules/custom-masonry/CustomMasonry";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>
}

/**
 * Project Details Page Component
 * This component represents the details page for a specific project 
 * based on the slug provided in the URL.
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

  /**
   * Get the project type label.
   * @param type the type value.
   * @returns the corresponding label for the project type.
   */
  function getProjectTypeLabel(type: string) {
    switch (type) {
      case 'ristrutturazione':
        return 'Ristrutturazione';
      case 'nuova_costruzione':
        return 'Nuova Costruzione';
      case 'restauro':
        return 'Restauro';
      case 'interior_design':
        return 'Interior Design';
      default:
        return type;
    }
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

      {/* Description */}
      <div className="section">
        <h2>Dettagli</h2>
        <div className={classes.characteristicsContainer}>
          <p><strong>Data: </strong>{project.date}</p>
          <p><strong>Luogo: </strong>{project.location}</p>
          <p><strong>Tipo: </strong>{getProjectTypeLabel(project.type)}</p>
        </div>
        <div className={classes.descriptionContainer}>
          <p>{project.description}</p>
        </div>
      </div>

      {/* Gallery */}
      <div className="section">
        <h2>Galleria</h2>
        {/* Masonry Custom */}
        <CustomMasonry images={project.collection ?? []} />
      </div>
    </main>
  )
}