import TableCarousel from '../../components/tableCarousel/TableCarousel.jsx'

import './Home.css'

import api from '../../data/data.js'

const Home = () => {
  return (
    <TableCarousel
      rank={api.rank}
      team={api.team}
      roundOne={api.roundOne}
      timeOne={api.timeOne}
      roundTwo={api.roundTwo}
      timeTow={api.timeTow}
      roundThree={api.roundThree}
      timeThree={api.timeThree}
      total={api.total}
    />
  )
}

export default Home
