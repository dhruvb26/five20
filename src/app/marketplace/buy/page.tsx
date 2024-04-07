"use client";

import React, { useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Input } from "@/components/ui/input";
export default function BuyPage() {
  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState("");
  // Projects data
  const projects = [
    {
      title: "Lettuce",
      price: "$2.5/lbs",
      quantity: "10 lbs",
      bestBy: "04/10/24",
      supplier: "The Taj Mahal, (Grade-A)",
      ETA: "20 min",
      imageLink:
        "https://foodprint.org/wp-content/uploads/2018/10/AdobeStock_195401764.jpeg",
    },
    // Add other projects here
    {
      title: "Potatoes",
      price: "$1.25/lbs",
      quantity: "30 lbs",
      bestBy: "04/20/24",
      supplier: "Spinelli's, (Grade-A)",
      ETA: "15 min",
      imageLink: "https://thumbs.dreamstime.com/b/bags-potatoes-20594198.jpg",
    },
    {
      title: "Tomatoes",
      price: "$1.99/lbs",
      quantity: "20 lbs",
      bestBy: "04/15/24",
      supplier: "Trader Joe's, (Grade-A)",
      ETA: "5 min",
      imageLink:
        "https://extension.umaine.edu/publications/wp-content/uploads/sites/52/2019/06/tomatoes-for-sale.jpg",
    },
    {
      title: "Onions",
      price: "$1.3/lbs",
      quantity: "25 lbs",
      bestBy: "04/25/24",
      supplier: "Delhi Palace, (Grade-B)",
      ETA: "30 min",
      imageLink: "https://freerangestock.com/sample/2853/onions.jpg",
    },
    {
      title: "Cheese",
      price: "$6/lbs",
      quantity: "15 lbs",
      bestBy: "04/10/2024",
      supplier: "Pomo's Pizzeria, (Grade-A)",
      ETA: "15 min",
      imageLink:
        "https://modernfarmer.com/wp-content/uploads/2022/05/shutterstock_636694300.jpg",
    },
    {
      title: "Garlic",
      price: "$2/lbs",
      quantity: "15 lbs",
      bestBy: "04/20/2024",
      supplier: "Haji Baba, (Grade-B)",
      ETA: "50 min",
      imageLink:
        "https://images.ctfassets.net/3s5io6mnxfqz/19qmvvoQDYw7HMMj0Lj0Wp/fbd27a6c3f652ac5b541fea42250bb5c/AdobeStock_244542183.jpeg",
    },
  ];

  // Filter projects based on the search term
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen p-40">
      <div className="search-div w-[40%] items-start">
        <Input
          type="text"
          placeholder="Search..."
          className="mb-4 p-2 border rounded ml-4 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredProjects.length > 0 ? (
        <HoverEffect items={filteredProjects} />
      ) : (
        <div>No match found.</div>
      )}
    </div>
  );
}
