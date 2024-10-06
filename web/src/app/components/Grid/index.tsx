import clsx from 'clsx';
import styles from './styles.module.css';
export default function ArticleGrid({ children }: { children: React.ReactNode }) {
  return <ul className={clsx(styles.article_grid)}>{children}</ul>;
}
