import { useGetStudentsQuery } from "./generated/graphql";
import { useState } from "react";
import './index.css'
import DeleteStudentModal from "./components/Deletestudent";
import UpdateStudent from "./components/UpdateStudent";
import AddStudent from "./components/AddStudent";

export default function App() {
  const { loading, error, data } = useGetStudentsQuery();

  const [open, setOpen] = useState(false)
  const [studentId, setStudentId] = useState<number>(0);
  const [editStudentForm, setEditStudentForm] = useState(false);
  const [editStudentId, setEditStudentId] = useState<number>(0);
  const [addStudentForm, setAddStudentForm] = useState(false);


  const listToEdit = data?.students?.find((student) => student?.id === editStudentId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="flex flex-col p-4">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <h1 className="text-4xl font-extrabold text-center p-4 m-0">List of Students</h1>
            <div className="flex justify-end p-6">
              <button
                onClick={() => setAddStudentForm(true)}
                className="border-none bg-red-500 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-0"
              >Add a student</button>
            </div>
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
                      <img className="h-10 w-10 rounded-full" src={person?.imageUrl?.toString()} alt="" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person?.firstName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person?.lastName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person?.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex flex-row gap-4">
                        <button
                          onClick={() => {
                            setOpen(true)
                            setStudentId(Number(person?.id))
                          }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm2-2v2h6V4H9z" /></svg></button>
                        <button onClick={() => {
                          setEditStudentForm(true)
                          setEditStudentId(Number(person?.id))
                        }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" /></svg></button>
                      </div>                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {editStudentForm && (
        <UpdateStudent
          listToEdit={listToEdit}
          editStudentForm={editStudentForm}
          setEditStudentForm={setEditStudentForm}
          students={data?.students}
        />
      )}
      {open && <DeleteStudentModal open={open} setOpen={setOpen} studentId={studentId} setStudentId={setStudentId} />
      }
      {addStudentForm && (
        <AddStudent addStudentForm={addStudentForm} setAddStudentForm={setAddStudentForm} />
      )}
    </div>
  )
}