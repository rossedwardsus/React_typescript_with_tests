import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import './App.css';

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
        <Link to="/about">About</Link>
        <Link to="/bookmarks">Bookmarks</Link>
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
        <Route path="add_bookmark_groups" element={<AddBookmarkGroup />} />
        <Route path="add_bookmark_tags" element={<AddBookmarkTags />} />
        <Route path="add_bookmark" element={<AddBookmark />} />
      </Routes>
    </div>
  );
}

export default App;
