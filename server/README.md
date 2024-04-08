## Subindo o backend localmente basta usar o npm ou yarn conforme abaixo
```bash
npm run dev ou yarn dev
```

## Adicionado um dockerfile
```bash
docker build -t backend . 
```

```bash
docker run -p 80:80 backend
```

## Outra forma de utilizar o dockerfile para subir o backend dockerizado
```bash
docker-compose up -d backend ou docker-compose up -d, dessa forma irá subir os containers de frontend, backend e do mysql
```

## Bibliotecas adicionadas
cors express mysql2 nodemon