// import levelOne from './data.js'

// function sumLargestNumbers(){
//   const allArrayValues = levelOne

//   const sortDescendingOrder = allArrayValues.sort()

//   const AddTwoLargestNumbers = sortDescendingOrder[0] + sortDescendingOrder[1]

//   console.log(AddTwoLargestNumbers)
// }

// const tbody = document.getElementById('tbody')
// function loadData() {
//   levelOne.forEach((item) => {
//     const tr = document.createElement('tr')

//     tr.innerHTML = `<td class="p-4">
//         <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
//           ${item.rank}
//         </p>
//       </td>
//       <td class="p-4">
//         <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
//           ${item.team}
//         </p>
//       </td>
//       <td class="p-4">
//         <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
//           ${item.roundOne}
//         </p>
//       </td>
//       <td class="p-4">
//         <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
//           ${item.timeOne}
//         </p>
//       </td>
//       <td class="p-4">
//         <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
//           ${item.roundTwo}
//           </p>
//       </td>
//       <td class="p-4">
//         <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
//           ${item.timeTow}
//         </p>
//       </td>
//       <td class="p-4">
//         <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
//           ${item.roundThree}
//         </p>
//       </td>
//       <td class="p-4">
//         <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
//           ${item.timeThree}
//         </p>
//       </td>
//       <td class="p-4">
//         <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
//           ${item.total}
//         </p>
//       </td>`

//     tbody.appendChild(tr)
//   })
// }

// loadData()

const levelOne = [
  {
    level: 'Nível 1',
    rank: 1,
    team: 'Cybernerds N1',
    roundOne: 11,
    roundTwo: 5,
    roundThree: 13,
  },
  {
    level: 'Nível 1',
    rank: 5,
    team: 'Cybernerds N2',
    roundOne: 1,
    roundTwo: 6,
    roundThree: 2,
  },
  {
    level: 'Nível 1',
    rank: 3,
    team: 'Cybernerds N3',
    roundOne: 25,
    roundTwo: 25,
    roundThree: 13,
  },
  {
    level: 'Nível 1',
    rank: 4,
    team: 'Cybernerds N4',
    roundOne: 75,
    roundTwo: 14,
    roundThree: 35,
  },
  {
    level: 'Nível 2',
    rank: 1,
    team: 'Cybernerds N5',
    roundOne: 90,
    roundTwo: 5,
    roundThree: 10,
  },
  {
    level: 'Nível 2',
    rank: 5,
    team: 'Cybernerds N6',
    roundOne: 12,
    roundTwo: 20,
    roundThree: 15,
  },
]

// levelOne.forEach((team) => {
//   const rounds = [team.roundOne, team.roundTwo, team.roundThree]
//   rounds.sort((a, b) => b - a) // Ordena em ordem decrescente
//   const sum = rounds[0] + rounds[1] // Soma os dois maiores valores
//   console.log(`Time: ${team.team}, Soma dos dois maiores rounds: ${sum}`)
// })

const calculateTopTwoSum = (data) => {
  return data.map((item) => {
    const rounds = [item.roundOne, item.roundTwo, item.roundThree]
    rounds.sort((a, b) => b - a)
    const topTwoSum = rounds[0] + rounds[1]
    return { ...item, topTwoSum }
  })
}

const result = calculateTopTwoSum(levelOne)
console.log(result)
