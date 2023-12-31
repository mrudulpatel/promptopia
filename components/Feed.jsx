"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};



const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt", {
        method: "GET",
      });
      const data = await response.json();
      setPrompts(data);
      setSearchText("");
    }

    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {}

  return (
    <section className="feed">

      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username..."
          value={searchText}
          onChange={handleSearchChange}
          className="search_input"
        />
      </form>

      <PromptCardList 
        data={prompts}
        handleTagClick={() => {}}
      />
    </section>
  );
};

export default Feed;
