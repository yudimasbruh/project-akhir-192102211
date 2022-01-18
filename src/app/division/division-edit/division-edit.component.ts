import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Division } from 'src/app/model/division.model';
import { DivisionService } from '../../services/division.service';

@Component({
  selector: 'app-division-edit',
  templateUrl: './division-edit.component.html',
  styleUrls: ['./division-edit.component.css'],
})
export class DivisionEditComponent implements OnInit {
  divisionForm: any;
  division?: Division;

  constructor(
    private divisionService: DivisionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.divisionForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
    });

  }

  onSubmit() {
    // TODO: quick fix because API is not ready yet to be retrieved by id
    const id = this.router.parseUrl(this.router.url).root.children['primary']
      .segments[1].path;
    // update division
    this.divisionService.edit(id, this.divisionForm.value).subscribe(
      (data) => {
        console.log(data);

        // reset the form
        this.divisionForm.reset();

        // redirect to division list and refresh
        this.router.navigate(['/divisi']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}