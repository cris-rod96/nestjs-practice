import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('projects')
export class ProjectsController {
  @Get('/')
  index(@Req() request: Request, @Res() response: Response) {
    response.status(200).json({
      message: 'Hello world',
    });
  }
}
