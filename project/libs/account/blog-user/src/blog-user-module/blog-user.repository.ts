import { BaseMemoryRepository } from '@project/data-access';

import { BlogUserEntity } from './blog-user.entity';
import { BlogUserFactory } from './blog-user.factory';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogUserRepository extends BaseMemoryRepository<BlogUserEntity> {
  constructor(entityFactory: BlogUserFactory) {
    super(entityFactory);
  }

  public findByEmail(email: string): Promise<BlogUserEntity | null> {
    const entities = Array.from(this.entities.values());
    const user = entities.find((entity) => entity.email === email);
    if (user) {
      return Promise.resolve(this.entityFactory.create(user));
    } else {
      return Promise.resolve(null);
    }
  }
}
