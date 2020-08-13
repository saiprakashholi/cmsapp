import { Injectable } from "@angular/core";
import { CanLoad, UrlSegment, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CanLoadGaurd implements CanLoad {
    constructor() { }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        console.log("CanLoadGaurd called")
        // return this.permissions.canLoadChildren(this.currentUser, route, segments);
        return true;
    }
}