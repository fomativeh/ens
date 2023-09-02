import { Injectable } from '@nestjs/common';
import { CreateIptrackDto } from './dto/create-iptrack.dto';
import { UpdateIptrackDto } from './dto/update-iptrack.dto';

@Injectable()
export class IptrackService {
  create(createIptrackDto: CreateIptrackDto) {
    return 'This action adds a new iptrack';
  }

  findAll() {
    return `This action returns all iptrack`;
  }

  findOne(id: number) {
    return `This action returns a #${id} iptrack`;
  }

  update(id: number, updateIptrackDto: UpdateIptrackDto) {
    return `This action updates a #${id} iptrack`;
  }

  remove(id: number) {
    return `This action removes a #${id} iptrack`;
  }
}
