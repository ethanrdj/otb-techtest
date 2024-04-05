import styles from "./App.module.scss"

import { HolidayFeed } from "./components/HolidayFeed"

function App() {
  return (
    <div className={styles.app}>
      <HolidayFeed />
    </div>
  )
}

export default App
