import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // You'll need this if you want to send data to a backend server
import * as $ from 'jquery';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  email: string = '';
  name: string = '';
  message: string = '';

    // constructor(private http: HttpClient) {} // You'll need this if you want to send data to a backend server


  // sendForm = this  
  submitForm = (): void => {
    console.log('Email:', this.email);
    console.log('Message:', this.message);
    console.log('name:', this.name);

    // $('#contact_email').val() === ''  ? $('contact_name').val() === '' ? $('contactMessage').val() === '' ?  $('#nameError').css('display', 'inline') :  $('#nameError').css('display', 'none')             

    // Check if the name field is empty
    $('#contact_name').val() === '' ? $('#nameError').css('display', 'inline') : $('#nameError').css('display', 'none');
    $('#contact_name').val() === '' ? $('#nameError').css('display', 'inline') : $('#nameError').css('display', 'none')
    $('#contactMessage').val() === ''  ? $('#messageError').css('display', 'inline') : $('#messageError').css('display', 'none')
    $('#contact_email').val() === ''  ? $('#emailError').css('display', 'inline') : $('#emailError').css('display', 'none')

    // if (this.email === ''|| this.name === ''|| this.message === ''){
        // (<HTMLElement>document.getElementById('emailError')).style.display = "inline";
        // (<HTMLElement>document.getElementById('nameError')).style.display = "inline";
        // (<HTMLElement>document.getElementById('messageError')).style.display = "inline";
    //     alert('Fill out required infotmation ')
    //     return

    // }
    // else{
    //    (<HTMLElement>document.getElementById('emailError')).style.display = "none";
    //    (<HTMLElement>document.getElementById('nameError')).style.display = "none";
    //    (<HTMLElement>document.getElementById('messageError')).style.display = "none";

    // }

    // if (this.email === ''){
    //   (<HTMLElement>document.getElementById('emailError')).style.display = "inline";
    //   alert('Fill out required infotmation ')
    // }else if(this.name === ''){
    //   (<HTMLElement>document.getElementById('nameError')).style.display = "inline";
    //    alert('Fill out required infotmation ')
    // }else if (this.message === ''){
    //   (<HTMLElement>document.getElementById('messageError')).style.display = "inline";
    //   alert('Fill out required infotmation ')
    // }
    // else{
    //    (<HTMLElement>document.getElementById('emailError')).style.display = "none";
    //    (<HTMLElement>document.getElementById('nameError')).style.display = "none";
    //    (<HTMLElement>document.getElementById('messageError')).style.display = "none";

    // }





    // $(emailContact) = true ? true : false


    








    // alert("Form submitted!");
    // console.log('Form submitted!')
  } 
}














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

