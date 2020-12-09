import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { FIDERatingInitService } from 'src/app/services/FIDERatingInit/fiderating-init.service';

@Component({
  selector: 'app-fiderating-init',
  templateUrl: './fiderating-init.component.html',
  styleUrls: ['./fiderating-init.component.css']
})
export class FIDERatingInitComponent implements OnInit {
  dataForm: FormGroup;
  submitted = false;
  showResult: boolean = false;
  result: string;
  wrongValueBool: boolean = false;

  scrollAnchor: string;

  constructor(
    private FIDERAtingInitService: FIDERatingInitService,
    private formBuilder: FormBuilder
  ) { }
  
  ngOnInit(): void {
    var regex = /^[0-9]+$/ 

    this.dataForm = this.formBuilder.group({
      opponentsRating: ['', Validators.compose([Validators.required, Validators.min(1000), Validators.max(2900)])],
      numberOfGames: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(70), Validators.pattern(regex)])],
      totalScore: ['', Validators.compose([Validators.required, Validators.min(0)])]
    }, { validators: this.wrongValueValidator });
  
  }

  ngAfterViewChecked(){
    if (this.scrollAnchor) {
      this.scrollToAnchor(this.scrollAnchor);
      this.scrollAnchor = null;
    }
  }

  get f() { return this.dataForm.controls; }

  onSubmit() {
    this.submitted = true;

    if(this.dataForm.invalid) {
      this.showResult = false;
      return;
    }
    else {
      var result = this.FIDERAtingInitService
        .calculateRating(this.f.opponentsRating.value, this.f.totalScore.value, this.f.numberOfGames.value);
      
      this.result = result.toString();
      this.showResult = true;
      this.scrollAnchor = "resultBox";
    }
  }

  private scrollToAnchor(anchor: string): boolean {
    const element = document.querySelector("#" + anchor);
    if (element) {
      element.scrollIntoView({block: "center", behavior: "smooth"});
      return true;
    }
    return false;
  }

  public wrongValueValidator: ValidatorFn = (fg: FormGroup) => {
    const score = fg.get('totalScore').value;
    const numberOfGames = fg.get('numberOfGames').value;
    
    if (score > numberOfGames || score%0.5 !== 0) {
      this.wrongValueBool = true;
      return { "wrongValue": true }
    }
    else {
      this.wrongValueBool = false;
      return null;
    }
  }
}