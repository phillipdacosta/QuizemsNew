import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorComponent } from './professor/professor.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  {
    path: '',
    component: AboutComponent,
    
 } , 
  
  {
    path: 'home',
    component: ProfessorComponent,
    
 } , 


 {
  path: 'quiz',
  component: QuizComponent
  
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
