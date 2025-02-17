import levelOne from './data.js'

const tbody = document.getElementById('tbody')

function sumLargestNumbers(){
  const allArrayValues = levelOne

  const sortDescendingOrder = allArrayValues.sort()
  

  const AddTwoLargestNumbers = sortDescendingOrder[0] + sortDescendingOrder[1]

  console.log(AddTwoLargestNumbers)
}

function loadData() {
  levelOne.forEach((item) => {
    const tr = document.createElement('tr')

    tr.innerHTML = `<td class="p-4">
        <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
          ${item.rank}
        </p>
      </td>
      <td class="p-4">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          ${item.team}
        </p>
      </td>
      <td class="p-4">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          ${item.roundOne}
        </p>
      </td>
      <td class="p-4">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          ${item.timeOne}
        </p>
      </td>
      <td class="p-4">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          ${item.roundTwo}
          </p>
      </td>
      <td class="p-4">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          ${item.timeTow}
        </p>
      </td>
      <td class="p-4">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          ${item.roundThree}
        </p>
      </td>
      <td class="p-4">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          ${item.timeThree}
        </p>
      </td>
      <td class="p-4">
        <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
          ${item.total}
        </p>
      </td>`

    tbody.appendChild(tr)
  })
}

loadData()
