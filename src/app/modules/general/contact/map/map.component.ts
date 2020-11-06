import { Component, OnInit,ViewChild } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;
  constructor(private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.toastrService.overlayContainer = this.toastContainer;
  }

  onClick() {
    console.log("inside click");
    this.toastrService.success('in div');
  }

}
