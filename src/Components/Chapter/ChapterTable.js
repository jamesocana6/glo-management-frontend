import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchChaptersAsync,
  selectChapters,
} from "../../reduxStore/reducers/chapterSlice";
import ChangeChapterStatusModal from './ChangeChapterStatusModal';
import { selectModelChoices } from "../../reduxStore/reducers/modelChoicesSlice"
import { API_BASE_URL } from "../../utils/constants"

const ChapterTable = () => {
  const dispatch = useDispatch();
  const chapters = useSelector(selectChapters);
  const modelChoices = useSelector(selectModelChoices);


  useEffect(() => {
    dispatch(fetchChaptersAsync());
  }, [dispatch]);

  const [editingChapter, setEditingChapter] = useState(null);

  const handleEdit = (chapter) => {
    console.log(chapter);
    setEditingChapter(chapter);
  };

  const handleCloseModal = () => {
    setEditingChapter(null);
  };

  const handleSubmit = async (updateChapter) => {
    // Remove the recharter_date field from the updateChapter object if it remains untouched
    if (updateChapter.recharter_date === editingChapter.recharter_date ||
      updateChapter.recharter_date === "") {
      delete updateChapter.recharter_date;
    }

    await fetch(`${API_BASE_URL}/api/chapters/${editingChapter.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateChapter)
    });

    // Close the modal after the API call is complete
    handleCloseModal();
    // Fetch the updated data from the backend and refresh the parent component
    await dispatch(fetchChaptersAsync());

  };



  const chapterRows = Object.keys(chapters || {}).map((id) => {
    const chapter = chapters[id];
    return (
      <tr key={chapter.id}>
        <td>{chapter.greek_letter_assigned_txt}</td>
        <td>{chapter.chapter_school_txt}</td>
        <td>{chapter.city_state_txt}</td>
        <td>{chapter.original_founding_date}</td>
        <td>{modelChoices.CHAPTER_STATUS[chapter.chapter_status_txt]}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#chapterModal-${chapter.id}`}
            onClick={() => handleEdit(chapter)}
          >
            Edit
          </button>

        </td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Greek Letter</th>
            <th>Chapter School</th>
            <th>City and State</th>
            <th>Founding Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {chapterRows}
        </tbody>
      </table>
      {editingChapter && (
        <ChangeChapterStatusModal
          id={`chapterModal-${editingChapter.id}`}
          chapter={editingChapter}
          onSubmit={handleSubmit}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ChapterTable;