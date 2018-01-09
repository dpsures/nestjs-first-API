import { Controller, Get } from '@nestjs/common';

@Controller()
export class AboutController {

    constructor() {}

    @Get('about')
    sayAbout() : string{
        return "my first nestjs app REST!"
    }
}
