import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    
    {
      text: 'Servizi',
      href: getPermalink('/servizi'),
      
    },
    {
      text: 'Valori',
      href: '/valori',
      
    },
    
    {
      text: 'Contattaci',
      href: '/contattaci',
    },
    {
      text: 'Preventivo',
      href: '/preventivo'
    },
  ],
  
};

export const footerData = {
  links: [
    {
      
      title: "Collegamenti",
      links: [
        { text: 'Servizi', href: '/servizi' },
        { text: 'Valori', href: '/valori' },
        { text: 'Contattaci', href: '/contattaci' },
        { text: 'Preventivo', href: '/preventivo' },
        
      ],
      
      
    },
   
   
    
  ],
  
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '' },
  ],
  
};
