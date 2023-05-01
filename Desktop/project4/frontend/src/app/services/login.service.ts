import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom} from 'rxjs';
import { appConfig } from 'src/utils/app-config';
import { ClientModel } from 'src/app/models/client.model';
import { CartModel } from '../models/cart.model';
import { AuthActionType, clientStore } from '../redux/login-state';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { }

  //login client
  public async login(myClient: ClientModel): Promise<ClientModel> {
    
    // get the observable
  const observable = this.http.post<ClientModel>(appConfig.loginUrl, myClient); 

    //convert to promise
  const isClient = await firstValueFrom(observable);

  await this.findCart(isClient._id);
    // Send client to global state:
  clientStore.dispatch({ type: AuthActionType.Login, payload: isClient });

  return isClient;
  }

    //find cart by id client
    public async findCart(_id: string): Promise<void>{
      
      const observable = this.http.get<CartModel>(appConfig.findCartUrl + _id);
      
      const addCart = await firstValueFrom(observable);
      localStorage.setItem("cart", addCart._id);
      // Send car to global state:
      clientStore.dispatch({ type: AuthActionType.myCart, payload: addCart });
    }

  //register
  public async register(newClient: ClientModel): Promise<ClientModel> {
    console.log(newClient);
    const observable = this.http.post<ClientModel>(appConfig.registerUrl, newClient);
    const addClient = await firstValueFrom(observable);
    await this.addCart(addClient._id);
    // Send client to global state:
    clientStore.dispatch({ type: AuthActionType.Register, payload: addClient });

    return addClient;
  }

  //add new cart when add new client
  public async addCart(_id: string): Promise<void>{
    const newCart  = new CartModel(); 
    newCart.clientId = _id;
    newCart.created = new Date().toISOString();//or- toLocaleDateString();
    //console.log(newCart);
    const observable = this.http.post<CartModel>(appConfig.addCartUrl, newCart);
    const addCart = await firstValueFrom(observable);
    // Send car to global state:
    clientStore.dispatch({ type: AuthActionType.myCart, payload: addCart });
  }

    // Logout:
    public logout(): void {
      clientStore.dispatch({ type: AuthActionType.Logout });
  }

  //list cities
  public async getCities(country: string): Promise<any> {
    const object = {"country":country};
    
    try{
    const url = 'https://countriesnow.space/api/v0.1/countries/cities';
    const observable = this.http.post<any>(url,object);
    const cities = await firstValueFrom(observable);
    return cities.data;
    }catch(err:any){
      console.log(err);
    }
  }

}

