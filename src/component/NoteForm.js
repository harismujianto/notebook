import React, { useState } from 'react';

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [titleLengthError, setTitleLengthError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length > 50) {
      setTitleLengthError(true);
    } else {
      const createdAt = new Date(); // Get the current date and time
      const newNote = {
        title,
        body,
        createdAt: createdAt.toISOString(), // Convert the date to ISO string format
      };
      onAddNote(newNote);
      setTitle('');
      setBody('');
      setTitleLengthError(false);
    }
  };
  

  return (
    <div className='col-md-6 mx-auto'>
      <form
        onSubmit={handleSubmit}
        >
          <h3 className='text-center'>Buat Catatan</h3>
        <div
            className="mb-3"
            >
          <input
            type="text"
            className={`form-control ${titleLengthError ? 'is-invalid' : ''}`}
            id="title"
            placeholder='Judul Catatan'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {titleLengthError && (
            <div className="invalid-feedback">Judul tidak boleh lebih dari 50 karakter.</div>
          )}
        </div>
        <div
            className="mb-3"
            >
          <textarea
            className="form-control"
            id="body"
            rows="5"
            value={body}
            placeholder='Isi Catatan'
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <button
            type="submit"
            className="btn btn-primary"
            >
          Tambah Catatan
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
