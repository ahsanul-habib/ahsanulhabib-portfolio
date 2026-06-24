'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from '@/styles/Tab.module.css';

const Tab = ({ icon, filename, path }) => {
  const pathname = usePathname();

  return (
    <Link href={path}>
      <div
        className={`${styles.tab} ${
          pathname === path ? styles.active : ''
        }`}
      >
        <Image src={icon} alt={filename} width={18} height={18} />
        <p>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;