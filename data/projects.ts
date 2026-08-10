import { Project } from '../interfaces/Project.interface';
import { ProjectTypes, PROJECT_TYPE_ORDER } from '@/enums/projectTypes.enum';

const AS = '/projects/villa-as';
const MS = '/projects/villa-ms';

const seq = <T>(n: number, fn: (i: number) => T): T[] =>
  Array.from({ length: n }, (_, i) => fn(i + 1));
const pad = (i: number) => String(i).padStart(2, '0');

export const projects: Project[] = [
  {
    id: 1,
    type: ProjectTypes.RISTRUTTURAZIONE_RESTAURO,
    title: 'Villa AS',
    location: 'Piove di Sacco (PD)',
    cover: `${AS}/cover.jpg`,
    beforeAfter: seq(5, (i) => ({
      before: `${AS}/before-after/${i}-prima.jpg`,
      after: `${AS}/before-after/${i}-dopo.jpg`,
    })),
    galleries: [
      { title: 'Esterni', images: seq(9, (i) => `${AS}/esterni/${i}.jpg`) },
      { title: 'Interni', images: seq(30, (i) => `${AS}/interni/${pad(i)}.jpg`) },
    ],
  },
  {
    id: 2,
    type: ProjectTypes.ARCHITETTURA_INTERNI_ARREDO,
    title: 'Villa MS',
    location: 'Provincia di Padova',
    cover: `${MS}/cover.jpg`,
    collection: seq(7, (i) => `${MS}/${i}.jpg`),
  },
];

/**
 * Categorie effettivamente presenti tra i progetti, in ordine di visualizzazione.
 * Usato per mostrare solo le categorie non vuote nei menu/filtri.
 */
export const availableProjectTypes = PROJECT_TYPE_ORDER.filter((t) =>
  projects.some((p) => p.type === t)
);
