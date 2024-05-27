import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
    
    constructor(private userService: UserService, private jwtService: JwtService){}

    async signIn(username: string, pass: string){

        const user = await this.userService.findOneByUsername(username);

        
        
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
          }
        
        return null;
    }

    async login(user: any) {

        const fetchedUser = await this.userService.findOneByUsername(user.username);
        const payload = { username: fetchedUser.username, userid: fetchedUser.userid, role: fetchedUser.role };
        return {
          access_token: this.jwtService.sign(payload),
        };
        
      }


}
