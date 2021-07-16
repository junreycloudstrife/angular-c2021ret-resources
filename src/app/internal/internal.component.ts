import { Component } from '@angular/core';

@Component({
    selector: 'app-internal',
    template: `<p>component with internal template/style and text in red color</p>`,
    styles: ['p {color: red}']
})

export class InternalComponent{

}