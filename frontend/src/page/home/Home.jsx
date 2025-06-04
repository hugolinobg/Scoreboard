import TableCarousel from '../../components/tableCarousel/TableCarousel.jsx'

import './Home.css'

import { levelOne, levelTwo } from '../../constants/data/data.js'

const Home = () => {
  return <TableCarousel levelOne={levelOne || []} levelTwo={levelTwo || []} />
}

export default Home
