## Subindo todos os containers de frontend, backend e do mysql conectados entre si
```bash
docker-compose up -d
```

## Volume mysql
A pasta mysql_data precisa ser criada para que os dados a serem inseridos e utilizados no banco de dados, persistam após a finalização ou destruição do container mysql