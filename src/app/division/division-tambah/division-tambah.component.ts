import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DivisionService } from '../../services/division.service';

@Component({
  selector: 'app-division-tambah',
  templateUrl: './division-tambah.component.html',
  styleUrls: ['./division-tambah.component.css'],
})
export class DivisionTambahComponent implements OnInit {
  divisionForm: any;

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
    // tambah a new division with divisionForm.value
    this.divisionService.tambah(this.divisionForm.value).subscribe(
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