import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css"
import { atom, selector, useSetRecoilState, useRecoilValue } from "recoil";
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


interface Bookmark {
  id?: string;
  title: string;
  //completed: boolean;
  tags: [],
  dateAdded: string
}

export const bookmarksState = atom({
  key: "bookmarks",
  default: [{title: "first bookmark", tags: [], dateAdded: ""}],
});

export const bookmarkTagsState = atom({
  key: "bookmarksTags",
  default: ["tags1", "tags2"],
});

export const infoValue = selector({
  key: "infoValue",
  get: ({ get }) => ({
    total: get(bookmarksState).length,
    //completed: get(bookmarksState).filter((bookmark) => bookmark.completed).length,
    //notCompleted: get(bookmarksState).filter((bookmark) => !bookmark.completed).length,
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
        <Container>
          <Row>
            <Col md={2}>
              hellohellhello
              <br/>
              <nav>
                <Link to="/add_bookmark">Add Bookmark</Link>
                <br/>
                <Link to="/add_bookmark_group">Add Bookmark Group</Link>
                <br/>
                <Link to="/add_bookmark_tag">Add Bookmark Tag</Link>
              </nav>
            </Col>
            <Col>
                <main>
                  <h2>Welcome to the homepage!!!</h2>
                  <p>You can do this, I believe in you.</p>
                  Bookmarks
                  <br/>
                  Bookmark groups
                  <br/>
                  Tags
                </main>
                <nav>
                  <Link to="/add_bookmark">Add Bookmark</Link>
                  <br/>
                  <Link to="/add_bookmark_group">Add Bookmark Group</Link>
                  <br/>
                  <Link to="/add_bookmark_tag">Add Bookmark Tag</Link>
                </nav>
                <br/>
                Your bookmarks
                <br/>
            </Col>
          </Row>
        </Container>
    </>
  );
}

function AddBookmarkGroup() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const setBookmarks = useSetRecoilState(bookmarksState);
  const bookmarks = useRecoilValue(bookmarksState);

  const addBookmarkGroup = () => {
    setBookmarks((currentBookmarks: any) => [
          ...currentBookmarks,
          {title: "second bookmark", tags: ["tag1", "tag2"], dateAdded: ""}
    ])
  }

  const onSubmit = (data: any) => {
    console.log("data" + data);
    addBookmarkGroup();
  }

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
          <input defaultValue="" {...register("group_title")} />
          <br/>
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: false })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          
          <input type="submit" />
        </form>
        <br/>
        {bookmarks.map((bookmark) => <>title{bookmark.title}{JSON.stringify(bookmark.tags)}<br/></>)}
      </main>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/bookmarks">Bookmarks</Link>
      </nav>
    </>
  );
}

function AddBookmarkTags() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const setBookmarks = useSetRecoilState(bookmarksState);
  const bookmarks = useRecoilValue(bookmarksState);

  const addBookmarkGroup = () => {
    setBookmarks((currentBookmarks: any) => [
          ...currentBookmarks,
          {title: "second bookmark"}
    ])
  }

  const onSubmit = (data: any) => {
    console.log("data" + data);
    addBookmarkGroup();
  }

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
      <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="" {...register("tag")} />
          <br/>
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: false })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          
          <input type="submit" />
        </form>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/bookmarks">Bookmarks</Link>
      </nav>
    </>
  );
}

function AddBookmark() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const setBookmarks = useSetRecoilState(bookmarksState);
  const bookmarks = useRecoilValue(bookmarksState);
  const bookmarkTags = useRecoilValue(bookmarkTagsState);
  const [chosenTags, setChosenTags] = useState(["", ""]);

  const addBookmark = () => {
    setBookmarks((currentBookmarks: any) => [
          ...currentBookmarks,
          {id: "1", title: "second bookmark", tags: ["tag1, tag2"], dateAdded: ""}
    ])
  }

  const onSubmit = (data: any) => {
    console.log("data" + data);
    addBookmark();
  }

  const handleChange = (e: any) => {

    //create selected tags array
    //push if chosen
    //pop/remove if not

    console.log(e.target.value);

  }

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
      <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input size={50} defaultValue="" {...register("link")} />
          <br/>
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("tabs", { required: false })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <br/>
          {bookmarkTags.map((tag) =>  <><input type="checkbox" onChange={handleChange} value={tag}/>{tag}here</>)}
          <br/>
          <input type="submit" />
        </form>
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
