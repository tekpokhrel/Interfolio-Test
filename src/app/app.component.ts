import { Work } from './interfaces/work';
import { Component, ViewChild } from '@angular/core';
import { WorksService } from './services/works.service';
import { Table } from 'primeng/table';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    works: Work[] = [];
    selectedWorks: Work[] = [];
    loading: boolean = true;

    @ViewChild('dt') dt?: Table;

    constructor(private worksService: WorksService) {}

    ngOnInit() {
        this.getWorks();
        this.loading = false;
    }
    getWorks(): void {
        this.worksService.getWorks()
            .subscribe((res: any) => this.works = res.message.items);
    }
}
