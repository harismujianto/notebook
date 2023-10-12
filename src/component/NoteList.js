import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDeleteNote, onArchiveNote, searchKeyword }) => {
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div>
      {filteredNotes.length === 0 ? (
        <h4 className='text-center text-secondary'>Tidak ada catatan</h4>
      ) : (
        <div className="row">
          {filteredNotes.map((note) => (
            <div className="col-md-4" key={note.id}>
              <Note
                note={note}
                onDeleteNote={onDeleteNote}
                onArchiveNote={onArchiveNote}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteList;
