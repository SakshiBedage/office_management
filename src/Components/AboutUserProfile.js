import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import axios from "axios";

function AboutUserProfile() {
  const [showForm, setShowForm] = useState(false);
  const [edu1, setEdu1] = useState(false);
  const [edu2, setEdu2] = useState(false);
  const [edu3, setEdu3] = useState(false);
  const [showWorkForm, setShowWorkForm] = useState(false);
  const [look1, setLook1] = useState(false);
  const [look2, setLook2] = useState(false);
  const [look3, setLook3] = useState(false);

  const [coverImage, setCoverImage] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    job_title: "",
    about_myself: "",
  });

  const [workplaceData, setWorkplaceData] = useState([]);
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    city: "",
    description: "",
    isCurrentlyWorking: true,
    startDate: {
      day: "",
      month: "",
      year: "",
    },
    endDate: {
      day: "",
      month: "",
      year: "",
    },
  });
  const [workExperiences, setWorkExperiences] = useState([]); // Array to store work experiences
  const [editIndex, setEditIndex] = useState(-1); // Index of the work experience being edited (-1 means none)

  const [eduData, setEduData] = useState([]);
  const [editEduIndex, setEduEditIndex] = useState(-1); // Index of the education being edited
  const [eduForm, setEduForm] = useState({
    school: "",
    startDate: {
      day: "",
      month: "",
      year: "",
    },
    endDate: {
      day: "",
      month: "",
      year: "",
    },
    graduated: true,
    description: "",
    connection: ["", "", ""],
    collegeOrGraduate: "college",
  });
  const [personalInfo, setPersonalInfo] = useState({});

  useEffect(() => {
    // Call multiple asynchronous functions to make API requests
    async function fetchData() {
      try {
        // Make a GET request to fetch user profile data
        const userDataResponse = await fetchUserData();
        const { name, job_title, about_myself } = userDataResponse.data; // Assuming the API response structure
        setUserData({ name, job_title, about_myself });

        // Make a GET request to fetch the cover image
        const coverImageResponse = await fetchCoverImage();
        const imageUrl = createImageUrl(coverImageResponse);

        // Set the coverImage state with the fetched image URL
        setCoverImage(imageUrl);
      } catch (error) {
        // Handle errors, e.g., show default data and image
        console.error("Error fetching data:", error);
        setUserData({
          name: "Default Name",
          job_title: "Default Job Title",
          about_myself: "Default About Myself",
        });
        setCoverImage("URL_TO_YOUR_DEFAULT_IMAGE");
      }
    }

    // Call the fetchData function when the component mounts
    fetchData();
    fetchUserData();
    fetchCoverImage();
  }, []);

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        // Make a GET request using axios to fetch personal information
        const response = await axios.get("/api/personal-info"); // Replace with your actual API endpoint
        setPersonalInfo(response.data); // Set the personal information data from the response
      } catch (error) {
        console.error("Error fetching personal info:", error);
      }
    };

    fetchPersonalInfo();
  }, []);

  // Separate asynchronous function for fetching user profile data
  async function fetchUserData() {
    const response = await axios.get("/api/profile"); // Replace with your API endpoint
    return response;
  }

  // Separate asynchronous function for fetching the cover image
  async function fetchCoverImage() {
    const response = await axios.get("YOUR_GET_IMAGE_API_ENDPOINT", {
      responseType: "blob", // Set the response type to blob
    });
    return response;
  }

  // Function to create a Blob URL from the response data
  function createImageUrl(response) {
    const blob = new Blob([response.data], {
      type: response.headers["content-type"],
    });
    return URL.createObjectURL(blob);
  }

  // Function to handle form submission and add a new workplace
  async function handleAddWorkplace(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/api/workplaces", formData); // Replace with your API endpoint
      // Update the workplace data with the newly added workplace
      setWorkplaceData([...workplaceData, response.data]);
      // Clear the form
      setFormData({
        company: "",
        position: "",
        city: "",
        description: "",
        isCurrentlyWorking: true,
        startDate: {
          day: "",
          month: "",
          year: "",
        },
        endDate: {
          day: "",
          month: "",
          year: "",
        },
      });
      // Hide the add workplace form
      setShowWorkForm(false);
    } catch (error) {
      console.error("Error adding workplace:", error);
    }
  }

  // Function to edit a specific work experience
  async function handleEditWorkExperience(index) {
    setEditIndex(index); // Set the index of the work experience being edited
    // You can use workExperiences[index] to get the specific work experience data for editing
  }

  // Function to save changes after editing a work experience
  async function handleSaveWorkExperience(index) {
    setEditIndex(-1); // Reset the editIndex to -1 (no work experience being edited)
    // Send a PUT request to update the work experience on the server using axios
    try {
      const updatedWorkExperience = workExperiences[index];
      await axios.put(
        `/api/workplaces/${updatedWorkExperience.id}`,
        updatedWorkExperience
      );
    } catch (error) {
      console.error("Error updating work experience:", error);
    }
  }

  // Function to handle form submission and add a new education
  const handleAddEducation = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to add education data on the server
      // Replace with your API endpoint and appropriate request
      // Use eduForm to send the data
      const response = await axios.post("/api/education", eduForm);

      // Update the education data with the newly added education
      setEduData([...eduData, response.data]);

      // Clear the form
      setEduForm({
        school: "",
        startDate: {
          day: "",
          month: "",
          year: "",
        },
        endDate: {
          day: "",
          month: "",
          year: "",
        },
        graduated: true,
        description: "",
        connection: ["", "", ""],
        collegeOrGraduate: "college",
      });

      // Hide the add education form
      setShowForm(false);
    } catch (error) {
      console.error("Error adding education:", error);
    }
  };

  // Function to handle editing an education entry
  const handleEditEducation = (index) => {
    // Set the index of the education being edited
    setEduEditIndex(index);

    // Set eduForm with the data of the education being edited
    const educationToEdit = eduData[index];
    setEduForm({
      school: educationToEdit.school,
      startDate: {
        day: educationToEdit.startDate.day,
        month: educationToEdit.startDate.month,
        year: educationToEdit.startDate.year,
      },
      endDate: {
        day: educationToEdit.endDate.day,
        month: educationToEdit.endDate.month,
        year: educationToEdit.endDate.year,
      },
      graduated: educationToEdit.graduated,
      description: educationToEdit.description,
      connection: educationToEdit.connection,
      collegeOrGraduate: educationToEdit.collegeOrGraduate,
    });
  };

  // Function to save changes after editing an education
  const handleSaveEducation = async (index) => {
    try {
      // Send a PUT request to update the education data on the server using axios
      const updatedEducation = eduData[index];
      await axios.put(
        `/api/education/${updatedEducation.id}`,
        updatedEducation
      );

      // Reset the editIndex to -1 (no education being edited)
      setEduEditIndex(-1);
    } catch (error) {
      console.error("Error updating education:", error);
    }
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleToggleWorkForm = () => {
    setShowWorkForm(!showWorkForm);
  };

  const handleToggleEdu1 = () => {
    setEdu1(!edu1);
  };

  const handleToggleEdu2 = () => {
    setEdu2(!edu2);
  };
  const handleToggleEdu3 = () => {
    setEdu3(!edu3);
  };

  const handleTogglelook1 = () => {
    setLook1(!look1);
  };

  const handleTogglelook2 = () => {
    setLook2(!look2);
  };

  const handleTogglelook3 = () => {
    setLook3(!look3);
  };

  useEffect(() => {
    // Run the progress bar initialization when the component mounts
    $(".ProgressBar_22").bekeyProgressbar({ animateText: true });

    $(".process-bar-wrapper .process-bar").each(function () {
      const width = $(this).data("process-width");
      $(this).css("width", `${width}%`);
    });
  }, []);

  const imgStyle = {
    position: "relative",
    zIndex: "1",
  };
  return (
    <div class="main-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="user-profile-img">
                <div class="cover-img">
                  <img
                    src="../../../assets/img/media/cover.jpg"
                    class="w-100"
                    alt=""
                  />

                  <div class="upload-button">
                    <img
                      src="../../../assets/img/svg/gallery.svg"
                      alt=""
                      class="svg mr-2"
                    />
                    <span>Upload Photo</span>
                    <input
                      class="file-input"
                      type="file"
                      id="fileUpload3"
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="mx-2 mx-lg-4 mx-xl-5">
              <div class="card mt-1">
                <div class="user-profile-nav d-flex justify-content-xl-between align-items-xl-center flex-column flex-xl-row">
                  <div class="profile-info d-flex align-items-center">
                    <div class="profile-pic mr-3">
                      <img
                        src="../../../assets/img/media/profile-pic.jpg"
                        alt=""
                      />

                      <div class="upload-button">
                        <img
                          src="../../../assets/img/svg/gallery.svg"
                          alt=""
                          class="svg mr-2"
                        />
                        <span>Upload Photo</span>
                        <input
                          class="file-input"
                          type="file"
                          id="fileUpload2"
                          accept="image/*"
                        />
                      </div>
                    </div>

                    <div>
                      <h3>{userData.name}</h3>
                      <p class="font-14">{userData.job_title}</p>
                    </div>
                  </div>

                  <div class="d-flex align-items-center mt-3 mt-xl-0">
                    <ul class="nav profile-nav-tabs">
                      <li>
                        <a class="active pr-0 pl-2 pl-xl-30">
                          <span class="chat">
                            <img
                              src="../../../assets/img/svg/chat-icon.svg"
                              alt=""
                              style={imgStyle}
                            />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a class="conncetion" href="connection.html">
                          <div class="btn-circle mr-20">
                            <img
                              src="../../../assets/img/svg/user-check.svg"
                              alt=""
                              style={imgStyle}
                            />
                          </div>
                          <div class="font-14">
                            <h4>154</h4>
                            <p class="font-14 text_color">Connections</p>
                          </div>
                        </a>
                      </li>

                      <li>
                        <Link to="/analysis/userdashboard" class="p_nav-link">
                          User Dashboard
                        </Link>
                      </li>
                    </ul>

                    <div class="px-3">
                      <div class="dropdown-button">
                        <a
                          href="#"
                          class="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div class="menu-icon style--two w-auto justify-content-center mr-0">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <Link to="/analysis/editprofile">Edit Profile</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-30">
                <div class="profile-completion d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="progress_22 mr-3">
                      <div class="ProgressBar-wrap2 position-relative">
                        <div
                          class="ProgressBar ProgressBar_22"
                          data-progress="86"
                        >
                          <svg
                            class="ProgressBar-contentCircle"
                            viewBox="0 0 200 200"
                          >
                            <circle
                              transform="rotate(-90, 100, 100)"
                              class="ProgressBar-background"
                              cx="100"
                              cy="100"
                              r="85"
                            />
                            <circle
                              transform="rotate(-90, 100, 100)"
                              class="ProgressBar-circle"
                              cx="100"
                              cy="100"
                              r="85"
                            />
                          </svg>

                          <span class="ProgressBar-percentage ProgressBar-percentage--count"></span>
                        </div>
                      </div>
                    </div>

                    <div class="">
                      <h4 class="c2 mb-1">Profile Completion</h4>
                      <p class="font-14">
                        Praesent tempor dictum tellus ut molestie. Sed sed
                        ullamcorper lorem, id faucibus odio.
                      </p>
                    </div>
                  </div>

                  <div class="edit-profile-btn pr-1">
                    <a href="edit-profile.html" class="btn-circle">
                      <img
                        src="../../../assets/img/svg/writing.svg"
                        alt=""
                        style={imgStyle}
                      />
                    </a>
                  </div>
                </div>

                <div class="card">
                  <div class="p-30">
                    <div class="about-myself mt-2 pb-2">
                      <h4 class="mb-3">About Myself</h4>
                      <p>{userData.about_myself}</p>
                    </div>
                    .
                    <div class="row mt-5">
                      <div class="col-md-3">
                        <nav>
                          <div class="nav flex-md-column about-nav-tab">
                            <a
                              class="active"
                              id="nav-overview-tab"
                              data-toggle="tab"
                              href="#nav-overview"
                            >
                              Overview
                            </a>

                            <a
                              id="nav-work-tab"
                              data-toggle="tab"
                              href="#nav-work"
                            >
                              Work
                            </a>

                            <a
                              id="nav-education-tab"
                              data-toggle="tab"
                              href="#nav-education"
                            >
                              Education
                            </a>

                            <a
                              id="nav-basic-tab"
                              data-toggle="tab"
                              href="#nav-basic"
                            >
                              Contact And Basic Info
                            </a>

                            <a
                              id="nav-skill-tab"
                              data-toggle="tab"
                              href="#nav-skill"
                            >
                              Skills
                            </a>
                          </div>
                        </nav>
                      </div>

                      <div class="col-md-9">
                        <div class="tab-content about-tab-content pl-md-5 mt-4 mt-md-0">
                          <div
                            class="tab-pane fade show active"
                            id="nav-overview"
                            role="tabpanel"
                          >
                            <div class="overview">
                              <h4 class="mb-3">Overview</h4>

                              <ul class="p_overview-list list-unstyled">
                                <li>
                                  <div class="d-flex">
                                    <div class="img mr-3">
                                      <img
                                        src="../../../assets/img/png-icon/themelooks.png"
                                        alt=""
                                      />
                                    </div>
                                    <div class="content">
                                      <a href="#">Front-end Web Developer</a> at{" "}
                                      <a href="#">ThemeLooks</a>,
                                      <br />
                                      <a href="#">
                                        Front-end Web Development Intern
                                      </a>{" "}
                                      at <a href="#">ThemeLooks</a>
                                      <div>
                                        <a
                                          data-toggle="tab"
                                          href="#nav-work"
                                          class="c2 hover-to-show"
                                        >
                                          Edit your work
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div class="d-flex">
                                    <div class="img mr-3">
                                      <img
                                        src="../../../assets/img/png-icon/fci.png"
                                        alt=""
                                      />
                                    </div>
                                    <div class="content">
                                      Studied SEIP at
                                      <a href="#">
                                        FENI COMPUTER INSTITUTE (FCI)
                                      </a>
                                      <div>
                                        <div>Attended from 2018 to 2018</div>
                                        <a
                                          data-toggle="tab"
                                          href="#nav-education"
                                          class="c2 hover-to-show"
                                        >
                                          Edit your education
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <li>
                                  <div class="d-flex">
                                    <div class="img mr-3">
                                      <i class="icofont-mobile-phone"></i>
                                    </div>
                                    <div class="content">
                                      <a
                                        href="tel:01725588588"
                                        class="text_color"
                                      >
                                        01725-588588
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div class="d-flex">
                                    <div class="img mr-3">
                                      <i class="icofont-globe"></i>
                                    </div>
                                    <div class="content">
                                      <a
                                        href="https://themelooks.com"
                                        class="text_color"
                                      >
                                        https://themelooks.com
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div class="d-flex">
                                    <div class="img mr-3">
                                      <i class="icofont-birthday-cake"></i>
                                    </div>
                                    <div class="content">
                                      September 25, 1991
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="nav-work"
                            role="tabpanel"
                          >
                            <h4 class="mb-3">Work</h4>

                            <ul class="p_work-list list-unstyled">
                              <li>
                                <div class="add-workplace">
                                  <div
                                    class="iconwrap mr-3"
                                    onClick={handleToggleWorkForm}
                                  >
                                    <i class="icofont-plus"></i>
                                  </div>
                                  <h4 class="c2 regular">Add a Workplace</h4>
                                </div>
                                {showWorkForm && (
                                  <div class="add-work-form mb-3">
                                    <form onSubmit={handleAddWorkplace}>
                                      <div
                                        class="add-work-form-close work-form-close"
                                        onClick={handleToggleWorkForm}
                                      >
                                        <i class="icofont-close c4"></i> Cancel
                                      </div>

                                      <div class="form-group row">
                                        <label
                                          for="company"
                                          class="col-sm-3 col-lg-2 col-form-label"
                                        >
                                          Company
                                        </label>
                                        <div class="col-sm-9 col-md-10">
                                          <input
                                            type="text"
                                            class="form-control"
                                            name="company"
                                            id="company"
                                            placeholder="Where have you worked?"
                                          />
                                        </div>
                                      </div>

                                      <div class="form-group row">
                                        <label
                                          for="position"
                                          class="col-sm-3 col-lg-2 col-form-label"
                                        >
                                          Position
                                        </label>
                                        <div class="col-sm-9 com-lg-10">
                                          <input
                                            type="text"
                                            class="form-control"
                                            name="position"
                                            id="position"
                                            placeholder="What is your job title?"
                                          />
                                        </div>
                                      </div>

                                      <div class="form-group row">
                                        <label
                                          for="cityTown"
                                          class="col-sm-3 col-lg-2 col-form-label"
                                        >
                                          City/Town
                                        </label>
                                        <div class="col-sm-9 com-lg-10">
                                          <input
                                            type="text"
                                            class="form-control"
                                            name="city"
                                            id="cityTown"
                                          />
                                        </div>
                                      </div>

                                      <div class="form-group row">
                                        <label
                                          for="description"
                                          class="col-sm-3 col-lg-2 col-form-label"
                                        >
                                          Description
                                        </label>
                                        <div class="col-sm-9 com-lg-10">
                                          <textarea
                                            id="description"
                                            name="description"
                                            class="theme-input-style style--three"
                                          ></textarea>
                                        </div>
                                      </div>

                                      <div class="form-group row">
                                        <label class="col-sm-3 col-lg-2 col-form-label">
                                          Time Period
                                        </label>
                                        <div class="col-sm-9 com-lg-10">
                                          <div class="d-flex align-items-center position-relative mb-2">
                                            <label class="custom-checkbox">
                                              <input type="checkbox" checked />
                                              <span class="checkmark"></span>
                                            </label>

                                            <span class="d-inline-block ml-4">
                                              I currently work here
                                            </span>
                                          </div>

                                          <div class="d-flex align-items-center">
                                            <div class="form-group mr-1">
                                              <select
                                                class="form-control"
                                                name="day"
                                                id="exampleFormControlSelect1"
                                              >
                                                <option>Day</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                                <option>13</option>
                                                <option>14</option>
                                                <option>15</option>
                                                <option>16</option>
                                                <option>17</option>
                                                <option>18</option>
                                                <option>19</option>
                                                <option>20</option>
                                                <option>21</option>
                                                <option>22</option>
                                                <option>23</option>
                                                <option>24</option>
                                                <option>25</option>
                                                <option>26</option>
                                                <option>27</option>
                                                <option>28</option>
                                                <option>29</option>
                                                <option>30</option>
                                              </select>
                                            </div>
                                            <div class="form-group mr-1">
                                              <select
                                                class="form-control"
                                                name="month"
                                                id="month"
                                              >
                                                <option>Month</option>
                                                <option selected="">
                                                  January
                                                </option>
                                                <option>February</option>
                                                <option>March</option>
                                                <option>April</option>
                                                <option>May</option>
                                                <option>June</option>
                                                <option>July</option>
                                                <option>August</option>
                                                <option>September</option>
                                                <option>October</option>
                                                <option>November</option>
                                                <option>December</option>
                                              </select>
                                            </div>
                                            <div class="form-group">
                                              <select
                                                class="form-control"
                                                name="year"
                                                id="year"
                                              >
                                                <option>Year</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                                <option>2017</option>
                                                <option>2016</option>
                                                <option>2015</option>
                                                <option>2014</option>
                                                <option>2013</option>
                                                <option>2012</option>
                                                <option>2011</option>
                                                <option>2010</option>
                                                <option>2009</option>
                                                <option>2008</option>
                                                <option>2007</option>
                                                <option>2006</option>
                                                <option>2005</option>
                                                <option>2004</option>
                                                <option>2003</option>
                                                <option>2002</option>
                                                <option>2001</option>
                                                <option>2000</option>
                                                <option>1999</option>
                                                <option>1998</option>
                                                <option>1997</option>
                                                <option>1996</option>
                                                <option>1995</option>
                                                <option>1994</option>
                                                <option>1993</option>
                                                <option>1992</option>
                                                <option>1991</option>
                                                <option>1990</option>
                                                <option>1989</option>
                                                <option>1988</option>
                                                <option>1987</option>
                                                <option>1986</option>
                                                <option>1985</option>
                                                <option>1984</option>
                                                <option>1983</option>
                                                <option>1982</option>
                                                <option>1981</option>
                                                <option>1980</option>
                                              </select>
                                            </div>
                                            <div class="form-group ml-2">
                                              <span class="d-inline-block ml-2">
                                                to present
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="row justify-content-end">
                                        <div class="col-sm-9 com-lg-10">
                                          <div class="d-flex">
                                            <button
                                              type="submit"
                                              class="change-card-btn c2"
                                            >
                                              Save Changes
                                            </button>
                                            <button
                                              type="reset"
                                              class="change-card-btn work-form-close ml-3"
                                            >
                                              Cancel
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                )}
                              </li>

                              {workExperiences.map((workplace, index) => (
                                <li key={workplace.id}>
                                  <div class="work-content">
                                    <div class="d-flex">
                                      <div class="img mr-3">
                                        <img
                                          src="../../../assets/img/png-icon/themelooks.png"
                                          alt=""
                                        />
                                      </div>
                                      <div class="content">
                                        <a href="#">
                                          <h4 class="c2 company-name">
                                            {workplace.company}
                                          </h4>
                                        </a>
                                        <div>
                                          <span class="d-inline-block position mr-2">
                                            {workplace.position}
                                          </span>
                                          <span class="d-inline-block mr-2">
                                            <span class="month">
                                              {workplace.startDate.month}
                                            </span>
                                            <span class="day">
                                              {workplace.startDate.day}
                                            </span>
                                            ,
                                            <span class="year">
                                              {workplace.startDate.year}
                                            </span>{" "}
                                            {workplace.isCurrentlyWorking ? (
                                              " present"
                                            ) : (
                                              <>
                                                <span className="month">
                                                  {workplace.endDate.month}
                                                </span>
                                                <span className="day">
                                                  {workplace.endDate.day}
                                                </span>
                                                ,
                                                <span className="year">
                                                  {workplace.endDate.year}
                                                </span>
                                              </>
                                            )}
                                          </span>
                                          <span class="d-inline-block city">
                                            {workplace.city}
                                          </span>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="dropdown-button">
                                      <a
                                        href="#"
                                        class="text_color"
                                        data-toggle="dropdown"
                                      >
                                        Option
                                        <i class="icofont-caret-down mt-1 c4"></i>
                                      </a>
                                      <div class="dropdown-menu dropdown-menu-right">
                                        <a
                                          href="#"
                                          class="edit"
                                          onClick={handleTogglelook1}
                                        >
                                          Edit
                                        </a>
                                        <a href="#" class="delete">
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  {look1 && (
                                    <div class="work-update-form mb-3">
                                      <form action="#">
                                        <div
                                          class="add-work-form-close work-form-close"
                                          onClick={handleTogglelook1}
                                        >
                                          <i class="icofont-close c4"></i>{" "}
                                          Cancel
                                        </div>

                                        <div class="form-group row">
                                          <label
                                            for="company2"
                                            class="col-sm-3 col-lg-2 col-form-label"
                                          >
                                            Company
                                          </label>
                                          <div class="col-sm-9 com-lg-10">
                                            <input
                                              type="text"
                                              class="form-control"
                                              name="company"
                                              id="company2"
                                              placeholder="Where have you worked?"
                                              value={
                                                workExperiences[index].company
                                              }
                                            />
                                          </div>
                                        </div>

                                        <div class="form-group row">
                                          <label
                                            for="position2"
                                            class="col-sm-3 col-lg-2 col-form-label"
                                          >
                                            Position
                                          </label>
                                          <div class="col-sm-9 com-lg-10">
                                            <input
                                              type="text"
                                              class="form-control"
                                              name="position"
                                              id="position2"
                                              placeholder="What is your job title?"
                                              value={
                                                workExperiences[index].position
                                              }
                                            />
                                          </div>
                                        </div>

                                        <div class="form-group row">
                                          <label
                                            for="cityTown2"
                                            class="col-sm-3 col-lg-2 col-form-label"
                                          >
                                            City/Town
                                          </label>
                                          <div class="col-sm-9 com-lg-10">
                                            <input
                                              type="text"
                                              class="form-control"
                                              name="city"
                                              id="cityTown2"
                                              value={
                                                workExperiences[index].city
                                              }
                                            />
                                          </div>
                                        </div>

                                        <div class="form-group row">
                                          <label
                                            for="description2"
                                            class="col-sm-3 col-lg-2 col-form-label"
                                          >
                                            Description
                                          </label>
                                          <div class="col-sm-9 com-lg-10">
                                            <textarea
                                              id="description2"
                                              name="description"
                                              class="theme-input-style style--three"
                                              value={
                                                workExperiences[index]
                                                  .description
                                              }
                                            ></textarea>
                                          </div>
                                        </div>

                                        <div class="form-group row">
                                          <label class="col-sm-3 col-lg-2 col-form-label">
                                            Time Period
                                          </label>
                                          <div class="col-sm-9 com-lg-10">
                                            <div class="d-flex align-items-center position-relative mb-2">
                                              <label class="custom-checkbox">
                                                <input
                                                  type="checkbox"
                                                  checked={
                                                    workExperiences[index]
                                                      .isCurrentlyWorking
                                                  }
                                                />
                                                <span class="checkmark"></span>
                                              </label>

                                              <span class="d-inline-block ml-4">
                                                I currently work here
                                              </span>
                                            </div>

                                            <div class="d-flex align-items-center">
                                              <div class="form-group mr-1">
                                                <select
                                                  class="form-control"
                                                  name="day"
                                                  id="exampleFormControlSelect2"
                                                  value={
                                                    workExperiences[index]
                                                      .startDate.day
                                                  }
                                                >
                                                  <option>Day</option>
                                                  <option>1</option>
                                                  <option>2</option>
                                                  <option>3</option>
                                                  <option>4</option>
                                                  <option>5</option>
                                                  <option>6</option>
                                                  <option>7</option>
                                                  <option>8</option>
                                                  <option>9</option>
                                                  <option>10</option>
                                                  <option>11</option>
                                                  <option>12</option>
                                                  <option>13</option>
                                                  <option>14</option>
                                                  <option>15</option>
                                                  <option>16</option>
                                                  <option>17</option>
                                                  <option>18</option>
                                                  <option>19</option>
                                                  <option>20</option>
                                                  <option>21</option>
                                                  <option>22</option>
                                                  <option>23</option>
                                                  <option>24</option>
                                                  <option>25</option>
                                                  <option>26</option>
                                                  <option>27</option>
                                                  <option>28</option>
                                                  <option>29</option>
                                                  <option>30</option>
                                                </select>
                                              </div>
                                              <div class="form-group mr-1">
                                                <select
                                                  class="form-control"
                                                  name="month"
                                                  id="month2"
                                                  value={
                                                    workExperiences[index]
                                                      .startDate.month
                                                  }
                                                >
                                                  <option selected="">
                                                    Month
                                                  </option>
                                                  <option>January</option>
                                                  <option>February</option>
                                                  <option>March</option>
                                                  <option>April</option>
                                                  <option>May</option>
                                                  <option>June</option>
                                                  <option>July</option>
                                                  <option>August</option>
                                                  <option>September</option>
                                                  <option>October</option>
                                                  <option>November</option>
                                                  <option>December</option>
                                                </select>
                                              </div>
                                              <div class="form-group">
                                                <select
                                                  class="form-control"
                                                  name="year"
                                                  id="year2"
                                                  value={
                                                    workExperiences[index]
                                                      .startDate.year
                                                  }
                                                >
                                                  <option>Year</option>
                                                  <option>2019</option>
                                                  <option>2018</option>
                                                  <option>2017</option>
                                                  <option>2016</option>
                                                  <option>2015</option>
                                                  <option>2014</option>
                                                  <option>2013</option>
                                                  <option>2012</option>
                                                  <option>2011</option>
                                                  <option>2010</option>
                                                  <option>2009</option>
                                                  <option>2008</option>
                                                  <option>2007</option>
                                                  <option>2006</option>
                                                  <option>2005</option>
                                                  <option>2004</option>
                                                  <option>2003</option>
                                                  <option>2002</option>
                                                  <option>2001</option>
                                                  <option>2000</option>
                                                  <option>1999</option>
                                                  <option>1998</option>
                                                  <option>1997</option>
                                                  <option>1996</option>
                                                  <option>1995</option>
                                                  <option>1994</option>
                                                  <option>1993</option>
                                                  <option>1992</option>
                                                  <option>1991</option>
                                                  <option>1990</option>
                                                  <option>1989</option>
                                                  <option>1988</option>
                                                  <option>1987</option>
                                                  <option>1986</option>
                                                  <option>1985</option>
                                                  <option>1984</option>
                                                  <option>1983</option>
                                                  <option>1982</option>
                                                  <option>1981</option>
                                                  <option>1980</option>
                                                </select>
                                              </div>
                                              <div class="form-group ml-2">
                                                <span class="d-inline-block ml-2">
                                                  to present
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="row justify-content-end">
                                          <div class="col-sm-9 com-lg-10">
                                            <div class="d-flex">
                                              <button
                                                type="submit"
                                                onClick={() =>
                                                  handleSaveWorkExperience(
                                                    index
                                                  )
                                                }
                                                class="change-card-btn c2"
                                              >
                                                Save Changes
                                              </button>
                                              <button
                                                type="reset"
                                                class="change-card-btn work-form-close ml-3"
                                              >
                                                Cancel
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div
                            class="tab-pane fade"
                            id="nav-education"
                            role="tabpanel"
                          >
                            <h4 class="mb-3">Education</h4>

                            <ul class="p_education-list list-unstyled">
                              <li>
                                <div class="add-workplace">
                                  <div
                                    class="iconwrap mr-3"
                                    onClick={handleToggleForm}
                                  >
                                    <i class="icofont-plus"></i>
                                  </div>
                                  <h4 class="c2 regular">Add a College</h4>
                                </div>
                                {showForm && (
                                  <div class="add-work-form college mb-3">
                                    <form onSubmit={handleAddEducation}>
                                      <div
                                        class="add-work-form-close work-form-close"
                                        onClick={handleToggleForm}
                                      >
                                        <i class="icofont-close c4"></i> Cancel
                                      </div>

                                      <div class="form-group row">
                                        <label
                                          for="school"
                                          class="col-sm-3 col-lg-2 col-form-label"
                                        >
                                          School
                                        </label>
                                        <div class="col-sm-9 com-lg-10">
                                          <input
                                            type="text"
                                            class="form-control"
                                            name="school"
                                            id="school"
                                            placeholder="What school did you attend?"
                                          />
                                        </div>
                                      </div>

                                      <div class="form-group row">
                                        <label class="col-sm-3 col-lg-2 col-form-label">
                                          Time Period
                                        </label>
                                        <div class="col-sm-9 com-lg-10">
                                          <div class="d-flex align-items-center">
                                            <div class="form-group mr-1">
                                              <select
                                                class="form-control"
                                                name="day"
                                                id="exampleFormControlSelect6"
                                              >
                                                <option>Day</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                                <option>13</option>
                                                <option>14</option>
                                                <option>15</option>
                                                <option>16</option>
                                                <option>17</option>
                                                <option>18</option>
                                                <option>19</option>
                                                <option>20</option>
                                                <option>21</option>
                                                <option>22</option>
                                                <option>23</option>
                                                <option>24</option>
                                                <option>25</option>
                                                <option>26</option>
                                                <option>27</option>
                                                <option>28</option>
                                                <option>29</option>
                                                <option>30</option>
                                              </select>
                                            </div>
                                            <div class="form-group mr-1">
                                              <select
                                                class="form-control"
                                                name="month"
                                              >
                                                <option selected="">
                                                  Month
                                                </option>
                                                <option>January</option>
                                                <option>February</option>
                                                <option>March</option>
                                                <option>April</option>
                                                <option>May</option>
                                                <option>June</option>
                                                <option>July</option>
                                                <option>August</option>
                                                <option>September</option>
                                                <option>October</option>
                                                <option>November</option>
                                                <option>December</option>
                                              </select>
                                            </div>
                                            <div class="form-group">
                                              <select
                                                class="form-control"
                                                name="year"
                                                id="year5"
                                              >
                                                <option>Year</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                                <option>2017</option>
                                                <option>2016</option>
                                                <option>2015</option>
                                                <option>2014</option>
                                                <option>2013</option>
                                                <option>2012</option>
                                                <option>2011</option>
                                                <option>2010</option>
                                                <option>2009</option>
                                                <option>2008</option>
                                                <option>2007</option>
                                                <option>2006</option>
                                                <option>2005</option>
                                                <option>2004</option>
                                                <option>2003</option>
                                                <option>2002</option>
                                                <option>2001</option>
                                                <option>2000</option>
                                                <option>1999</option>
                                                <option>1998</option>
                                                <option>1997</option>
                                                <option>1996</option>
                                                <option>1995</option>
                                                <option>1994</option>
                                                <option>1993</option>
                                                <option>1992</option>
                                                <option>1991</option>
                                                <option>1990</option>
                                                <option>1989</option>
                                                <option>1988</option>
                                                <option>1987</option>
                                                <option>1986</option>
                                                <option>1985</option>
                                                <option>1984</option>
                                                <option>1983</option>
                                                <option>1982</option>
                                                <option>1981</option>
                                                <option>1980</option>
                                              </select>
                                            </div>

                                            <div class="form-group ml-2">
                                              <span class="d-inline-block ml-2">
                                                to
                                              </span>
                                            </div>
                                          </div>

                                          <div class="d-flex align-items-center">
                                            <div class="form-group mr-1">
                                              <select
                                                class="form-control"
                                                name="day"
                                                id="exampleFormControlSelect7"
                                              >
                                                <option selected="">Day</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                                <option>13</option>
                                                <option>14</option>
                                                <option>15</option>
                                                <option>16</option>
                                                <option>17</option>
                                                <option>18</option>
                                                <option>19</option>
                                                <option>20</option>
                                                <option>21</option>
                                                <option>22</option>
                                                <option>23</option>
                                                <option>24</option>
                                                <option>25</option>
                                                <option>26</option>
                                                <option>27</option>
                                                <option>28</option>
                                                <option>29</option>
                                                <option>30</option>
                                              </select>
                                            </div>
                                            <div class="form-group mr-1">
                                              <select
                                                class="form-control"
                                                name="month"
                                                id="month5"
                                              >
                                                <option selected="">
                                                  Month
                                                </option>
                                                <option>January</option>
                                                <option>February</option>
                                                <option>March</option>
                                                <option>April</option>
                                                <option>May</option>
                                                <option>June</option>
                                                <option>July</option>
                                                <option>August</option>
                                                <option>September</option>
                                                <option>October</option>
                                                <option>November</option>
                                                <option>December</option>
                                              </select>
                                            </div>
                                            <div class="form-group">
                                              <select
                                                class="form-control"
                                                name="year"
                                                id="year6"
                                              >
                                                <option selected="">
                                                  Year
                                                </option>
                                                <option>2019</option>
                                                <option>2018</option>
                                                <option>2017</option>
                                                <option>2016</option>
                                                <option>2015</option>
                                                <option>2014</option>
                                                <option>2013</option>
                                                <option>2012</option>
                                                <option>2011</option>
                                                <option>2010</option>
                                                <option>2009</option>
                                                <option>2008</option>
                                                <option>2007</option>
                                                <option>2006</option>
                                                <option>2005</option>
                                                <option>2004</option>
                                                <option>2003</option>
                                                <option>2002</option>
                                                <option>2001</option>
                                                <option>2000</option>
                                                <option>1999</option>
                                                <option>1998</option>
                                                <option>1997</option>
                                                <option>1996</option>
                                                <option>1995</option>
                                                <option>1994</option>
                                                <option>1993</option>
                                                <option>1992</option>
                                                <option>1991</option>
                                                <option>1990</option>
                                                <option>1989</option>
                                                <option>1988</option>
                                                <option>1987</option>
                                                <option>1986</option>
                                                <option>1985</option>
                                                <option>1984</option>
                                                <option>1983</option>
                                                <option>1982</option>
                                                <option>1981</option>
                                                <option>1980</option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="form-group row">
                                        <label class="col-4 col-sm-3 col-lg-2 col-form-label">
                                          Graduated
                                        </label>
                                        <div class="col-8 col-sm-9 com-lg-10">
                                          <div class="mt-2">
                                            <label class="custom-checkbox">
                                              <input type="checkbox" checked />
                                              <span class="checkmark"></span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="form-group row">
                                        <label
                                          for="description6"
                                          class="col-sm-3 col-lg-2 col-form-label"
                                        >
                                          Description
                                        </label>
                                        <div class="col-sm-9 com-lg-10">
                                          <textarea
                                            id="description6"
                                            name="description"
                                            class="theme-input-style style--three"
                                          ></textarea>
                                        </div>
                                      </div>

                                      <div class="form-group row">
                                        <label
                                          for="position"
                                          class="col-sm-3 col-lg-2 col-form-label"
                                        >
                                          Connection
                                        </label>
                                        <div class="col-sm-9 com-lg-10">
                                          <input
                                            type="text"
                                            class="form-control mb-3"
                                            name="connection"
                                            id="connection"
                                          />

                                          <input
                                            type="text"
                                            class="form-control mb-3"
                                            name="connection"
                                            id="connection2"
                                          />

                                          <input
                                            type="text"
                                            class="form-control"
                                            name="connection"
                                            id="connection3"
                                          />
                                        </div>
                                      </div>

                                      <div class="form-group row">
                                        <label class="col-sm-3 col-lg-2 col-form-label">
                                          Attended for
                                        </label>
                                        <div class="col-sm-9 com-lg-10">
                                          <div class="radio d-flex align-items-center mb-3">
                                            <div class="custom-radio mr-2">
                                              <input
                                                type="radio"
                                                name="radio"
                                                id="radio4"
                                                checked
                                              />
                                              <label for="radio4"></label>
                                            </div>

                                            <label for="radio4">College</label>
                                          </div>

                                          <div class="radio d-flex align-items-center mb-3">
                                            <div class="custom-radio mr-2">
                                              <input
                                                type="radio"
                                                name="radio"
                                                id="radio5"
                                              />
                                              <label for="radio5"></label>
                                            </div>

                                            <label for="radio5">
                                              Graduate School
                                            </label>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="row justify-content-end">
                                        <div class="col-sm-9 com-lg-10">
                                          <div class="d-flex">
                                            <button
                                              type="submit"
                                              class="change-card-btn c2"
                                            >
                                              Save Changes
                                            </button>
                                            <button
                                              type="reset"
                                              class="change-card-btn work-form-close ml-3"
                                            >
                                              Cancel
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                )}
                              </li>

                              {eduData.map((edu, index) => (
                                <li key={edu.id}>
                                  <div class="work-content">
                                    <div class="d-flex">
                                      <div class="img mr-3">
                                        <img
                                          src="../../../assets/img/png-icon/edu.png"
                                          alt=""
                                        />
                                      </div>
                                      <div class="content">
                                        <a href="https://www.themelooks.com">
                                          <h4 class="c2 company-name">
                                            {edu.school}
                                          </h4>
                                        </a>
                                        <div class="font-12">
                                          {edu.startDate.year} -{" "}
                                          {edu.endDate.year}
                                        </div>
                                      </div>
                                    </div>

                                    <div class="dropdown-button">
                                      <a
                                        href="#"
                                        class="text_color"
                                        data-toggle="dropdown"
                                      >
                                        Option
                                        <i class="icofont-caret-down mt-1 c4"></i>
                                      </a>
                                      <div class="dropdown-menu dropdown-menu-right">
                                        <a
                                          href="#"
                                          class="edit"
                                          onClick={
                                            (handleToggleEdu2,
                                            handleEditEducation(index))
                                          }
                                        >
                                          Edit
                                        </a>
                                        <a href="#" class="delete">
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  {editEduIndex === index && (
                                    <div class="work-update-form mb-3">
                                      <form
                                        onSubmit={() =>
                                          handleSaveEducation(index)
                                        }
                                      >
                                        <div class="add-work-form-close work-form-close">
                                          <i
                                            class="icofont-close c4"
                                            onClick={handleToggleEdu2}
                                          ></i>{" "}
                                          Cancel
                                        </div>

                                        <div class="form-group row">
                                          <label
                                            for="company333"
                                            class="col-sm-3 col-lg-2 col-form-label"
                                          >
                                            Company
                                          </label>
                                          <div class="col-sm-9 com-lg-10">
                                            <input
                                              type="text"
                                              class="form-control"
                                              name="company"
                                              id="company333"
                                              placeholder="Where have you worked?"
                                            />
                                          </div>
                                        </div>

                                        <div class="form-group row">
                                          <label
                                            for="position333"
                                            class="col-sm-3 col-lg-2 col-form-label"
                                          >
                                            Position
                                          </label>
                                          <div class="col-sm-9 com-lg-10">
                                            <input
                                              type="text"
                                              class="form-control"
                                              name="position"
                                              id="position333"
                                              placeholder="What is your job title?"
                                            />
                                          </div>
                                        </div>

                                        <div class="form-group row">
                                          <label
                                            for="cityTown333"
                                            class="col-sm-3 col-lg-2 col-form-label"
                                          >
                                            City/Town
                                          </label>
                                          <div class="col-sm-9 com-lg-10">
                                            <input
                                              type="text"
                                              class="form-control"
                                              name="city"
                                              id="cityTown333"
                                            />
                                          </div>
                                        </div>

                                        <div class="form-group row">
                                          <label
                                            for="description33"
                                            class="col-sm-3 col-lg-2 col-form-label"
                                          >
                                            Description
                                          </label>
                                          <div class="col-sm-9 com-lg-10">
                                            <textarea
                                              id="description33"
                                              name="description"
                                              class="theme-input-style style--three"
                                            ></textarea>
                                          </div>
                                        </div>

                                        <div class="form-group row">
                                          <label class="col-sm-3 col-lg-2 col-form-label">
                                            Time Period
                                          </label>
                                          <div class="col-sm-9 com-lg-10">
                                            <div class="d-flex align-items-center position-relative mb-2">
                                              <label class="custom-checkbox">
                                                <input
                                                  type="checkbox"
                                                  checked
                                                />
                                                <span class="checkmark"></span>
                                              </label>

                                              <span class="d-inline-block ml-4">
                                                I currently work here
                                              </span>
                                            </div>

                                            <div class="d-flex align-items-center">
                                              <div class="form-group mr-1">
                                                <select
                                                  class="form-control"
                                                  name="day"
                                                  id="exampleFormControlSelect8"
                                                >
                                                  <option>Day</option>
                                                  <option>1</option>
                                                  <option>2</option>
                                                  <option>3</option>
                                                  <option>4</option>
                                                  <option>5</option>
                                                  <option>6</option>
                                                  <option>7</option>
                                                  <option>8</option>
                                                  <option>9</option>
                                                  <option>10</option>
                                                  <option>11</option>
                                                  <option>12</option>
                                                  <option>13</option>
                                                  <option>14</option>
                                                  <option>15</option>
                                                  <option>16</option>
                                                  <option>17</option>
                                                  <option>18</option>
                                                  <option>19</option>
                                                  <option>20</option>
                                                  <option>21</option>
                                                  <option>22</option>
                                                  <option>23</option>
                                                  <option>24</option>
                                                  <option>25</option>
                                                  <option>26</option>
                                                  <option>27</option>
                                                  <option>28</option>
                                                  <option>29</option>
                                                  <option>30</option>
                                                </select>
                                              </div>
                                              <div class="form-group mr-1">
                                                <select
                                                  class="form-control"
                                                  name="month"
                                                  id="month6"
                                                >
                                                  <option>Month</option>
                                                  <option selected="">
                                                    January
                                                  </option>
                                                  <option>February</option>
                                                  <option>March</option>
                                                  <option>April</option>
                                                  <option>May</option>
                                                  <option>June</option>
                                                  <option>July</option>
                                                  <option>August</option>
                                                  <option>September</option>
                                                  <option>October</option>
                                                  <option>November</option>
                                                  <option>December</option>
                                                </select>
                                              </div>
                                              <div class="form-group">
                                                <select
                                                  class="form-control"
                                                  name="year"
                                                  id="year7"
                                                >
                                                  <option>Year</option>
                                                  <option>2019</option>
                                                  <option>2018</option>
                                                  <option>2017</option>
                                                  <option>2016</option>
                                                  <option>2015</option>
                                                  <option>2014</option>
                                                  <option>2013</option>
                                                  <option>2012</option>
                                                  <option>2011</option>
                                                  <option>2010</option>
                                                  <option>2009</option>
                                                  <option>2008</option>
                                                  <option>2007</option>
                                                  <option>2006</option>
                                                  <option>2005</option>
                                                  <option>2004</option>
                                                  <option>2003</option>
                                                  <option>2002</option>
                                                  <option>2001</option>
                                                  <option>2000</option>
                                                  <option>1999</option>
                                                  <option>1998</option>
                                                  <option>1997</option>
                                                  <option>1996</option>
                                                  <option>1995</option>
                                                  <option>1994</option>
                                                  <option>1993</option>
                                                  <option>1992</option>
                                                  <option>1991</option>
                                                  <option>1990</option>
                                                  <option>1989</option>
                                                  <option>1988</option>
                                                  <option>1987</option>
                                                  <option>1986</option>
                                                  <option>1985</option>
                                                  <option>1984</option>
                                                  <option>1983</option>
                                                  <option>1982</option>
                                                  <option>1981</option>
                                                  <option>1980</option>
                                                </select>
                                              </div>
                                              <div class="form-group ml-2">
                                                <span class="d-inline-block ml-2">
                                                  to present
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="row justify-content-end">
                                          <div class="col-sm-9 com-lg-10">
                                            <div class="d-flex">
                                              <button
                                                type="submit"
                                                class="change-card-btn c2"
                                              >
                                                Save Changes
                                              </button>
                                              <button
                                                type="reset"
                                                class="change-card-btn work-form-close ml-3"
                                              >
                                                Cancel
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="nav-basic"
                            role="tabpanel"
                          >
                            <div class="personal-info">
                              <h4 class="mb-3">Personal Information</h4>

                              <ul class="info-list list-unstyled">
                                <li>
                                  <span>First Name</span>{" "}
                                  {personalInfo.firstName}
                                </li>
                                <li>
                                  <span>Last Name</span> {personalInfo.lastName}
                                </li>
                                <li>
                                  <span>age</span> {personalInfo.age}
                                </li>
                                <li>
                                  <span>Position</span> {personalInfo.position}
                                </li>
                                <li>
                                  <span>Address</span>
                                  {personalInfo.address}
                                </li>
                                <li>
                                  <span>Phone</span>{" "}
                                  <a href={`tel:${personalInfo.phone}`}>
                                    {personalInfo.phone}
                                  </a>
                                </li>
                                <li>
                                  <span>Phone</span>{" "}
                                  <a href={`mailto:${personalInfo.email}`}>
                                    {personalInfo.email}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="nav-skill"
                            role="tabpanel"
                          >
                            <div class="skill">
                              <h4 class="mb-3">Skill</h4>

                              <ul class="skill-list list-unstyled">
                                <li>
                                  <span>UI Design</span>

                                  <div class="process-bar-wrapper style--five">
                                    <span
                                      class="process-bar"
                                      data-process-width="68"
                                    ></span>
                                  </div>
                                </li>

                                <li>
                                  <span>UX Design</span>

                                  <div class="process-bar-wrapper style--five pink">
                                    <span
                                      class="process-bar"
                                      data-process-width="90"
                                    ></span>
                                  </div>
                                </li>

                                <li>
                                  <span>HTML</span>

                                  <div class="process-bar-wrapper style--five green">
                                    <span
                                      class="process-bar"
                                      data-process-width="30"
                                    ></span>
                                  </div>
                                </li>

                                <li>
                                  <span>CSS</span>

                                  <div class="process-bar-wrapper style--five blue">
                                    <span
                                      class="process-bar"
                                      data-process-width="50"
                                    ></span>
                                  </div>
                                </li>

                                <li>
                                  <span>Wordpress</span>

                                  <div class="process-bar-wrapper style--five c2">
                                    <span
                                      class="process-bar"
                                      data-process-width="52"
                                    ></span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="modal fade"
              id="deleteConfirmModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Delete Work Experience
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Are you sure you want to delete Work Experience?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn long" data-dismiss="modal">
                      Cancel
                    </button>
                    <button type="button" class="btn long">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="modal fade"
              id="deleteConfirmEducationModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel2"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel2">
                      Delete School Experience
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Are you sure you want to delete School Experience?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn long" data-dismiss="modal">
                      Cancel
                    </button>
                    <button type="button" class="btn long">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUserProfile;
