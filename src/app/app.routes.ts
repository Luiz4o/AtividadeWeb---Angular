import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'produto', component:ProdutoComponent},
    {path:'produto-detalhe/:id', component:ProdutoDetalheComponent},
    {path:'sobre', component:SobreComponent}

];
