import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const DEFAULT_BOARD = {
  title: "",
  items: [],
  showAddCard: false,
};

function CreateSuperAdmin() {
  const [boards, setBoards] = useState([
    {
      ...DEFAULT_BOARD,
      title: "Things To Do",
      items: [{ title: "Task 1", date: "2022-01-01" }],
    },
    {
      ...DEFAULT_BOARD,
      title: "Doing",
      items: [{ title: "Task 2", date: "2022-01-02" }],
    },
    {
      ...DEFAULT_BOARD,
      title: "Done",
      items: [{ title: "Task 3", date: "2022-01-03" }],
    },
  ]);

  const [newCardTitle, setNewCardTitle] = useState("");
  const [draggedItem, setDraggedItem] = useState(null);
  const [showAddCardForm, setShowAddCardForm] = useState(
    Array(boards.length).fill(false)
  ); // Use -1 to represent no form is open initially
  const [showAddListForm, setShowAddListForm] = useState(false);

  const addBoardCard = (e, boardIndex) => {
    e.preventDefault();

    const updatedBoards = [...boards];
    updatedBoards[boardIndex] = {
      ...updatedBoards[boardIndex],
      items: [
        ...updatedBoards[boardIndex].items,
        {
          title: newCardTitle,
          date: new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
          }),
        },
      ],
    };

    setBoards(updatedBoards);
    setNewCardTitle("");
    // Close the form after adding a card
    setShowAddCardForm(Array(boards.length).fill(false));
  };

  const toggleAddCardForm = (boardIndex) => {
    // Toggle the form for the clicked board
    setShowAddCardForm((prev) => ({
      ...prev,
      [boardIndex]: !prev[boardIndex],
    }));
  };
  const cancelAddCard = (boardIndex) => {
    // Close the form when cancel is clicked
    setShowAddCardForm((prev) => ({ ...prev, [boardIndex]: false }));
    setNewCardTitle("");
  };

  const addAnotherList = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const title = e.target.value.trim();

      if (title !== "") {
        const newBoard = {
          title,
          items: [],
          showAddCard: false,
        };

        setBoards((prevBoards) => [...prevBoards, newBoard]);
        e.target.value = "";
      }
    }
  };

  const [draggedItemStyle, setDraggedItemStyle] = useState({});

  const handleDragStart = (boardIndex, itemIndex) => {
    setDraggedItem({ boardIndex, itemIndex });
    setDraggedItemStyle({ border: "2px dashed #007bff" });
  };

  const handleDragOver = (boardIndex, itemIndex) => {
    if (draggedItem) {
      const updatedBoards = [...boards];
      const draggedBoardIndex = draggedItem.boardIndex;
      const draggedItemIndex = draggedItem.itemIndex;
      const draggedItemData =
        updatedBoards[draggedBoardIndex].items[draggedItemIndex];

      // Remove the item from the source board
      updatedBoards[draggedBoardIndex].items.splice(draggedItemIndex, 1);

      // Check if the destination list is empty
      if (updatedBoards[boardIndex].items.length === 0) {
        updatedBoards[boardIndex].items.push(draggedItemData);
      } else {
        // Add the item to the destination board
        updatedBoards[boardIndex].items.splice(itemIndex, 0, draggedItemData);
      }

      setBoards(updatedBoards);
      setDraggedItem(null);
    }
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDraggedItemStyle({});
  };

  const toggleAddListForm = () => {
    // Toggle the "Add another list" form
    setShowAddListForm(!showAddListForm);
  };

  useEffect(() => {
    const openModalOnImageClick = () => {
      const img = document.querySelector(".btn-circle img");
      const modal = document.getElementById("projectMemberModal");

      img.addEventListener("click", () => {
        modal.style.display = "block";
      });
    };

    openModalOnImageClick();
  }, []);

  const imgStyle = {
    position: "relative",
    zIndex: "1",
  };

  const [boardTitle, setBoardTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/save-board-title", {
        title: boardTitle,
      });
      console.log(response.data); // Handle the response from the server
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleAddBoard = async () => {
    try {
      const response = await axios.post("/api/add-board", {
        title: newBoardTitle,
      });
      setBoards([...boards, response.data]);
      setNewBoardTitle(""); // Clear the input field
    } catch (error) {
      console.error("Error adding board:", error);
    }
  };

  return (
    <>
      <div className="main-content d-flex flex-column flex-md-row">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="project-header d-flex align-items-md-center media flex-column flex-md-row card_color-bg mb-30">
                <div class="project-header-left media-body d-flex align-items-center w-100 mr-md-4">
                  <div class="add-new-contact mr-20">
                    <a href="project.html" class="btn-home">
                      <img
                        src="../../../assets/img/svg/home.svg"
                        alt=""
                        class="svg"
                      />
                    </a>
                  </div>
                  <div class="star mr-20">
                    <a href="#">
                      <img
                        src="../../../assets/img/svg/star.svg"
                        alt=""
                        class="svg"
                      />
                    </a>
                  </div>
                  <form onSubmit={handleSubmit} class="add-title flex-grow">
                    <input
                      type="text"
                      class="theme-input-style bold"
                      placeholder="Board title"
                      value={boardTitle}
                      onChange={(e) => setBoardTitle(e.target.value)}
                    />
                  </form>
                </div>

                <div class="project-header-right d-flex align-items-center justify-content-md-end flex-wrap mt-3 mt-md-0">
                  <div class="member style--two d-flex mb-2 mb-sm-0">
                    <a href="#">
                      <img src="../../../assets/img/avatar/m2.png" alt="" />
                    </a>
                    <a href="#" class="btn-circle">
                      <img
                        src="../../../assets/img/svg/plus_white.svg"
                        alt=""
                        style={imgStyle}
                        onClick={() => {
                          const modal =
                            document.getElementById("projectMemberModal");
                          if (modal) {
                            modal.style.display = "block";
                          }
                        }}
                      />
                    </a>
                  </div>

                  <div class="create-new-board mb-2 mb-sm-0">
                    <a href="#" class="btn">
                      save Now
                    </a>
                  </div>

                  <div class="">
                    <a
                      href="#"
                      class="close-btn d-flex align-items-center justify-content-center"
                    >
                      <i class="icofont-close-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="board-wrapper">
            {boards.map((board, boardIndex) => (
              <div
                key={boardIndex}
                className="col-md-4 "
                style={{ marginBottom: "20px" }}
              >
                <div className="board">
                  <div className="board-header d-flex justify-content-between align-items-center mb-10">
                    <h4 className="c2">{board.title}</h4>

                    <div class="dropdown-button">
                      <a
                        href="#"
                        class="d-flex align-items-center"
                        data-toggle="dropdown"
                      >
                        <div class="menu-icon justify-content-center style--two mr-0">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a href="#">Daily</a>
                        <a href="#">Sort By</a>
                        <a href="#">Monthly</a>
                      </div>
                    </div>
                  </div>

                  <div className="board-cards">
                    {board.items.map((item, itemIndex) => (
                      <div
                        key={`${boardIndex}-${itemIndex}`}
                        className="card-container"
                      >
                        <div
                          className="card"
                          style={{
                            marginBottom: "10px",
                            border: "1px solid #007bff",
                            borderRadius: "5px",
                            padding: "10px",
                            color: "white",
                            opacity:
                              draggedItem &&
                              draggedItem.boardIndex === boardIndex &&
                              draggedItem.itemIndex === itemIndex
                                ? "scale(1.05)" // Slightly scale the card during drag
                                : "scale(1)",
                          }}
                          draggable
                          onDragStart={() =>
                            handleDragStart(boardIndex, itemIndex)
                          }
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={() => handleDragOver(boardIndex, itemIndex)}
                          onDragEnd={handleDragEnd}
                        >
                          <p className="white mb-2">{item.title}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="left d-flex align-items-center">
                              <a
                                href="#"
                                className="text_color font-12"
                                style={{ cursor: "pointer" }}
                              >
                                {item.date}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="board-composer flex-column d-flex align-items-center justify-content-center">
                    <div className="add-card w-100">
                      <a
                        href="#"
                        className="add-another-card"
                        onClick={() => toggleAddCardForm(boardIndex)}
                      >
                        <img
                          src="../../../assets/img/svg/plus.svg"
                          alt=""
                          class="svg mr-1"
                        ></img>
                        <span className="font-14 bold c4">
                          Add another card
                        </span>
                      </a>
                    </div>
                    {showAddCardForm[boardIndex] && (
                      <form
                        onSubmit={(e) => addBoardCard(e, boardIndex)}
                        className="add-card w-100"
                      >
                        <textarea
                          className="theme-input-style style--five"
                          placeholder="List Title"
                          value={newCardTitle}
                          onChange={(e) => setNewCardTitle(e.target.value)}
                        ></textarea>

                        <div className="d-flex align-items-center justify-content-between mt-2">
                          <div className="actions">
                            <a
                              href="#"
                              className="cancel font-14 bold mr-3"
                              onClick={() => cancelAddCard(boardIndex)}
                            >
                              Cancel
                            </a>
                            <button type="submit" className="btn save">
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="col-md-4">
              <div className="board w-100" style={{ marginBottom: "20px" }}>
                <div className="board-header d-flex justify-content-between align-items-center mb-10">
                  <h4 className="c4" style={{ margin: 0 }}>
                    Add another list
                  </h4>
                  <span
                    className="btn-circle style--three mr-2"
                    style={{ margin: 0, padding: 0 }}
                  >
                    <img
                      src="../../../assets/img/svg/plus_white.svg"
                      alt=""
                      className="svg"
                      onClick={toggleAddListForm} // Toggle the "Add another list" form on click
                    />
                  </span>
                </div>
                <div className="board-composer flex-column d-flex justify-content-center">
                  {showAddListForm && (
                    <input
                      type="text"
                      className="add-card add-another-list"
                      placeholder="List Title"
                      onKeyPress={addAnotherList}
                      style={{ color: "white" }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="projectMemberModal">
        <div class="modal-content">
          <div class="modal-header justify-content-center pt-0">
            <h6 class="title text_color">Members</h6>

            <div class="modal-close">
              <img src="../../../assets/img/svg/close.svg" alt="" class="svg" />
            </div>
          </div>
          <div class="modal-body p-0">
            <form class="search-form mb-3">
              <input
                type="search"
                class="theme-input-style"
                placeholder="Search Members"
              />
            </form>

            <h6 class="mb-2 text_color">Board Members</h6>
            <ul class="board-members-list list-unstyled mb-2">
              <li class="member-item">
                <a
                  class="name select-member d-flex align-items-center p-1"
                  href="#"
                  title="Timothy Littel"
                >
                  <span class="member" title="Timothy Littel">
                    <img
                      src="../../../assets/img/avatar/m4.png"
                      class="img-30 mr-2"
                      alt=""
                    />
                  </span>
                  <span class="full-name">Timothy Littel</span>

                  <span class="icon-check checked-icon"></span>
                </a>
              </li>

              <li class="member-item">
                <a
                  class="name select-member d-flex align-items-center p-1"
                  href="#"
                  title="Ripon Hossain Chopol"
                >
                  <span class="member" title="Ripon Hossain Chopol">
                    <img
                      src="../../../assets/img/avatar/m5.png"
                      class="img-30 mr-2"
                      alt=""
                    />
                  </span>
                  <span class="full-name">Ripon Hossain Chopol</span>

                  <span class="icon-check checked-icon"></span>
                </a>
              </li>

              <li class="member-item">
                <a
                  class="name select-member d-flex align-items-center p-1"
                  href="#"
                  title="Timothy Littel"
                >
                  <span class="member" title="Timothy Littel">
                    <img
                      src="../../../assets/img/avatar/m4.png"
                      class="img-30 mr-2"
                      alt=""
                    />
                  </span>
                  <span class="full-name">Timothy Littel</span>

                  <span class="icon-check checked-icon"></span>
                </a>
              </li>

              <li class="member-item">
                <a
                  class="name select-member d-flex align-items-center p-1"
                  href="#"
                  title="Timothy Littel"
                >
                  <span class="member" title="Timothy Littel">
                    <img
                      src="../../../assets/img/avatar/m4.png"
                      class="img-30 mr-2"
                      alt=""
                    />
                  </span>
                  <span class="full-name">Timothy Littel</span>

                  <span class="icon-check checked-icon"></span>
                </a>
              </li>

              <li class="member-item">
                <a
                  class="name select-member d-flex align-items-center p-1"
                  href="#"
                  title="Timothy Littel"
                >
                  <span class="member" title="Timothy Littel">
                    <img
                      src="../../../assets/img/avatar/m4.png"
                      class="img-30 mr-2"
                      alt=""
                    />
                  </span>
                  <span class="full-name">Timothy Littel</span>

                  <span class="icon-check checked-icon"></span>
                </a>
              </li>

              <li class="member-item">
                <a
                  class="name select-member d-flex align-items-center p-1"
                  href="#"
                  title="Timothy Littel"
                >
                  <span class="member" title="Timothy Littel">
                    <img
                      src="../../../assets/img/avatar/m4.png"
                      class="img-30 mr-2"
                      alt=""
                    />
                  </span>
                  <span class="full-name">Timothy Littel</span>

                  <span class="icon-check checked-icon"></span>
                </a>
              </li>

              <li class="member-item">
                <a
                  class="name select-member d-flex align-items-center p-1"
                  href="#"
                  title="Timothy Littel"
                >
                  <span class="member" title="Timothy Littel">
                    <img
                      src="../../../assets/img/avatar/m4.png"
                      class="img-30 mr-2"
                      alt=""
                    />
                  </span>
                  <span class="full-name">Timothy Littel</span>

                  <span class="icon-check checked-icon"></span>
                </a>
              </li>
            </ul>
            <a href="#" class="light-btn d-block text-center">
              Show other Team Members
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateSuperAdmin;
