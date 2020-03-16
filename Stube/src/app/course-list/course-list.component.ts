import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component
({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  title = "Course List"
  course_list =
  [
    {
      course     : "Angular 9.0",
      language   : "English",
      speaker    : "Justin Mitchel",
      t_lectures : "28",
      image      : "assets/images/Angular.png",
      level      : "Beginner",
      link       : "Angular 9.0 -by Justin Mitchel",

    },
    {
      course     : "C programming Basics",
      language   : "Hindi",
      speaker    : "Sourabh Shukla",
      t_lectures : "41",
      image      : "assets/images/C .png",
      level      : "Beginner",
      link       : "C programming Basics -by Sourabh Shukla",

    },
    {
      course     : "Django 2.0",
      language   : "English",
      speaker    : "Justin Mitchel",
      t_lectures : "48",
      image      : "assets/images/django.jpg",
      level      : "Beginner",
      link       : "Django 2.0 -by Justin Mitchel",

    },
    {
      course     : "Django 2.2",
      language   : "English",
      speaker    : "Justin Mitchel",
      t_lectures : "48",
      image      : "assets/images/django 2.2.jpeg",
      level      : "Intermediate",
      link       : "Django 2.2 -by Justin Mitchel",

    },
    {
      course     : "Typescript",
      language   : "English",
      speaker    : "Justin Mitchel",
      t_lectures : "11",
      image      : "assets/images/typescript.png",
      level      : "Beginner",
      link       : "Typescript -by Justin Mitchel",

    },
    {
      course     : "Web Development - HTML,CSS,Javascript,Jquery,PHP,Mysql",
      language   : "Hindi",
      speaker    : "Sourabh Shukla",
      t_lectures : "41",
      image      : "assets/images/web.jpg",
      level      : "Beginner",
      link       : "Web Development -by Sourabh Shukla",

    },
  ];

  constructor(private route:ActivatedRoute) 
  { }

  ngOnInit()
  {
      this.route.params.subscribe(params => {
        console.log(params)
      })

  }



}