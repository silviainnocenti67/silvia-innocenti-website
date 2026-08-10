/**
 * Categorie dei progetti (come definite da Silvia nel documento INFO per sito).
 */
export enum ProjectTypes {
  RISTRUTTURAZIONE_RESTAURO = 'ristrutturazione_restauro',
  NUOVA_COSTRUZIONE = 'nuova_costruzione',
  ARCHITETTURA_INTERNI_ARREDO = 'architettura_interni_arredo',
  PROGETTI_VARI_CONCORSI = 'progetti_vari_concorsi',
  ALLESTIMENTI = 'allestimenti',
  WORK_IN_PROGRESS = 'work_in_progress',
}

/**
 * Etichette leggibili per ogni categoria.
 */
export const PROJECT_TYPE_LABELS: Record<ProjectTypes, string> = {
  [ProjectTypes.RISTRUTTURAZIONE_RESTAURO]: 'Ristrutturazione e Restauro',
  [ProjectTypes.NUOVA_COSTRUZIONE]: 'Nuova Costruzione',
  [ProjectTypes.ARCHITETTURA_INTERNI_ARREDO]: "Architettura d'Interni e Arredo",
  [ProjectTypes.PROGETTI_VARI_CONCORSI]: 'Progetti Vari e Concorsi',
  [ProjectTypes.ALLESTIMENTI]: 'Allestimenti',
  [ProjectTypes.WORK_IN_PROGRESS]: 'Work in Progress',
};

/**
 * Ordine di visualizzazione delle categorie (menu, filtri).
 */
export const PROJECT_TYPE_ORDER: ProjectTypes[] = [
  ProjectTypes.RISTRUTTURAZIONE_RESTAURO,
  ProjectTypes.NUOVA_COSTRUZIONE,
  ProjectTypes.ARCHITETTURA_INTERNI_ARREDO,
  ProjectTypes.PROGETTI_VARI_CONCORSI,
  ProjectTypes.ALLESTIMENTI,
  ProjectTypes.WORK_IN_PROGRESS,
];
