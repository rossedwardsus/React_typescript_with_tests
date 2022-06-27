import React, { useState } from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css"
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import './App.css';


export interface Bookmark {
  id?: string;
  title: string;
  completed: boolean;
}

export const bookmarksState = atom({
  key: "bookmarks",
  default: [] as Bookmark[],
});

export const infoValue = selector({
  key: "infoValue",
  get: ({ get }) => ({
    total: get(bookmarksState).length,
    completed: get(bookmarksState).filter((bookmark) => bookmark.completed).length,
    notCompleted: get(bookmarksState).filter((bookmark) => !bookmark.completed).length,
  }),
});

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        Bookmarks
        <br/>
        <br/>
        Bookmark groups
        <br/>
        Bookmark Tags
      </main>
      <nav>
        <Link to="/about">About</Link>
        <br/>
        <Link to="/bookmarks">Bookmarks</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function Bookmarks() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        Bookmarks
        <br/>
        Bookmark groups
        <br/>
        Tags
      </main>
      <nav>
        <Link to="/add_bookmark_group">Add Bookmark Group</Link>
        <br/>
        <Link to="/add_bookmark_tag">Add Bookmark Tag</Link>
      </nav>
      <br/>
      Your bookmarks
      <br/>
    </>
  );
}

function AddBookmarkGroup() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const [bookmarkss, seookmarkss] = useRecoilState(bookmarksState);

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        Bookmarks
        <br/>
        Bookmark groups
        <br/>
        Tags
        <br/>
        <br/>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register("group_name")} />
          
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          
          <input type="submit" />
        </form>
      </main>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/bookmarks">Bookmarks</Link>
      </nav>
    </>
  );
}

function AddBookmarkTags() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        Bookmarks
        <br/>
        Bookmark groups
        <br/>
        Tags
      </main>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/bookmarks">Bookmarks</Link>
      </nav>
    </>
  );
}

function AddBookmark() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        Bookmarks
        <br/>
        Bookmark groups
        <br/>
        Tags
      </main>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/bookmarks">Bookmarks</Link>
      </nav>
    </>
  );
}

function BookmarkMenu() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        Bookmarks
        <br/>
        Bookmark groups
        <br/>
        Tags
      </main>
      <nav>
        <Link to="/about">Add Bookmark Group</Link>
        <Link to="/about">Add Bookmark Tag</Link>
        <Link to="/bookmarks">Bookmarks</Link>
      </nav>
    </>
  );
}






function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="add_bookmark_group" element={<AddBookmarkGroup />} />
        <Route path="add_bookmark_tags" element={<AddBookmarkTags />} />
        <Route path="add_bookmark" element={<AddBookmark />} />
      </Routes>
    </div>
  );
}

export default App;
