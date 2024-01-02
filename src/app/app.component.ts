import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}


// let sections = document.querySelectorAll('section');

// window.onscroll  = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;

//     if (top >= offset && top < offset + height){
//       sec.classList.add('show-animate')
//     }
    // If you weant to use repeating animation on sctoll, use this
//     else {
//       sec.classList.remove('show-animate')
//     }
//     }
//   )
// }

// let sections = document.querySelectorAll('section');

//  = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.ofwindow.onscrollfsetTop - 150;
//     let height = sec.offsetHeight;

//     if(top >= offset && top < offset + height){
//       sec.classList.add('show-animate');
//     }

//     else{
//       sec.classList.remove('show-animate');
//     }    
//   })
// }
// Define sections as a NodeList
// Define sections as a NodeList












// Define sections as a NodeList
let sections: NodeListOf<HTMLElement>;

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Select all sections when the DOM is ready
  sections = document.querySelectorAll('section') as NodeListOf<HTMLElement>;
});

// Debounce function
function debounce(func: () => void, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return function executedFunction() {
    const later = () => {
      clearTimeout(timeout);
      func();
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced scroll event
const debouncedScroll = debounce(() => {
  sections.forEach((sec: HTMLElement) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  });
}, 20);

// Add event listener for scroll
window.addEventListener('scroll', debouncedScroll);

// https://www.youtube.com/watch?v=r1wDGIKmX6s&ab_channel=Codehal
// https://www.youtube.com/watch?v=r1wDGIKmX6s&ab_channel=Codehal
// https://www.youtube.com/watch?v=r1wDGIKmX6s&ab_channel=Codehal
// https://www.youtube.com/watch?v=r1wDGIKmX6s&ab_channel=Codehal
// https://www.youtube.com/watch?v=r1wDGIKmX6s&ab_channel=Codehal
// https://www.youtube.com/watch?v=r1wDGIKmX6s&ab_channel=Codehal
// https://www.youtube.com/watch?v=r1wDGIKmX6s&ab_channel=Codehal
// https://www.youtube.com/watch?v=r1wDGIKmX6s&ab_channel=Codehal
// https://www.youtube.com/watch?v=r1wDGIKmX6s&ab_channel=Codehal
// https://www.youtube.com/watch?v=r1wDGIKmX6s&ab_channel=Codehal
// https://www.youtube.com/watch?v=r1wDGIKmX6s&ab_channel=Codehal
// https://www.youtube.com/watch?v=r1wDGIKmX6s&ab_channel=Codehal
// https://www.youtube.com/watch?v=r1wDGIKmX6s&ab_channel=Codehal
// https://www.youtube.com/watch?v=r1wDGIKmX6s&ab_channel=Codehal
