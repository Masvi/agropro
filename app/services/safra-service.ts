import { Injectable } from "@angular/core";
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Implantacao } from '../classes/implantacao';
import { Manutencao } from '../classes/manutencao';
import { Colheita } from '../classes/colheita';

@Injectable()
export class SafraService {

    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    httpOptions: any;

    constructor(private http: Http) {
        this.http = http;
    }

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }

    saveImplementacao(imp: Implantacao): Promise<any> {
        return this.http
            .post(" ", JSON.stringify(imp), { headers: this.headers })
            .toPromise()
            .then((response: Response) => response.json().data as Implantacao)
            .catch(this.handleError);
    }

    saveManutencao(manu: Manutencao) {
        return this.http
            .post(" ", JSON.stringify(manu), { headers: this.headers })
            .toPromise()
            .then((response: Response) => response.json().data as Manutencao)
            .catch(this.handleError);
    }

    saveColheita(colheita: Colheita) {
        return this.http
            .post(" ", JSON.stringify(colheita), { headers: this.headers })
            .toPromise()
            .then((response: Response) => response.json().data as Colheita)
            .catch(this.handleError);
    }

}