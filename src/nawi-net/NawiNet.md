# NawiNet

NawiNet is a .NET 8 Web API project designed to provide a robust backend for various applications. It leverages modern .NET features to ensure high performance and scalability.

```bash
dotnet run --project Nawi.Api/NawiApi.csproj
dotnet watch run --project Nawi.Api/NawiApi.csproj   

dotnet run --project src/nawi-net/nawi.api/nawi.api.csproj 

 -- https://localhost:59979/api/demo

dotnet clean
```



```text
Nawi.API/
|-- Controllers/
|-- Middleware/
|-- Models/
|-- Config/
|-- Properties/
|-- wwwroot/
|-- Program.cs
|-- Startup.cs
Nawi.Core/
|-- Domain/
    |-- Entities/
    |-- ValueObjects/
    |-- Enums/
    |-- Exceptions/
    |-- Interfaces/
    |-- Repositories/
    |-- Services/
|-- Infrastructure/
    |-- Application/
Nawi.Test/
|-- DomainTests/
|-- ApplicationTests/
|-- IntegrationTests/
```
dotnet add package Microsoft.EntityFrameworkCore --version 8.0.20
