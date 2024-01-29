
import styles from './page.module.css'

import GalleriesCollection from "@/components/dev/clientComponent/galleriesCollection";

export default async function Page() {

  return (
    <main className={styles.page}>
      <GalleriesCollection gallery={'obscura'}></GalleriesCollection>
    </main>
  )
}