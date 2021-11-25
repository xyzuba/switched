import { Product } from "../entities/Product";
import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";

@InputType()
class ProductInput {
  @Field()
  name: string;
  @Field()
  desc: string;
  @Field()
  price: number;
}

@Resolver(Product)
export class ProductResolver {
  @Query(() => Product, { nullable: true })
  product(@Arg("id", () => Int) id: number): Promise<Product | undefined> {
    return Product.findOne(id);
  }

  @Query(() => [Product], { nullable: true })
  products(): Promise<Product[] | undefined> {
    return Product.find({});
  }

  @Mutation(() => Product)
  createProduct(
    @Arg("input") input: ProductInput,
    @Arg("img") img: string
  ): Promise<Product> {
    return Product.create({ ...input, image: img }).save();
  }
}
