import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.component.html',
  styleUrls: ['./secundario.component.css']
})
export class SecundarioComponent {
  data: string | null;

  constructor(private route: ActivatedRoute){
    this.data = this.route.toString();
  }
}
