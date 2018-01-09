import { AboutController } from './about/about.controller';
import {Module} from '@nestjs/common';



@Module({
  controllers: [
    AboutController
  ]
})
export class ApplicationModule {

    constructor() {
        console.log('main module initialized');
    }
    
}