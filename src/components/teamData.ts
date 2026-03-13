import { Person } from "./PersonCard";

export type Department = {
  title: string;
  members: Person[];
};

export const leadership: Person[] = [
  {
    name: "Naveen Bhat",
    role: "Principal Architect",
    img: "./images/team/naruto.jpg",
  },
  {
    name: "Ajay Appachu",
    role: "Studio Head",
    img: "./images/team/naruto.jpg",
  },
];

export const departments: Department[] = [
  {
    title: "Architecture",
    members: [
      { name: "Rajani", img: "./images/team/naruto.jpg" },
      { name: "Satish", img: "./images/team/naruto.jpg" },
      { name: "Preethi", img: "./images/team/naruto.jpg" },
      { name: "Shishir", img: "./images/team/naruto.jpg" },
    ],
  },
  {
    title: "Structural",
    members: [
      { name: "Vinay", img: "./images/team/naruto.jpg" },
      { name: "Selva", img: "./images/team/naruto.jpg" },
      { name: "Ajit", img: "./images/team/naruto.jpg" },
    ],
  },
  {
    title: "MEP",
    members: [
      { name: "Shrinath", role: "PHE / Fire", img: "./images/team/naruto.jpg" },
      { name: "Kumar", role: "Electrical", img: "./images/team/naruto.jpg" },
      { name: "Karthik", role: "Mechanical", img: "./images/team/naruto.jpg" },
      { name: "Pruthvi", role: "IT / BMS", img: "./images/team/naruto.jpg" },
    ],
  },
  {
    title: "General",
    members: [
      { name: "Sahana", img: "./images/team/naruto.jpg" },
      { name: "Sushmita", img: "./images/team/naruto.jpg" },
      { name: "Anand", img: "./images/team/naruto.jpg" },
      { name: "Karthik", img: "./images/team/naruto.jpg" },
    ],
  },
  {
    title: "PMC",
    members: [
      { name: "Murugesan", img: "./images/team/naruto.jpg" },
      { name: "Praveen", img: "./images/team/naruto.jpg" },
      { name: "Srinidhi", img: "./images/team/naruto.jpg" },
      { name: "Kumar", img: "./images/team/naruto.jpg" },
      { name: "Arun", img: "./images/team/naruto.jpg" },
    ],
  },
  {
    title: "Admin",
    members: [
      { name: "Ashok", img: "./images/team/naruto.jpg" },
      { name: "Ramachandra", img: "./images/team/naruto.jpg" },
      { name: "Pratap", img: "./images/team/naruto.jpg" },
      { name: "Giri", img: "./images/team/naruto.jpg" },
    ],
  },
];
