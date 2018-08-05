import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../models/app-error';

@Injectable()
export class ErrorHandleService {

  constructor() { }

  HandleError(error:Response){
    if(error.status===404)
        return Observable.throw(new AppError('Bulunamdı',404));
    if(error.status===400)
        return Observable.throw(new AppError('Hatalı obje gönderdiniz',400));
    if (error.status===401)
        return Observable.throw(new AppError('Yetkiniz Yok',401))
    else
        return Observable.throw(new AppError('Beklenmeyen bir hata oluştu',null,error));
  }

}
