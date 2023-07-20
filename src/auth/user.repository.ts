import { CustomRepository } from '../typeorm-util/typeorm-ex.decorator';

import { User } from './user.entity';
import { Repository } from 'typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
    const user = this.create(authCredentialDto);

    await this.save(user);
  }
}
