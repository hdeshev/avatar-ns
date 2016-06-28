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

/*
        alert("tap");
        this._http.get('https://api.adorable.io/avatars/face/eyes4/nose5/mouth1/ffaa32').subscribe(res => {
        alert("tap tap");
            debugger;
          //console.log(res.json());
          var img = res.json().toString();

          //var image = new Image();
          //this.imageSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAAXNSR0IArs4c6QAAABxpRE9UAAAAAgAAAAAAAAACAAAAKAAAAAIAAAACAAAARiS4uJEAAAASSURBVBgZYvjPwABHSMz/DAAAAAD//0GWpK0AAAAOSURBVGNgYPiPhBgQAACEvQv1D5y/pAAAAABJRU5ErkJggg==";
          this.imageSrc = ""
          this.imageSrc = "data:image/png;charset=utf-8;base64," + img;
      });
*/
