import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export const LINKS = [
  {
    name: "Home",
    linkTo: "/"
  },
  {
    name: "Rooms",
    linkTo: "/rooms"
  }
];

export const BANNERS = {
  home: {
    title: "luxurious rooms",
    subtitle: "deluxe rooms starting at $299",
    buttonName: "our rooms",
    linkTo: "/rooms"
  },
  rooms: {
    title: "our rooms",
    subtitle: "",
    buttonName: "return home",
    linkTo: "/"
  },
  errors: {
    title: "Oops! something when wrong",
    subtitle: "Error 404 - page not found",
    buttonName: "return home",
    linkTo: "/"
  }
};

export const servicesContent = [
  {
    title: "free cocktails",
    icon: <FaCocktail />,
    content:
      "Culpa ipsum consectetur pariatur veniam do dolore officia. Irure fugiat culpa enim ipsum reprehenderit sint ut do est non duis ex."
  },
  {
    title: "hiking",
    icon: <FaHiking />,
    content:
      " Pariatur consequat ad qui proident ut. Id est duis culpa ex eiusmod ad et ea qui."
  },
  {
    title: "shuttle",
    icon: <FaShuttleVan />,
    content:
      "Labore tempor fugiat do officia sunt Lorem laboris amet deserunt mollit culpa excepteur ipsum. Commodo magna cillum laborum qui mollit."
  },
  {
    title: "strongest beer",
    icon: <FaBeer />,
    content:
      "Labore tempor fugiat do officia sunt Lorem laboris amet deserunt mollit culpa excepteur ipsum. Commodo magna cillum laborum qui mollit."
  }
];
