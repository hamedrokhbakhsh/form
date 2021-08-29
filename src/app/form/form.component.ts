import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public  form = {}
  constructor() { }
  formSubmit = new Subject<any>();

  renderOptions = {}

  ngOnInit(): void {
  }

  onSubmit(submission: any) {
    this.formSubmit.next(submission);
  }
}
