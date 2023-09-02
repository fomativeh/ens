import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IptrackService } from './iptrack.service';
import { CreateIptrackDto } from './dto/create-iptrack.dto';
import { UpdateIptrackDto } from './dto/update-iptrack.dto';

@Controller('iptrack')
export class IptrackController {
  constructor(private readonly iptrackService: IptrackService) {}

  @Post()
  create(@Body() createIptrackDto: CreateIptrackDto) {
    return this.iptrackService.create(createIptrackDto);
  }

  @Get()
  findAll() {
    return this.iptrackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iptrackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIptrackDto: UpdateIptrackDto) {
    return this.iptrackService.update(+id, updateIptrackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iptrackService.remove(+id);
  }
}
