export default EditTutorialimport axios from 'axios'
import React, {  } from 'react'
const EditTutorial = ({editTutor,setEditTutor,getTutorials}) => {
    const base_url = "https://tutorial-api.fullstack.clarusway.com/tutorials"
const handleSubmit = async (e,editTutor) => {
  e.preventDefault()
     try {
         await axios.put(`${base_url}/${editTutor.id}/`, editTutor)
     } catch (error) {
        console.log(error);
     }
     getTutorials()
}
    return (
        <div className="modal fade" id="editModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <form  onSubmit={(e)=>handleSubmit(e,editTutor)}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    placeholder="Enter your title"
                                    value={editTutor.title}
                                    onChange={(e) => setEditTutor({...editTutor, title: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="desc"
                                    placeholder="Enter your Description"
                                    value={editTutor.description}
                                    onChange={(e) => setEditTutor({...editTutor, description:e.target.value})}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-success mb-4"  data-bs-toggle="modal" data-bs-target="#editModal">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditTutorial