import { Component, OnInit } from '@angular/core';
import { WallpapersService } from 'src/app/shared/services/wallpapers/wallpapers.service';
import { Wallpaper } from 'src/app/shared/interfaces/wallpaper.interface';

@Component({
  selector: 'app-wallpapers-list',
  templateUrl: './wallpapers-list.component.html',
  styleUrls: ['./wallpapers-list.component.scss']
})
export class WallpapersListComponent implements OnInit {

  settings = {
    /*add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },*/
    /*edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },*/
    add: false,
    edit: false,
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      postId: {
        title: "ID",
        type: "number"
      },
      title: {
        title: "Titre",
        type: "string"
      },
      picture: {
        title: "Photo",
        type: "string"
      }
    }
  };

  public wallpapers: any[] = [];
  public wallpaper = {} as Wallpaper;

  constructor(private readonly wallpapersService: WallpapersService) { }

  ngOnInit() {
    this.wallpapersService.getWallpapers().subscribe((data: any) => {
      this.wallpapers = data.map(elem => {
        return {
          wallpaperId: elem._id,
          ...elem
        };
      });
      // console.log(this.posts);
    });
  }

  createWallpaper() {
    this.wallpapersService.createWallpaper(this.wallpaper).subscribe(response => {
      // console.log(response);
      alert("Wallpaper créé ! ");
    });
  }

  pictureChange(event) {
    this.wallpaper.path_image = event.target.files[0];
    // sconsole.log(this.post);
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Voulez vous vraiment procéder à la suppression ?")) {
      event.confirm.resolve();
      this.wallpapersService.deleteWallpaper(event.wallpapersId);
    } else {
      event.confirm.reject();
    }
  }
  goToViewWallpaper(event: any) {

  }

}
