import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';


export interface Idea {
  id?: number;
  name: string;
  description: string;
  tags: string[];
}

const IDEAS: Idea[] = [
  {
    id: 1,
    name: 'DevIdea',
    description: 'Web para gestionar ideas que desarrollar',
    tags: ['desarrollo']
  },
  {
    id: 2,
    name: 'SextingDogs',
    description: 'Aplicación para quedadas de sexting entre perros',
    tags: ['salud', 'animales']
  },
  {
    id: 3,
    name: 'OtraIdea',
    description: 'Aplicación que haga algo. Aún no se ha decidido qué',
    tags: ['indecisión']
  },
  {
    id: 4,
    name: 'InventarioJuntaTrocola',
    description: 'Aplicación para la gestión de inventarios de juntas de trócola. Actualmente es un mercado muy abandonado',
    tags: ['mecanica', 'sci-fi']
  }
];

@Injectable({
  providedIn: 'root'
})
export class IdeasService {

  constructor(private afs: AngularFirestore) {
    const firebase_settings = {
      timestampsInSnapshots: true
    };
    this.afs.firestore.settings(firebase_settings);
  }

  getIdeas(): Observable<Idea[]> {
    return of(IDEAS).pipe(
      delay(2000)
    );
  }

  getIdeasF(): Observable<Idea[]> {
    return this.afs.collection<Idea>('ideas').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Idea;
        const id = a.payload.doc.id;
        return { id, ...data } as Idea;
      }))
    );
  }

  getIdea(id: number): Observable<Idea> {
    const result = IDEAS.filter(idea => idea.id === 1);

    return of(result[0]).pipe(
      delay(1400)
    );
  }

  getIdeaF(id: number): Observable<Idea> {
    return this.afs.doc<Idea>(`ideas/${id}`).valueChanges();
  }

}
