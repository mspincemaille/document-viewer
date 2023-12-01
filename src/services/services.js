import { Observable } from "rxjs";

export const config$ = new Observable(observer => {
    fetch('/config')
        .then(response => response.json())
        .then(data => {
            observer.next(data);
            observer.complete();
        }).catch(error => observer.error(error));
});

export const data$ = new Observable(observer => {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            observer.next(data);
            observer.complete();
        }).catch(error => observer.error(error));
});

export function fetchDocument(id) {
    return new Observable(observer => {
        fetch('/document/' + id)
            .then(response => response.blob())
            .then(data => {
                data = data.slice(0, data.size, 'image/jpg')
                observer.next(URL.createObjectURL(data));
                observer.complete();
            }).catch(error => observer.error(error));
    });
}

