# NawiNet

NawiNet is a .NET 8 Web API project designed to provide a robust backend for various applications. It leverages modern .NET features to ensure high performance and scalability.

run application locall
```bash
DOTNET_ENVIRONMENT=Local dotnet run --project Nawi.Api/NawiApi.csproj
```

```bash
DOTNET_ENVIRONMENT=Local dotnet run --project Nawi.Api/NawiApi.csproj
DOTNET_ENVIRONMENT=Local dotnet watch run --project Nawi.Api/NawiApi.csproj   

DOTNET_ENVIRONMENT=Local dotnet run --project src/nawi-net/nawi.api/nawi.api.csproj 

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


```bash
https://localhost:59979/swagger/index.html
```

pagination

```bash
https://localhost:59979/api/demo?pageNumber=1&pageSize=10
```