import { IsAlphanumeric, IsNotEmpty, Matches, MinLength } from "class-validator";

const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,20}$/;

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    @IsAlphanumeric()
    username: string;

    @IsNotEmpty()
    @Matches(passwordRegEx, 
        {
        message: `Password must contain Minimum 5 and maximum 20 characters, 
        at least one uppercase letter, 
        one lowercase letter, 
        one number and 
        one special character`,
    }
)
    password: string;
}
