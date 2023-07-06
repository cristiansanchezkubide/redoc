import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiSecurity, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

@Controller('app')
export class AppController {
  @ApiTags('Users')
  @ApiOperation({ summary: 'User example' })
  @ApiSecurity('bearer')
  @ApiCreatedResponse()
  @Get()
  example(): void {
    console.log('example');
  }
}
