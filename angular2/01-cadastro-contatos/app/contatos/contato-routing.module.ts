import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { ContatosListaComponent } from './contatos-lista.component';
import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatosModule } from './contatos.module';

const ContatoRoutes: Routes = [
    {
        path: 'contato',
        component: ContatosListaComponent
    },
    {
        path: 'contato/save',
        component: ContatoDetalheComponent
    },
    {
        path: 'contato/save/:id',
        component: ContatoDetalheComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(ContatoRoutes)
    ],
    exports: [RouterModule],
})

export class ContatoRoutingModule {}