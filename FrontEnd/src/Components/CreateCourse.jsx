import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserSidebar from "../Components/Pages/Account/UserSidebar";
import Layout from "./common/Layout";
import { apiUrl } from "./common/Config";

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    outcomes: [""],
    requirements: [""],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleListChange = (listName, index, value) => {
    const updatedList = [...formData[listName]];
    updatedList[index] = value;
    setFormData({ ...formData, [listName]: updatedList });
  };

  const addListItem = (listName) => {
    setFormData({ ...formData, [listName]: [...formData[listName], ""] });
  };

  const removeListItem = (listName, index) => {
    const updatedList = formData[listName].filter((_, i) => i !== index);
    setFormData({ ...formData, [listName]: updatedList });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/create-course`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Response:", result);

    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  return (
    <Layout>
      <section className="section-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5 mb-3">
              <div className="d-flex justify-content-between">
                <h2 className="h3 mb-0 pb-0">Create Course</h2>
                <Link to="/account/my-courses" className="btn btn-primary">
                  Back
                </Link>
              </div>
            </div>
            <div className="col-lg-3 account-sidebar">
              <UserSidebar />
            </div>
            <div className="col-lg-9">
              <form onSubmit={handleSubmit}>
                <div className="card border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                          Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          placeholder="Title"
                          className="form-control"
                          value={formData.title}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        {/* Outcomes और Requirements के लिए लूप */}
                        <label className="form-label">Outcomes</label>
                        {formData.outcomes.map((outcome, index) => (
                          <div key={index} className="d-flex mb-2">
                            <input
                              type="text"
                              className="form-control"
                              value={outcome}
                              onChange={(e) => handleListChange('outcomes', index, e.target.value)}
                            />
                            <button
                              type="button"
                              className="btn btn-danger ms-2"
                              onClick={() => removeListItem('outcomes', index)}
                            >
                              -
                            </button>
                          </div>
                        ))}
                        <button type="button" className="btn btn-success" onClick={() => addListItem('outcomes')}>
                          + Add Outcome
                        </button>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Requirements</label>
                        {formData.requirements.map((req, index) => (
                          <div key={index} className="d-flex mb-2">
                            <input
                              type="text"
                              className="form-control"
                              value={req}
                              onChange={(e) => handleListChange('requirements', index, e.target.value)}
                            />
                            <button
                              type="button"
                              className="btn btn-danger ms-2"
                              onClick={() => removeListItem('requirements', index)}
                            >
                              -
                            </button>
                          </div>
                        ))}
                        <button type="button" className="btn btn-success" onClick={() => addListItem('requirements')}>
                          + Add Requirement
                        </button>
                      </div>
                      <div>
                        <button type="submit" className="btn btn-primary">
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default CreateCourse;