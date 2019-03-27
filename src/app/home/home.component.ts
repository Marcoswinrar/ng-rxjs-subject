import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private messsageService: MessageService) { }

  ngOnInit() { }

  sendMessage(event) {
    console.log(event.value);
    this.messsageService.setMessage(event.value);
  }

}
