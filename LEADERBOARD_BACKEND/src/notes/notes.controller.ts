import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Player } from './schemas/player.schema';

@Controller('leaderboard')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  async findAll() {
    return await this.notesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.notesService.findOne(id);
  }

  @Post()
  async create(@Body() player: Player) {
    return await this.notesService.create(player);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() player: Player) {
    return await this.notesService.update(id, player);
  }

  
}