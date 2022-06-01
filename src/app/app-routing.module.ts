import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GuardsGuard } from './servicios/guards.guard';

const routes: Routes = [
  {path:'inicio-sesion', component: PaginaInicioComponent},
  //Pra acceder a la ruta porfolio siempre se va a llamar al metodo canActivate de Guard y este permitira o no segun se le indique el acceso a la misma
  {path:'portfolio', component: PortfolioComponent, canActivate:[GuardsGuard]},
  {path:'register', component:LoginRegisterComponent},
  {path:'', pathMatch:'full', redirectTo:'inicio-sesion'},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
