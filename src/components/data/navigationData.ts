// navigationData.ts

interface Link {
    name: string;
    path: string;
  }
  
  interface Section {
    title: string;
    links: Link[];
  }
  
  export const navigationData: Section[] = [
    {
      title: 'Projects',
      links: [
        { name: 'Postogon', path: '/projects/postogon' },
        { name: 'Imperfect Gamers', path: '/projects/imperfect-gamers' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Team', path: '/team' },
        { name: 'Contact', path: '/contact' }
      ],
    },
    {
      title: 'Legal',
      links: [
     /*   { name: 'Cookies', path: '/cookie-policy' },
        { name: 'Privacy', path: '/privacy-policy' }, */ 
        { name: 'Terms of Service', path: '/terms-of-service' },
      ],
    },
    {
      title: 'Email Us',
      links: [
        { name: 'hello@imperfectandcompany.com', path: 'mailto:hello@imperfectandcompany.com' },
      ],
    },
  ];  