import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Logger,
  Post, ValidationPipe, NotFoundException,
} from '@nestjs/common';

import { CreateEventDto } from './create-event.dto';
import { UpdateEventDto } from './update-event.dto';
import { Event } from './event.entity';
import {Like, MoreThan, Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {create} from "domain";
import {Attendee} from "./attendee.entity";

// noinspection TypeScriptValidateTypes
@Controller('/events')
export class EventsController {
  get attendeeRepository(): any {
    return this._attendeeRepository;
  }

  set attendeeRepository(value: any) {
    this._attendeeRepository = value;
  }
  private events: Event[] = [];
  private repository: any;
  private when: any;
  private order: number;
  private EventsContoller: any;

  private readonly Logger = new(this.EventsContoller.name);
  private _attendeeRepository: any;

  constructor(
    @InjectRepository(Event)
    private readonly: Repository<Event>,
  ) {}

  @Get()
  async findAll() {
    this.Logger.log('Hit the findAll route');
    const events = await this.repository.find();
    this.Logger.debug(`Found ${events.length} event`)
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    // console.log(typeof id)
    return await this.repository.findOne(id);

    if(!event) {
      throw new NotFoundException();
    }
    return event;
  }

  @Get('practice2')
  async practice2() {
   // return await this.repository.findOne(1, {
   //    relations: ['attendees'] });
   // const event = await this.repository.findOne(1);

    const event = new Event();
    event.id = 1;

    const attendee = new Attendee();
    attendee.name = 'Using cascade';
    // attendee.event = event;

    event.attendees.push(attendee);
    event.attendees = []

    //await this._attendeeRepository.save(attendee);
    await this.repository.save(event)
    return event;
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

