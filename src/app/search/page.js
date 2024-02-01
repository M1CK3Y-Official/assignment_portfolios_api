import ImageSearch from '@/components/dev/clientComponent/imageSearch.js';

import styles from './page.module.css'

export default async function Page() {

  return (
    <main className={styles.page}>
        <h1 className={styles.title}>Image Search</h1>
        <ImageSearch></ImageSearch>

    </main>
  )
}