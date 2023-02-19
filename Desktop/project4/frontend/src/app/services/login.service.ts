import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
// import { appConfig } from 'src/utils/app-config';
// import { ClientModel } from 'src/models/client.model';
import { appConfig } from '../utils/app-config';
import { ClientModel } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //login client
  public async login(myClient: ClientModel): Promise<ClientModel> {
    // get the observable
  const observable = this.http.post<ClientModel>(appConfig.loginUrl, myClient);
  console.log(observable);
    //convert to promise
  const client = await firstValueFrom(observable);
  console.log(client);

  return client;
  }


  //all clients
  public async AllClients(): Promise<ClientModel[]>{
    const observable = this.http.get<ClientModel[]>(appConfig.allClientsUrl);
    const clients = await firstValueFrom(observable);
        console.log(clients);
        return clients;

  }

  // register
  public async register(newClient: ClientModel): Promise<ClientModel> {
    // get the observable
  const observable = this.http.post<ClientModel>(appConfig.loginUrl, newClient);
  console.log(observable);
    //convert to promise
  const client = await firstValueFrom(observable);
  console.log(client);

  return client;
  }
}

