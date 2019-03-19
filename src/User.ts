export class User
{
    id;
    Name;
    Address;
    Email;
    MobileNumber;
    Password;
    Role;
    Salary;

    constructor(id,name,address,email,mobile,pass,role,salary)
    {
        this.id=id;
        this.Name=name;
        this.Address=address;
        this.Email=email;
        this.MobileNumber=mobile;
        this.Password=pass;
        this.Role=role;
        this.Salary=salary;
    }
}