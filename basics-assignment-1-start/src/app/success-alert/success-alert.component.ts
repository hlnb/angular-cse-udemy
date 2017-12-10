import { Component} from '@angular/core';

@Component({
    selector: 'app-success-alert',
    template: `
    <div class="container">
    <div class="row">
        <div class="card col-xs-6">
        <h2>You have successfully avoided danger</h2>
        </div>
        </div>
        </div>
    `,
    styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent {

}
