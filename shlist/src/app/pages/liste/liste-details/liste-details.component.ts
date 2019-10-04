import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { DataService } from 'src/services/data.service';
import { Liste } from 'src/model/liste';
import { ListeItem } from 'src/model/liste-item';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-liste-details',
  templateUrl: './liste-details.component.html',
  styleUrls: ['./liste-details.component.scss']
})
export class ListeDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DataService,
    private messageService: MessageService
  ) {}

  liste: Liste = undefined;
  error: string = undefined;

  toogleItemValidation(item: ListeItem) {
    this.service.validateItemFromList(item.id, this.liste.id, !item.valide);
  }
  async addItem(libelle: string) {
    await this.service.addItemToListe(this.liste.id, libelle);
    // this.liste.items.push(new ListeItem({ libelle }));
    this.messageService.add({
      severity: 'success',
      summary: "L'item est ajouté",
      detail: 'Bravo'
    });
    this.liste = await this.service.getListe(this.liste.id);
  }

  async removeItem(id: Guid) {
    await this.service.removeItemFromListe(id, this.liste.id);
    this.messageService.add({
      severity: 'warn',
      summary: "L'item a été supprimé",
      detail: 'Bravo'
    });

    this.liste = await this.service.getListe(this.liste.id);
  }

  async ngOnInit() {
    var id = this.activatedRoute.snapshot.params.id;
    var guid = Guid.parse(id);
    // je demande la liste au service
    this.service
      .getListe(guid)
      .then(resultat => {
        // Quand la liste est là (promesse résolue)
        // Je la mets dans la propriété liste de mon component
        this.liste = resultat;
      })
      .catch(e => {
        this.error = e.message;
      });
    // try {
    //   this.liste = await this.service.getListe(id);
    // } catch (error) {
    //   this.error = error.message;
    // }
  }
}
