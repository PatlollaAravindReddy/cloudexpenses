import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cloudexpense';
  selectedTab: string = 'upload';
  selectedFile: File | any = null;
  uploadStatus: boolean = false;

  constructor(private http: HttpClient) {}
  
  onUpload() {
    const formData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'image/jpeg');
    formData.append('file', this.selectedFile, this.selectedFile.name);

     this.http.post('http://ec2-18-188-232-157.us-east-2.compute.amazonaws.com:8080/api/upload', formData)
      .subscribe(response => {
        console.log('Image uploaded successfully:', response);
       }, error => {
         console.error('Error uploading image:', error);
       });
       alert("Image uploaded successfully");
  }

  onFileChanged(event : any) {
    this.selectedFile = <File>event.target.files[0];
  }

  openTab(tabName: string) {
    this.selectedTab = tabName;
  }

}
















