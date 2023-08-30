import { atom } from 'recoil';

export const user = atom({
  key: 'user',
  default: false

});

export const videoPlayerData = atom({
    key: 'videoPlayerData',
    default: []
  
  });

export const videoData = atom({
  key: 'videoData ',
  default: [
    {
        id:1,
        video:"https://www.youtube.com/embed/bBpKJccIdvQ",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98hgAP5KTeU-_BGFWd7FTCmiH2iiwjhgCTe-0VLH8SQ&usqp=CAU&ec=48665701",
        heading:"Course introduction-Part-1",
        para:"JavaScript is the world's most popular programming language.",
    },
    {
        id:2,
        video:"https://youtube.com/embed/kXrFo4pq23Q",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSQ0n3GX_mi5yCOhb1qa0DMa8PE3gwwJpZql-46pXyIg&usqp=CAU&ec=48665701",
        heading:"Course introduction-Part-2",
        para:"JavaScript is the world's most popular programming language.",
    },
    {
        id:3,
        video:"https://www.youtube.com/embed/3uaHXOqvo-Y",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrcq2NvptDz0BXPlsz_h5AIYYp6cv_CI4sPE-eBuDoAcM6PsRmuD9aCoHCXQ5zJzXaYrHYJEHlbb8&usqp=CAU&ec=48665701",
        heading:"Course introduction-Part-3",
        para:"JavaScript is the world's most popular programming language.",
    },
    {
        id:4,
        video:"https://www.youtube.com/embed/bBpKJccIdvQ",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTP4b_gj1RWkUtaZ9Q86pvrf1-GavbtWldOyapIdGB-ISJvQzyPNOA7_U4OIVonWrPgtnLQFm8WZA&usqp=CAU&ec=48665701",
        heading:"Course introduction-part-4",
        para:"JavaScript is the world's most popular programming language.",
    },
    {
        id:5,
        video:"https://www.youtube.com/embed/bBpKJccIdvQ",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa3ft9bpFg4DQWOnlj7iWIEuHAeWeE-g3XdVdTIfH3yA&usqp=CAU&ec=48665701",
        heading:"Course introduction-part-5",
        para:"JavaScript is the world's most popular programming language.",
    },
  
]

});

