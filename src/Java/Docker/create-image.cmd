docker build --no-cache -f SQL\Dockerfile.PostgreSql -t snezhko222-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t snezhko222-java/app ../../..
