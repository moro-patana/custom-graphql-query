import { useState, FormEvent } from "react";
import { useAddStudentMutation } from "../generated/graphql";
const AddStudent = ({
  
    addStudentForm,
    setAddStudentForm,
    
  }: {
    
    addStudentForm: boolean;
    setAddStudentForm: (addStudentForm: boolean) => void;
    
  }) => {
    const [formState, setFormState] = useState({
        firstName:'',
        lastName:'',
        role:'',
        id: '',
        imageUrl:'',
        twitterUrl: '',
        linkedinUrl:'',
    });
  
    const [addStudent] = useAddStudentMutation({
      variables: {
       firstName:formState.firstName,
       lastName: formState.lastName,
       id: Number(formState.id),
       role:formState.role,
       imageUrl: formState.imageUrl,
       twitterUrl: formState.twitterUrl,
       linkedinUrl: formState.linkedinUrl
      },
    });
  
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      addStudent();
      setAddStudentForm(false);
    }
    return (
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-4 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <h4 className="text-center p-4 text-gray-500">Add a student</h4>
            <form className="m-2 flex flex-col gap-6 p-4" onSubmit={handleSubmit}>
              <div className="input-field border-b border-solid border-gray-500">
                <input
                  required
                  className="focus:ring-0 focus:bg-white border-none p-0 text-sm text-gray-500"
                  value={formState.firstName}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      firstName: e.target.value,
                    })
                  }
                  type="text"
                  id="firstName"
                  placeholder="FirstName"
                />
              </div>
              <div className="input-field border-b border-solid border-gray-500">
                <input
                  required
                  className="focus:ring-0 focus:bg-white border-none p-0 text-sm text-gray-500"
                  value={formState.lastName}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      lastName: e.target.value,
                    })
                  }
                  type="text"
                  id="lastName"
                  placeholder="LastName"

                />
              </div>
              <div className="input-field border-b border-solid border-gray-500">
                <input
                  required
                  className="focus:ring-0 focus:bg-white border-none p-0 text-sm text-gray-500"
                  value={formState.id}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      id: e.target.value,
                    })
                  }
                  type="text"
                  id="id"
                  placeholder="Student's Id"
                />
              </div>
              <div className="input-field border-b border-solid border-gray-500">
                <input
                  required
                  className="focus:ring-0 focus:bg-white border-none p-0 text-sm text-gray-500"
                  value={formState.role}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      role: e.target.value,
                    })
                  }
                  type="text"
                  id="role"
                  placeholder="Role"
                />
              </div>
              <div className="input-field border-b border-solid border-gray-500">
                <input
                  required
                  className="focus:ring-0 focus:bg-white border-none p-0 text-sm text-gray-500"
                  value={formState.imageUrl}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      imageUrl: e.target.value,
                    })
                  }
                  type="text"
                  id="imageUrl"
                  placeholder="Image Url"
                />
              </div>
              <div className="input-field border-b border-solid border-gray-500">
                <input
                  className="focus:ring-0 focus:bg-white border-none p-0 text-sm text-gray-500"
                  value={formState.twitterUrl}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      twitterUrl: e.target.value,
                    })
                  }
                  type="text"
                  id="twitterUrl"
                  placeholder="Twitter Url"
                />
              </div>
              <div className="input-field border-b border-solid border-gray-500">
                <input
                  className="focus:ring-0 focus:bg-white border-none p-0 text-sm text-gray-500"
                  value={formState.linkedinUrl}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      linkedinUrl: e.target.value,
                    })
                  }
                  type="text"
                  id="linkedinUrl"
                  placeholder="Linkedin Url"
                />
              </div>
              
              <div className="flex flex-row gap-6 justify-end p-4">
                <button
                  onClick={() => setAddStudentForm(false)}
                  className="border-none bg-red-500 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-0"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="border-none bg-red-500 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-0"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
export default AddStudent  