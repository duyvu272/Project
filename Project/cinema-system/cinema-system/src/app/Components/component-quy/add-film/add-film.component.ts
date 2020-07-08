import {Component, OnInit} from '@angular/core';
import {FilmService} from '../../component-tuan/service/film.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {min} from "moment";

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  submitted = false;
  formAddFilm : FormGroup;
  movieTypeAction: string;
  isHanhDong: any;
  isVienTuong: any;
  isHoatHinh: any;
  isVoThuat: any;
  isHaiHuoc: any;
  isChienTranh: any;
  isKinhDi: any;
  isKinhDien: any;
  isLangMang: any;
  isKiemHiep: any;
  isPhieuDu: any;
  isTamLy: any;
  isTinhCam: any;
  isAmNhac: any;
  film;
  from: any;
  movieName: any;
  dayStart: any;
  dateEnd: any;
  actor: any;
  movieStudio: any;
  directors: any;
  durations: any;
  content: any;
  srcVideo: any;
  srcImg: any;
  constructor(
    public  filmService: FilmService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.formAddFilm = this.formBuilder.group({
      movieName: [this.movieName,[Validators.required]],
      movieType: [this.movieTypeAction,[Validators.required]],
      dateStart: [this.dayStart,[Validators.required]],
      dateEnd: [this.dateEnd,[Validators.required ]],
      movieStudio: [this.movieStudio,[Validators.required]],
      directors: [this.directors,[Validators.required]],
      actor: [this.actor,[Validators.required]],
      duration: [this.durations,[Validators.required]],
      content: [this.content,[Validators.required]],
      srcImg: [this.srcImg,[Validators.required]],
      srcVideo: [this.srcVideo,[Validators.required]],
    })

  }
  // ischeckform: boolean= true;
  isCheckFormDay: boolean = false;
  get f() { return this.formAddFilm.controls; }
  checkValue(event: any){
  }
  addNewFilm() {
    this.movieTypeAction = '' ;

    if (this.isHanhDong == true){
      this.movieTypeAction= this.movieTypeAction.concat(",Hành Động")
    };
    if (this.isVienTuong == true){
      this.movieTypeAction= this.movieTypeAction.concat(",Viễn tưởng")
    }; if (this.isHoatHinh == true){
      this.movieTypeAction= this.movieTypeAction.concat(",Hoạt hình")
    };if (this.isVoThuat == true){
      this.movieTypeAction= this.movieTypeAction.concat(",Võ thuật")
    };if (this.isHaiHuoc == true){
      this.movieTypeAction= this.movieTypeAction.concat(",Hài hước")
    };if (this.isChienTranh == true){
      this.movieTypeAction= this.movieTypeAction.concat(",Chiến tranh")
    };if (this.isKinhDi == true){
      this.movieTypeAction= this.movieTypeAction.concat(",Kinh dị")
    };if (this.isKinhDien == true){
      this.movieTypeAction= this.movieTypeAction.concat(",Kinh điển")
    };if (this.isLangMang == true){
      this.movieTypeAction= this.movieTypeAction.concat(",Lãng mạng")
    };if (this.isKiemHiep == true){
      this.movieTypeAction= this.movieTypeAction.concat(" Kiếm hiệp")
    };if (this.isPhieuDu == true){
      this.movieTypeAction= this.movieTypeAction.concat(",Phiêu du")
    };if (this.isTamLy == true){
      this.movieTypeAction= this.movieTypeAction.concat(",Tâm lý")
    };if (this.isTinhCam == true){
      this.movieTypeAction= this.movieTypeAction.concat(",Tình cảm")
    };if (this.isAmNhac == true){
      this.movieTypeAction= this.movieTypeAction.concat(",Âm nhạc")
    };
    this.movieTypeAction = this.movieTypeAction.substr(1,this.movieTypeAction.length);
    this.submitted = true
    this.ngOnInit();
    console.log(this.movieTypeAction);
    console.log(this.formAddFilm.value);
    // if(this.formAddFilm.invalid){
    //   return
    // }
    if(this.dateEnd <= this.dayStart){
      // this.isCheckFormDay = true ;
         alert("Ngày kết thúc phải lớn hơn ngày bắt đầu")
    } else {
      this.filmService.addNewFilm(this.formAddFilm.value).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl('add-film').then(r => null);
      });
    }
  }
}
