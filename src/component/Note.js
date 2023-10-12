import React from 'react';
import { format } from 'date-fns';
import idLocale from 'date-fns/locale/id';


const Note = ({ note, onDeleteNote, onArchiveNote, showArchived }) => {
  const parsedDatetime = new Date(note.createdAt);
  const formattedDatetime = format(parsedDatetime, "EEEE, d MMMM yyyy", { locale: idLocale });

  return (
    <div
      className="card mb-3"
      >
      <div
        className="card-body"
        >
        <h5
          className="card-title"
        >
          {note.title}
          </h5>
        <p
          className="card-text"
          >
            {note.body}
            </p>
        <p
          className='text-secondary'
          >
            {formattedDatetime}
          </p>
        <button
          className="btn btn-success btn-sm"
          onClick={() => onArchiveNote(note.id)}
        >
          {showArchived ? 'Pindahkan' : 'Arsipkan'}
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDeleteNote(note.id)}
        >
          Hapus
        </button>
      </div>
  </div>
  );
};

export default Note;