import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IdcardComponent } from "@app/idcard/idcard.component";

// import { IdformComponent } from "@app/idform/idform.component";
import { IdformComponent } from "../idform/idform.component";
import { IdtableComponent } from "../idtable/idtable.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

const routes: Routes = [{ path: "", component: IdformComponent }, { path: "", component: IdtableComponent }];

// @NgModule({
//   imports: [IdformComponent, RouterModule.forChild(routes)],
//   declarations: [IdformComponent],
//   exports: [IdformComponent, RouterModule]
// })

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IdformComponent, IdcardComponent, IdtableComponent],
  exports: [IdformComponent, IdcardComponent, IdtableComponent]
})
export class CardsRoutingModule {}
