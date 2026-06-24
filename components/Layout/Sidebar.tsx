'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import FilesIcon from '@/components/icons/FilesIcon';
import GithubIcon from '@/components/icons/GithubIcon';
import CodeIcon from '@/components/icons/CodeIcon';
import PencilIcon from '@/components/icons/PencilIcon';
import MailIcon from '@/components/icons/MailIcon';
import AccountIcon from '@/components/icons/AccountIcon';
import SettingsIcon from '@/components/icons/SettingsIcon';

import styles from '@/styles/Sidebar.module.css';

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/',
  },
  {
    Icon: GithubIcon,
    path: '/github',
  },
  {
    Icon: CodeIcon,
    path: '/projects',
  },
  {
    Icon: PencilIcon,
    path: '/articles',
  },
  {
    Icon: MailIcon,
    path: '/contact',
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: '/about',
  },
  {
    Icon: SettingsIcon,
    path: '/settings',
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                pathname === path ? styles.active : ''
              }`}
            >
              <Icon
                fill={
                  pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                pathname === path ? styles.active : ''
              }`}
            >
              <Icon
                fill={
                  pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;