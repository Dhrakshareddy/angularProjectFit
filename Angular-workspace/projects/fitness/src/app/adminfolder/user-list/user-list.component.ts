// src/app/user/user-list/user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

 

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      // Now 'users' has a defined type of User[]
      console.log(users);
      this.users=users

    });
    // this.getAll();
  }
  getAll()
  {
    this.userService.getUsers().subscribe(users =>{
      this.users=users
    })
  }
  deleteUser(id: number): void {
    console.log(id);
    
    this.userService.deleteUser(id).subscribe((res) => {
      // this.users = this.users.filter(user => user.userId !== id);
      alert((res))
    });
  }
}
