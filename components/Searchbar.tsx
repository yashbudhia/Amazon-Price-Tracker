"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react";

const isValidAmazonUrl = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostName = parsedURL.hostname;
    if (hostName.includes("amazon")) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

const Searchbar = () => {
  const [searchPrompt, setsearchPrompt] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonUrl(searchPrompt);
    if (!isValidLink) {
      alert("Please Provide a valid Amazon Link");
    }
    try {
      setisLoading(true);

      //scrape the product
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };
  return (
    <>
      <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchPrompt}
          onChange={(e) => setsearchPrompt(e.target.value)}
          placeholder="enter product link"
          className="searchbar-input"
        />
        <button
          type="submit"
          className="searchbar-btn"
          disabled={searchPrompt === ""}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
    </>
  );
};

export default Searchbar;
