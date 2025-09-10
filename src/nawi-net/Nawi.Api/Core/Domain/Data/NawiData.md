# Generate migration for NawiDbContext

## install dotnet-ef tool if not already installed
```bash
dotnet tool install --global dotnet-ef
```
new migration
```bash
dotnet ef migrations add InitialCreate --context NawiDbContext --output-dir Core/Domain/Data/Migrations/
```
undo last migration
```bash
dotnet ef migrations remove --context NawiDbContext
```
apply migrations to database
```bash
dotnet ef database update --context NawiDbContext
```
NawiDbContextMigrations