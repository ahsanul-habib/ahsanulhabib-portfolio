import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'ahsanulhabib.vercel.app',
    href: 'https://ahsanulhabib.vercel.app',
  },
  {
    social: 'email',
    link: 'ahsanulhabib.ruet@gmail.com',
    href: 'mailto:ahsanulhabib.ruet@gmail.com',
  },
  {
    social: 'github',
    link: 'ahsanulhabib',
    href: 'https://github.com/ahsanulhabib',
  },
  {
    social: 'linkedin',
    link: 'ahsanulhabib-ruet',
    href: 'https://www.linkedin.com/in/ahsanulhabib-ruet',
  },
  {
    social: 'codeforces',
    link: 'AhsanulHabib1910675',
    href: 'https://codeforces.com/profile/AhsanulHabib1910675',
  },
  {
    social: 'facebook',
    link: 'ahsanul.habib6',
    href: 'https://www.facebook.com/ahsanul.habib6',
  },
  {
    social: 'instagram',
    link: 'ahsanul.habib5',
    href: 'https://www.instagram.com/ahsanul.habib5',
  },
  // {
  //   social: 'whatsapp',
  //   link: 'ahsanulhabib',
  //   href: 'https://www.polywork.com/nitinranganath',
  // },
  {
    social: 'telegram',
    link: 'ahsanulhabib',
    href: 'https://t.me/ahsanulhabib',
  },
  // {
  //   social: 'codesandbox',
  //   link: 'itsnitinr',
  //   href: 'https://codesandbox.io/u/itsnitinr',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;