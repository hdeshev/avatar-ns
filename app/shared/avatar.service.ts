import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class AvatarService {
  constructor(private _http: Http) {}

  getPossilbeParts(): Promise<Face> {
      return new Promise((resolve, reject) => {
          this._http.get('https://api.adorable.io/avatars/list').subscribe(res => {
            var data = res.json();
            resolve(data.face);
        }, reject);
      });
      
  }

  getAvatarSrc(eyes: string, nose: string, mouth: string) : string {
      return "https://api.adorable.io/avatars/face/" + eyes + "/" + nose + "/" + mouth + "/ffaa32"
  }
}

export class Face {
    eyes: Array<string>;
    nose: Array<string>;
    mouth: Array<string>;
}