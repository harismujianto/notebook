import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

const MainNote = () => {
    
    const [notes, setNotes] = useState([
      {
        id: 1,
        title: "Babel",
        body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
      },
      {
        id: 2,
        title: "Functional Component",
        body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
      },
      {
        id: 3,
        title: "Modularization",
        body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
      },
      {
        id: 4,
        title: "Lifecycle",
        body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
      },
      {
        id: 5,
        title: "ESM",
        body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
      },
      {
        id: 6,
        title: "Module Bundler",
        body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
      },
    ]);

    const [archivedNotes, setArchivedNotes] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [showArchived, setShowArchived] = useState(false);
    
    const deleteNote = (id) => {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
    };
  
    const addNote = (newNote) => {
      newNote.id = Date.now();
      setNotes([...notes, newNote]);
    };
  
    const archiveNote = (id) => {
      const noteToArchive = notes.find((note) => note.id === id);
      const noteToUnarchive = archivedNotes.find((note) => note.id === id);
      if (noteToArchive) {
        setArchivedNotes([...archivedNotes, noteToArchive]);
        deleteNote(id);
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
      }else{
        noteToUnarchive.archive = false;
        setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
        setNotes([...notes, noteToUnarchive]);
      }
    };

    return (
      <div
        className="container"
        >
         <div
            className='d-flex justify-content-between align-items-center'
            >
            <h4
                className='text-center'
                >Notes
                </h4>  
          <input
                type="text"
                className="form-control mb-3 ms-5 mt-2"
                placeholder="Cari catatan..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
        </div>
        <div
            className="row"
            >
            <NoteForm onAddNote={addNote} />
          <div
            className='d-flex justify-content-between align-items-center mb-4'
            >
              <h3
                className='text-center mt-3 '
                >
                    {showArchived ? 'Arsip' : 'Catatan Aktif'}
                    </h3>
              <button
                className={showArchived ? "btn btn-secondary" : "btn btn-success"}
                onClick={() => setShowArchived(!showArchived)}
              >
                {showArchived ? 'Sembunyikan Arsip' : 'Tampilkan Arsip'}
              </button>
          </div>
          
            <NoteList
              notes={showArchived ? archivedNotes : notes} // Tampilkan arsip jika showArchived true
              onDeleteNote={deleteNote}
              onArchiveNote={archiveNote}
              searchKeyword={searchKeyword}
            />
        </div>
      </div>
    );
  }
  
export default MainNote;
  
