import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const TableCarousel = ({ levelOne, levelTwo }) => {
  const [tables, setTables] = useState(true) // true = N1, false = N2
  const [page, setPage] = useState(0)

  function sumTwoHighestRounds(item) {
    const rounds = [
      Number(item.roundOne) || 0,
      Number(item.roundTwo) || 0,
      Number(item.roundThree) || 0,
    ]
    rounds.sort((a, b) => b - a)
    return rounds[0] + rounds[1]
  }

  function rankByTotal(data) {
    if (!Array.isArray(data)) return [] // <- Aqui evita o erro
    const updatedData = data.map((item) => ({
      ...item,
      total: sumTwoHighestRounds(item),
    }))

    updatedData.sort((a, b) => b.total - a.total)
    return updatedData
  }

  useEffect(() => {
    const tableInterval = setInterval(() => {
      setTables((prev) => !prev)
      setPage(0) // reseta a paginação ao alternar de tabela
    }, 30000)

    return () => clearInterval(tableInterval)
  }, [])

  useEffect(() => {
    const pageInterval = setInterval(() => {
      setPage((prev) => (prev + 1) % Math.ceil(currentData.length / 12))
    }, 10000)

    return () => clearInterval(pageInterval)
  }, [tables])

  const currentData = tables ? rankByTotal(levelOne) : rankByTotal(levelTwo)
  const paginatedData = currentData.slice(page * 12, (page + 1) * 12)

  return (
    <div className="items-center gap-6 p-10">
      <div className="relative text-center flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <span
          className={`text-3xl font-bold py-8 text-center flex flex-col text-white ${
            tables ? 'bg-orange-500' : 'bg-blue-500'
          } shadow-md rounded-t-lg`}
        >
          <h2>{tables ? 'Nível 1' : 'Nível 2'}</h2>
        </span>

        <span
          className={`text-2xl font-medium py-4 pl-4 text-left flex flex-col text-white ${
            tables ? 'bg-orange-400' : 'bg-blue-400'
          } shadow-md`}
        >
          <h3>Scores</h3>
        </span>

        <table className="content-table w-full text-left table-auto md:flex-row min-w-max">
          {/* <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-base antialiased font-medium leading-none text-blue-gray-900 opacity-70 text-orange-500">
                  Rank
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-base antialiased font-medium leading-none text-blue-gray-900 opacity-70 text-orange-500">
                  Equipe
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-base antialiased font-medium leading-none text-blue-gray-900 opacity-70 text-orange-500">
                  Round 1
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-base antialiased font-medium leading-none text-blue-gray-900 opacity-70 text-orange-500">
                  Tempo 1
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-base antialiased font-medium leading-none text-blue-gray-900 opacity-70 text-orange-500">
                  Round 2
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-base antialiased font-medium leading-none text-blue-gray-900 opacity-70 text-orange-500">
                  Tempo 2
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-base antialiased font-medium leading-none text-blue-gray-900 opacity-70 text-orange-500">
                  Round 3
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-base antialiased font-medium leading-none text-blue-gray-900 opacity-70 text-orange-500">
                  Tempo 3
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-base antialiased font-medium leading-none text-blue-gray-900 opacity-70 text-orange-500">
                  Final
                </p>
              </th>
            </tr>
          </thead> */}

          <thead>
            <tr>
              {[
                'Rank',
                'Equipe',
                'Round 1',
                'Tempo 1',
                'Round 2',
                'Tempo 2',
                'Round 3',
                'Tempo 3',
                'Final',
              ].map((header) => (
                <th
                  key={header}
                  className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
                >
                  <p
                    className={`block font-sans text-base antialiased font-medium leading-none text-blue-gray-900 opacity-70 ${
                      tables ? 'text-orange-600' : 'text-blue-600'
                    }`}
                  >
                    {header}
                  </p>
                </th>
              ))}
            </tr>
          </thead>

          <tbody id="tbody">
            {Array.isArray(paginatedData) &&
              paginatedData.map((item, index) => (
                <tr key={item.id}>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                      {page * 10 + index + 1}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {item.team}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {item.roundOne}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {item.timeOne}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {item.roundTwo}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {item.timeTwo}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {item.roundThree}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {item.timeThree}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                      {item.total}
                    </p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

TableCarousel.propTypes = {
  levelOne: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      team: PropTypes.string.isRequired,
      roundOne: PropTypes.number.isRequired,
      timeOne: PropTypes.string.isRequired,
      roundTwo: PropTypes.number.isRequired,
      timeTwo: PropTypes.string.isRequired,
      roundThree: PropTypes.number.isRequired,
      timeThree: PropTypes.string.isRequired,
    })
  ).isRequired,
  levelTwo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      team: PropTypes.string.isRequired,
      roundOne: PropTypes.number.isRequired,
      timeOne: PropTypes.string.isRequired,
      roundTwo: PropTypes.number.isRequired,
      timeTwo: PropTypes.string.isRequired,
      roundThree: PropTypes.number.isRequired,
      timeThree: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default TableCarousel
