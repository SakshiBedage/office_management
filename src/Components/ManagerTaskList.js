import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "../assets/plugins/jquery-ui/jquery-ui.min";
import "../assets/js/custom.project.management";
import "../assets/js/script";
import "../assets/plugins/bootstrap-datepicker/custom-datepicker";

const DEFAULT_BOARD = {
  title: "",
  items: [],
  showAddCard: false,
};

function ManagerTaskList() {
  const [boards, setBoards] = useState([]);

  const [newCardTitle, setNewCardTitle] = useState("");
  const [showAddCard, setShowAddCard] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);
  const [showAddCardForm, setShowAddCardForm] = useState(
    Array(boards.length).fill(false)
  );
  const [showAddListForm, setShowAddListForm] = useState(false);

  useEffect(() => {
    async function fetchBoards() {
      try {
        const response = await axios.get(
          "http://your-laravel-api-url/api/boards"
        );
        setBoards(response.data);
        setShowAddCardForm(new Array(response.data.length).fill(false));
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    }

    fetchBoards();
  }, []);

  const addBoardCard = async (e, boardIndex) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://your-laravel-api-url/api/boards/${boards[boardIndex].id}/cards`,
        {
          title: newCardTitle,
          // Add any additional data needed for your card creation
        }
      );

      const updatedBoards = [...boards];
      updatedBoards[boardIndex] = response.data; // Assuming the server responds with the updated board
      setBoards(updatedBoards);
      setShowAddCardForm((prev) => ({
        ...prev,
        [boardIndex]: false,
      }));
      setNewCardTitle("");
    } catch (error) {
      console.error("Error adding card:", error);
    }
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

  const handleDragStart = (boardIndex, itemIndex) => {
    setDraggedItem({ boardIndex, itemIndex });
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

      // Add the item to the destination board
      updatedBoards[boardIndex].items.splice(itemIndex, 0, draggedItemData);

      setBoards(updatedBoards);
      setDraggedItem(null);
    }
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const toggleAddListForm = () => {
    // Toggle the "Add another list" form
    setShowAddListForm(!showAddListForm);
  };

  const imgStyle = {
    position: "relative",
    zIndex: "1",
  };

  return (
    <>
      <div className="main-content d-flex flex-column flex-md-row">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="project-header d-flex align-items-md-center media flex-column flex-md-row card_color-bg mb-30">
                <div className="project-header-left media-body d-flex align-items-center w-100 mr-md-4">
                  <div className="dropdown-button">
                    <a
                      href="#"
                      className="d-flex align-items-center"
                      data-toggle="dropdown"
                    >
                      <div className="menu-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </a>
                    <div className="dropdown-menu">
                      <a href="#">Daily</a>
                      <a href="#">Sort By</a>
                      <a href="#">Monthly</a>
                    </div>
                  </div>

                  <div className="add-new-contact mr-20">
                    <a href="project.html" className="btn-home">
                      <img
                        src="../../../assets/img/svg/home.svg"
                        alt=""
                        className="svg"
                      />
                    </a>
                  </div>
                  <div className="star mr-20">
                    <a href="#">
                      <img
                        src="../../../assets/img/svg/star.svg"
                        alt=""
                        className="svg"
                      />
                    </a>
                  </div>
                  <div className="title">
                    <h4 className="font-20">Thriving Technologies</h4>
                  </div>
                </div>

                <div className="project-header-right d-flex align-items-center justify-content-md-end flex-wrap mt-3 mt-md-0">
                  <div className="main-header-notification mb-2 mb-sm-0">
                    <a href="#" className="header-icon notification-icon">
                      <span
                        className="count"
                        data-bg-img="../../../assets/img/count-bg.png"
                      >
                        4
                      </span>
                      <img
                        src="../../../assets/img/svg/notification-icon.svg"
                        alt=""
                        className="svg"
                      />
                    </a>
                  </div>

                  <div className="member style--two d-flex mb-2 mb-sm-0">
                    <a href="#">
                      <img src="../../../assets/img/avatar/m27.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="../../../assets/img/avatar/m12.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="../../../assets/img/avatar/m2.png" alt="" />
                    </a>
                    <a href="#" className="btn-circle task-header">
                      <img
                        src="../../../assets/img/svg/plus_white.svg"
                        alt=""
                        style={imgStyle}
                      />
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
                    <div className="dropdown-button">
                      <a
                        href="#"
                        className="d-flex align-items-center"
                        data-toggle="dropdown"
                      >
                        <div className="menu-icon justify-content-center style--two mr-0">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
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
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            padding: "10px",
                            color: "white",
                            opacity:
                              draggedItem &&
                              draggedItem.boardIndex === boardIndex &&
                              draggedItem.itemIndex === itemIndex
                                ? 1
                                : 1,
                          }}
                          draggable
                          onDragStart={() =>
                            handleDragStart(boardIndex, itemIndex)
                          }
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={() => handleDragOver(boardIndex, itemIndex)}
                          onDragEnd={handleDragEnd}
                        >
                          <p className="white mb-2">
                            <p className="white mb-2">{item.title}</p>
                          </p>
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
                    <div
                      className={`add-card w-100 ${
                        board.showAddCardForm ? "" : "hidden"
                      }`}
                    >
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
                        className={`add-card w-100 ${
                          board.showAddCard ? "" : "hidden"
                        }`}
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
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagerTaskList;
