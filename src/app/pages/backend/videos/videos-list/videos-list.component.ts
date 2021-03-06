import { Component, OnInit } from "@angular/core";
import { Video } from "src/app/shared/interfaces/video.interface";
import { VideosService } from "src/app/shared/services/videos/videos.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-videos-list",
  templateUrl: "./videos-list.component.html",
  styleUrls: ["./videos-list.component.scss"]
})
export class VideosListComponent implements OnInit {
  settings = {
    actions:{
      add: false,
      edit: false,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
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
      description: {
        title: "description",
        type: "string"
      },
      path_youtube: {
        title: "url",
        type: "string"
      }
    }
  };

  public videos: any[] = [];
  public video = {} as Video;

  constructor(private readonly videosService: VideosService, private router: Router) {}

  ngOnInit() {
    this.videosService.getVideos().subscribe((data: any) => {
      this.videos = data.map(elem => {
        return {
          videoId: elem._id,
          ...elem
        };
      });
      // console.log(this.videos);
    });
  }

  createVideo() {
    this.videosService.createVideo(this.video).subscribe(response => {
      // console.log(response);
      alert("Vidéo ajouté avec succès");
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Voulez vous vraiment procéder à la suppression ?")) {
      event.confirm.resolve();
      this.videosService.deleteVideo(event.data.videoId).subscribe(() => {
        alert('Suppression réussie !');
      });
    } else {
      event.confirm.reject();
    }
  }

  goToViewVideo(event): void {
     console.log(event.data);
    // console.log(`video/${event.data.videoId}`);
    this.router.navigate([`/admin/video/${event.data.videoId}`]);
  }
}
