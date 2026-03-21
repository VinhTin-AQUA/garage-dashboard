import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "../../shared/components/sidebar/sidebar";
import { MangementHeader } from "../../shared/components/mangement-header/mangement-header";

@Component({
  selector: 'app-managements',
  imports: [RouterOutlet, Sidebar, MangementHeader],
  templateUrl: './managements.html',
  styleUrl: './managements.css',
})
export class Managements {

}
