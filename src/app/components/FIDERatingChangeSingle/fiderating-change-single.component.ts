import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FIDERatingChangeSingleService } from '../../services/FIDERatingChangeSingle/fiderating-change-single.service';

@Component({
  selector: 'app-fiderating-change-single',
  templateUrl: './fiderating-change-single.component.html',
  styleUrls: ['./fiderating-change-single.component.css']
})
export class FIDERatingChangeSingleComponent implements OnInit {
  dataForm: FormGroup;
  submitted = false;
  showResult: boolean = false;
  result: string;
  scrollAnchor: string;

  equation1: string = 'ES = 1 / (1 + 10^{\\frac{RatB - RatA}{400}})';
  equation2: string = 'RatA_{new} = RatA + (K * (S - ES))';

  constructor(
    private FIDERatingChangeSingleService: FIDERatingChangeSingleService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      userRating: ['', Validators.compose([Validators.required, Validators.min(1000), Validators.max(2900)])],
      opponentRating: ['', Validators.compose([Validators.required, Validators.min(1000), Validators.max(2900)])],
      score: ['', Validators.required],
      developmentCoeff: ['', Validators.required]
    });
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
    
    if (this.dataForm.invalid) {
      this.showResult = false;
      return;
    }
    else {
      var result = this.FIDERatingChangeSingleService
        .calculateRating(this.f.userRating.value, this.f.opponentRating.value, this.f.score.value, this.f.developmentCoeff.value);
      
      if(result > 0)
        this.result = " +" + result.toString();
      else
        this.result = " " + result.toString();

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
}
