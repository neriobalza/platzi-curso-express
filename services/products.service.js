import { faker } from "@faker-js/faker";
import boom from "@hapi/boom";

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 100; i++) {
      this.products.push({
        // id: faker.datatype.uuid(),
        id: i + 1,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.image(540, 540),
      });
    }
  }

  // Create new product
  async create(data) {
    return new Promise((resolve, reject) => {
      const newProduct = {
        id: faker.datatype.uuid(),
        ...data,
      };
      this.products.push(newProduct);

      setTimeout(() => {
        resolve(newProduct);
      }, 1000);
    });
  }

  // Get all products
  async get() {
    return this.products;
  }

  // Get element by id
  async find(id) {
    const product = this.products.find((item) => item.id === id);

    if (!product) {
      throw boom.notFound("Product Not Found");
    }

    if (product.isBlock) {
      throw boom.conflict("Product Is Block");
    }

    return product;
  }

  // Update a product
  async update(id, changes) {
    const index = this.products.findIndex(
      (item) => item.id === parseInt(id, 10)
    );

    if (index === -1) {
      throw boom.notFound("Product Not Found");
    }

    this.products[index] = changes;
    return this.products[index];
  }

  // Delete a product
  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error("product not found");
    }

    this.products.splice(index, 1);
    return { id };
  }
}

export default ProductService;
