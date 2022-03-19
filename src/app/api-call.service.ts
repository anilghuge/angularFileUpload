import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private REST_API_SERVER = "http://localhost:8080/fileupload/file";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(data:any){
    const formData: FormData = new FormData();
    formData.append('file', data);
    return this.httpClient.post(this.REST_API_SERVER,formData,{
      reportProgress: true,
      responseType: 'json'
    });
  }


}
