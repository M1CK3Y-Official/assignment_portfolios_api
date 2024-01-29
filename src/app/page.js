
import AuthorsImages from '@/components/dev/clientComponent/authorImages'
import styles from './page.module.css'

import ClientComponent from '@/components/dev/clientComponent/clientComponent'

export default async function Page() {

  return (
    <main className={styles.page}>
      
      <ClientComponent gallery={'umbra'}></ClientComponent>
      <AuthorsImages name={'Lena Riis'}></AuthorsImages>
    </main>
  )
}

