
import styles from './page.module.css'

import AuthorsCollection from "@/components/dev/clientComponent/authorsCollection";

export default async function Page() {

  return (
    <main className={styles.page}>
      <AuthorsCollection></AuthorsCollection>
    </main>
  )
}