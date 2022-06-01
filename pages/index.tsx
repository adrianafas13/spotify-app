import type { NextPage } from 'next'
import Sidebar from '../components/sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <main>
        <Sidebar />
        {/*Center*/}
      </main>

      <div>{/*Player*/}</div>
    </div>
  )
}

export default Home
