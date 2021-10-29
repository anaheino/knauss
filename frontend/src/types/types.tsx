import React from "react";

export type WorkHistory ={
    title: string,
    text: string,
    yearsActive: string
};
export type Bio = {
    title: string,
    items: BioItem[]
};
export type BioItem = {
  title: string,
  details: {
      text: string,
      additional: string
  }
};
export type Header = {
  name: string,
  title: string
};
export type Picture = {
    url: string,
    title: string
};
export type RogerType = {
  workHistory: WorkHistory[],
  bio: Bio,
  header: Header,
  pictures: Picture[]
};