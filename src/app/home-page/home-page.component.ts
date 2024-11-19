import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css','../../styles.css']
})
export class HomePageComponent {
  constructor(private router: Router){

  }
  public email = 'munnaverma8780@gmail.com';
  public toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu?.classList.toggle("open");
    icon?.classList.toggle("open");
  }

  public onAction(actionType:string){
    let element = document.getElementById(actionType);
    if(element){
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
  }

  public redirectToExternalPage(link:string){
    window.open(link, '_blank');
  }

  navigateToFragment(fragment: string) {
    this.router.navigate(['/home'], { fragment });
  }
  
}
