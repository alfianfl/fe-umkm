import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './style.scss';

function AddDiscussion() {
  const editorRef = useRef();
  const [inputValue, setInputValue] = useState({
    judul: '',
    isi: ''
  });

  return (
    <div className="site-add-forum container mx-auto mt-40">
      {' '}
      <section className="title">
        <div>
          <h1>Buat Diskusi</h1>
          <p>
            Buat obrolan diskusi Anda bersama banyak orang di forum diskusi ini
          </p>
        </div>
      </section>
      <section className="forum-form p-4">
        <div className="flex flex-col ">
          <label className="text-left font-semibold mb-2" htmlFor="judul">
            Judul Diskusi
          </label>
          <div className="form-input flex items-center bg-white rounded mb-4">
            <input
              className="w-full h-12 focus:outline-none p-2"
              type="text"
              name="judul"
              placeholder="Masukkan judul diskusi terbaru Anda"
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <label className="text-left font-semibold mb-2" htmlFor="isi">
            Isi Deskripsi Diskusi
          </label>
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            onEditorChange={(newText) =>
              setInputValue({
                ...inputValue,
                isi: newText
              })
            }
          />
        </div>
        <div className="button-posting w-full flex justify-end my-4">
          <button className="bg-orange-500 hover:bg-orange-600 font-bold text-white rounded shadow-md px-6 py-1">
            Posting
          </button>
        </div>
      </section>
    </div>
  );
}

export default AddDiscussion;
