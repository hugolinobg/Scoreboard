import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const TableCarousel = ({ levelOne, levelTwo }) => {
  // Estado para alternar entre tabela Nível 1 (true) e Nível 2 (false)
  const [tables, setTables] = useState(true)

  // Estado para controlar a página atual da tabela
  const [page, setPage] = useState(0)

  // Função que soma os dois maiores valores entre três rounds de um item
  function sumTwoHighestRounds(item) {
    const rounds = [
      Number(item.roundOne) || 0, // Garante que seja número ou 0
      Number(item.roundTwo) || 0,
      Number(item.roundThree) || 0,
    ]
    // Ordena do maior para o menor
    rounds.sort((a, b) => b - a)
    // Retorna a soma dos dois maiores valores
    return rounds[0] + rounds[1]
  }

  // Função que adiciona a propriedade 'total' com a soma dos dois melhores rounds e ordena
  function rankByTotal(data) {
    if (!Array.isArray(data)) return [] // Garante que data seja um array
    const updatedData = data.map((item) => ({
      ...item, // Mantém as propriedades originais
      total: sumTwoHighestRounds(item), // Adiciona a propriedade 'total'
    }))
    // Ordena os itens pelo total de forma decrescente
    updatedData.sort((a, b) => b.total - a.total)
    return updatedData
  }

  // Define qual conjunto de dados será usado com base no estado 'tables'
  const currentData = tables ? rankByTotal(levelOne) : rankByTotal(levelTwo)

  // Cria uma fatia dos dados para exibir apenas 15 itens por página
  const paginatedData = currentData.slice(page * 15, (page + 1) * 15)

  // Função para verificar se a página atual está vazia e, se sim, alternar para a outra tabela
  const checkAndAdvance = () => {
    if (paginatedData.length === 0) {
      setTables((prev) => !prev) // Alterna entre Nível 1 e Nível 2
      setPage(0) // Reseta para a primeira página
    }
  }

  // Efeito que alterna automaticamente entre as tabelas a cada 65 segundos
  useEffect(() => {
    const tableInterval = setInterval(() => {
      setTables((prev) => !prev) // Alterna tabela
      setPage(0) // Reseta página
    }, 65000) // 65 segundos

    // Limpeza do intervalo ao desmontar componente
    return () => clearInterval(tableInterval)
  }, [])

  // Efeito que avança automaticamente a página a cada ~16 segundos
  useEffect(() => {
    const pageInterval = setInterval(() => {
      const totalPages = Math.ceil(currentData.length / 15) // Calcula total de páginas
      if (page + 1 >= totalPages) {
        // Se for a última página ou não houver mais dados, alterna para a outra tabela
        checkAndAdvance()
      } else {
        setPage((prev) => prev + 1) // Avança para a próxima página
      }
    }, 16250) // 16,25 segundos

    // Limpeza do intervalo ao desmontar ou atualizar dependências
    return () => clearInterval(pageInterval)
  }, [tables, page, currentData])

  // Efeito que verifica e avança automaticamente se a página atual estiver vazia
  useEffect(() => {
    checkAndAdvance()
  }, [tables, page])

  return (
    <div className="items-center gap-6 p-10">
      <div className="relative text-center flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        {/* Título da tabela que muda conforme a tabela atual */}
        <span
          className={`text-3xl font-bold py-8 text-center flex flex-col text-white ${
            tables ? 'bg-orange-500' : 'bg-blue-500'
          } shadow-md rounded-t-lg`}
        >
          <h2>{tables ? 'Nível 1' : 'Nível 2'}</h2>
        </span>

        {/* Subtítulo "Scores" com indicador de páginas e cores diferentes para cada nível */}
        <span
          className={`text-2xl font-medium py-4 pl-4 pr-4 text-left flex flex-row justify-between items-center text-white ${
            tables ? 'bg-orange-400' : 'bg-blue-400'
          } shadow-md`}
        >
          <h3>Scores</h3>
          {/* Indicadores de página (bolinhas) */}
          <div className="flex space-x-1">
            {Array.from({ length: Math.ceil(currentData.length / 15) }).map(
              (_, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full ${
                    idx === page
                      ? tables
                        ? 'bg-orange-700'
                        : 'bg-blue-700'
                      : 'bg-white opacity-50'
                  }`}
                ></span>
              )
            )}
          </div>
        </span>

        {/* Tabela de dados */}
        <table className="content-table w-full text-left table-auto md:flex-row min-w-max">
          <thead>
            <tr>
              {/* Cabeçalhos da tabela gerados dinamicamente */}
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
            {/* Renderiza as linhas da tabela com base nos dados paginados */}
            {paginatedData.map((item, index) => (
              <tr key={item.id}>
                {/* Rank calculado com base na página e no índice do item */}
                <td className="p-4">
                  <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                    {page * 15 + index + 1}
                  </p>
                </td>
                {/* Dados da equipe e resultados dos rounds */}
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
                {/* Total calculado com a soma dos dois melhores rounds */}
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

// Validação das props usando PropTypes para garantir estrutura dos dados
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

// Exporta o componente para ser usado em outros arquivos
export default TableCarousel
