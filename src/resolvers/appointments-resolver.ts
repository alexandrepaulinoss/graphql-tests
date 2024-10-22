import { Appointment } from '../models/appointment-model';
import { Customer } from '../models/customer-model'
import { CreateAppointmentInput } from './../dtos/create-appointment-input';
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'

@Resolver(() => Appointment)
export class AppointmentsResolver {
  @Query(() => String)
  async helloWorld() {
    return 'hello world'
  }

  @Query(() => [Appointment])
  async appointments() {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date(),
      }
    ]
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg('data') data: CreateAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt
    }

    return appointment
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    return {
      name: 'John Doe'
    }
  }
}
