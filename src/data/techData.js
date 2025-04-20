// src/data/techData.js
export const techCategories = {
  languages: [
    { id: 1, name: 'JavaScript', popularity: 95, yearCreated: 1995 },
    { id: 2, name: 'Python', popularity: 92, yearCreated: 1991 },
    { id: 3, name: 'Java', popularity: 85, yearCreated: 1995 },
    { id: 4, name: 'TypeScript', popularity: 88, yearCreated: 2012 },
    { id: 5, name: 'Go', popularity: 75, yearCreated: 2009 },
    { id: 6, name: 'Rust', popularity: 70, yearCreated: 2010 }
  ],
  frameworks: [
    { id: 1, name: 'React', category: 'Frontend', popularity: 95 },
    { id: 2, name: 'Vue.js', category: 'Frontend', popularity: 85 },
    { id: 3, name: 'Angular', category: 'Frontend', popularity: 80 },
    { id: 4, name: 'Node.js', category: 'Backend', popularity: 90 },
    { id: 5, name: 'Django', category: 'Backend', popularity: 82 },
    { id: 6, name: 'Spring Boot', category: 'Backend', popularity: 88 }
  ]
};

export const getTrendingTechnologies = () => {
  return [
    { name: 'AI/ML', growth: 95, adoption: 'High' },
    { name: 'Web3', growth: 85, adoption: 'Medium' },
    { name: 'Edge Computing', growth: 80, adoption: 'Growing' },
    { name: 'Serverless', growth: 88, adoption: 'High' },
    { name: 'Low Code', growth: 75, adoption: 'Medium' },
    { name: 'Green Tech', growth: 70, adoption: 'Growing' }
  ];
};