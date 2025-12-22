
import { Publication, Project, Education, Experience } from './types';

export const PUBLICATIONS: Publication[] = [
  {
    id: '1',
    title: 'Robust Machine Perception under Adverse Visual Conditions: A Unified Framework',
    authors: ['Nguyen A. T.', 'Smith J.', 'Wang L.'],
    venue: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR)',
    year: 2024,
    links: { pdf: '#', code: '#', project: '#' },
    highlight: true,
  },
  {
    id: '2',
    title: 'Frequency-Domain Decomposition for Real-Time Low-Light Image Enhancement',
    authors: ['Nguyen A. T.', 'Doe R.'],
    venue: 'International Conference on Computer Vision (ICCV)',
    year: 2023,
    links: { pdf: '#', code: '#' },
    highlight: true,
  },
  {
    id: '3',
    title: 'Self-Supervised Illumination-Texture Decomposition in Extreme Environments',
    authors: ['Nguyen A. T.', 'Garcia M.', 'Chen X.'],
    venue: 'European Conference on Computer Vision (ECCV)',
    year: 2022,
    links: { pdf: '#', project: '#' },
  },
  {
    id: '4',
    title: 'Deep Learning for Medical Imaging: A Survey on Robustness',
    authors: ['Nguyen A. T.', 'Wilson P.'],
    venue: 'Journal of Machine Learning Research (JMLR)',
    year: 2021,
    links: { pdf: '#' },
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Low-Light Object Detection',
    description: 'Developing a robust detection system that maintains high accuracy in near-zero lux environments.',
    problem: 'Standard object detectors fail significantly when illumination drops, leading to critical failures in autonomous systems.',
    method: 'We propose an illumination-invariant feature extractor using a frequency-gated convolutional neural network.',
    contributions: [
      'New synthetic-to-real domain adaptation technique.',
      'A novel dataset of 10,000 annotated low-light video frames.',
      'SOTA performance on DarkFace benchmark.'
    ],
    imageUrl: 'https://picsum.photos/seed/research1/800/600',
    githubUrl: '#'
  },
  {
    id: 'p2',
    title: 'Real-time Vision for ADAS',
    description: 'Optimization of heavy vision transformers for edge devices in automotive applications.',
    problem: 'Transformers provide excellent accuracy but are often too computationally expensive for real-time inference on car CPUs.',
    method: 'Implementation of a dynamic pruning strategy based on attention-head saliency.',
    contributions: [
      '30% reduction in latency without accuracy loss.',
      'Deployment-ready code for NVIDIA Orin platforms.'
    ],
    imageUrl: 'https://picsum.photos/seed/research2/800/600',
    githubUrl: '#'
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Ph.D. in Computer Science',
    institution: 'Stanford University',
    year: '2020 — Present',
    details: 'Research focus: Computer Vision and Robust Deep Learning.'
  },
  {
    degree: 'M.Sc. in Machine Learning',
    institution: 'University of Oxford',
    year: '2018 — 2020',
    details: 'Distinction. Thesis on Self-Supervised Learning.'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Research Intern',
    organization: 'Google DeepMind',
    period: 'Summer 2023',
    description: 'Worked on efficient video generation models and latent diffusion techniques.'
  },
  {
    role: 'Graduate Teaching Assistant',
    organization: 'Stanford University',
    period: '2021 — 2022',
    description: 'CS231n: Convolutional Neural Networks for Visual Recognition.'
  }
];
