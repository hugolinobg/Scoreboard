import './Home.css'

import api from '../../data/data.js'

const Home = () => {
  return (
    <div className="items-center gap-6 p-10">
      <div className="relative text-center flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <span className="text-3xl font-bold py-8 text-center flex flex-col text-white bg-orange-500 shadow-md rounded-t-lg">
          <h2>Nível 1</h2>
        </span>

        <span className="text-2xl font-medium py-4 pl-4 text-left flex flex-col text-white bg-orange-400 shadow-md">
          <h3>Scores</h3>
        </span>

        <table className="content-table w-full text-left table-auto md:flex-row min-w-max">
          <thead>
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
          </thead>
          <tbody id="tbody">
            {api.map((item, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                      {item.rank}
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
                      {item.timeTow}
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
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
