import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param, ParseIntPipe,
  Patch,
  Post, ValidationPipe,
} from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { UpdateEventDto } from './update-event.dto';
import { Event } from './event.entity';
import {Like, MoreThan, Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {create} from "domain";

// noinspection TypeScriptValidateTypes
@Controller('/events')
export class EventsController {
  private events: Event[] = [];
  private repository: any;
  private when: any;
  private order: number;


  constructor(
    @InjectRepository(Event)
    private readonly: Repository<Event>,
  ) {}

  @Get()
  async findAll() {
    return await this.repository.find();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id) {
    console.log(typeof id)
    return await this.repository.findOne(id);
  }


  @Get('/practice')
  async practice() {
    return await this.repository.find ({
      select: [ 'id' , 'when' ],
      where: [{ id: MoreThan(3) },
      when: MoreThan(new Date ('2021-02-12T13:00:00'))
    };  {
      description: Like('%meet%')
    }],
    take: 2,
    order: {
    id: 'DESC'
    }
    })
  }

  @Post()
  async create(@Body() input: CreateEventDto) {
    return await this.repository.save({
      ...input,
      when: new Date(input.when),
    });
  }

  @Patch(':id')
  async function update(
      @Param('id') id,
      @Body() input: UpdateEventDto
  ) {

    await update(@Param('id'))
    let id;
   @Body() const updateEventDto = UpdateEventDto) {
      const [event] = await Promise.all([this.repository.findOne(id)])

      return await this.repository.save({
          ...event,
          ...input,
          when: input.when ? new Date(input.when) : event.when
        });
      }


  @Delete(':id')
  @HttpCode(204)

  async function removed () {
    await removed (@Param('id')
    const id)
    {
      const event = await this.repository.findOne(id),
          await
      repository.removed(event);
    }
  }

