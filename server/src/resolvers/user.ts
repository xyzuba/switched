import { Mutation, Query, Resolver } from "type-graphql";
import { User } from "../entities/User";

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  users(): Promise<User[]> {
    return User.find({});
  }
}
