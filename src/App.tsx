import { useGetStudentsQuery } from "./generated/graphql";
import './index.css'

export default function App() {

 
  const { loading, error, data } = useGetStudentsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="flex flex-col p-4">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <h1 className="text-4xl font-extrabold text-center p-4 m-0">List of Students</h1>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Profile
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    FirstName
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    LastName
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.students?.map((person, personIdx) => (
                  <tr key={person?.id} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person?.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {/* <img className="h-10 w-10 rounded-full" src={person?.imageUrl} alt="" /> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person?.firstName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person?.lastName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person?.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm6.414 8l1.768-1.768-1.414-1.414L12 12.586l-1.768-1.768-1.414 1.414L10.586 14l-1.768 1.768 1.414 1.414L12 15.414l1.768 1.768 1.414-1.414L13.414 14zM9 4v2h6V4H9z" /></svg></button>
                      <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" /></svg></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}