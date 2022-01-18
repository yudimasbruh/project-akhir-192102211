import { Component, OnInit } from '@angular/core';
import { Division } from '../model/division.model';
import { DivisionService } from '../services/division.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css'],
})
export class DivisionComponent implements OnInit {
  divisions?: Division[];
  currentDivision: Division = {};
  name = '';
  constructor(private divisionService: DivisionService) {}

  ngOnInit(): void {
    this.retrieveDivision();
  }

  ngOnDestroy(): void {
    this.currentDivision = {};
  }

  retrieveDivision(): void {
    this.divisionService.getAll().subscribe(
      (data) => {
        this.divisions = data;
        console.table(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteDivision(division: Division): void {
    if (confirm('Are you sure?') && division._id !== undefined) {
      this.divisionService.delete(division._id).subscribe(
        (data) => {
          console.log(data);
          this.retrieveDivision();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}