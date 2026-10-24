import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../core/compoments/header/header';
import { Footer } from '../../core/compoments/footer/footer';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './main-layout.html',
})
export class MainLayout {}
