import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
  
  updateUser(id: number){
    this.router.navigate(['/update-user', id]);
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe( data => {
      console.log(data);
      this.ngOnInit();
    })
  }


}