import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "David Hart";
  subtitle = "Web Developer";
  profilePic = "/assets/img/dave.jpg";

  links: Object[] = [
    {
      icon: ["fab", "linkedin"],
      altText: "LinkedIn",
      url: "https://www.linkedin.com/in/davidhart2/"
    },
    {
      icon: ["fab", "git-square"],
      altText: "GitHub",
      url: "https://github.com/dhartirl/"
    }
  ]

  sections: Object[] = [
    {
      title: "About Me",
      content: [
        "I'm a web developer with 4 years of experience in a variety of areas. \
My primary interest is frontend development, with a particular focus on styling and UI prototyping. \
I like to come up with a new layout concept and try figure out the details, or convert a tricky design from a PSD spec to a working product. \
I'm quite passionate about providing systems that are easy to follow and work with, for both the customer and other developers. \
There's nothing more frustrating than trying to click on the footer of an infinitely scrolling webpage, \
or digging through someone else's code for 2 days to change a single line. \
This is why I believe it's important to create something that \"just works\", rather than overcomplicating things and creating technical debt.",
        "Aside from my technical experience, I've taken on many roles at the different companies I've worked for. \
I've met with clients to discuss their requirements, offered real time assistance over the phone, \
helped calculate build times for complex systems and created UI mockups for native app developers. \
I don't like stagnation, so I'm constantly looking for new tasks to take on and optimisations to improve my workflow."
              ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
