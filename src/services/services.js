import { Observable } from "rxjs";

export const config$ = new Observable(observer => {
    fetch('/config')
        .then(response => response.json())
        .then(data => {
            observer.next(data);
            observer.complete();
        }).catch(err => observer.error(err));
});

export const data$ = new Observable(observer => {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            observer.next(data);
            observer.complete();
        }).catch(err => observer.error(err));
})

