dev env in docker container

      -- start container --
      docker compose up -d --build
      docker compose -f docker-compose.yml up -d --build

      -- changes to req.txt and db --
      docker-compose down
      docker compose up -d --build

      docker compose run --rm backend python manage.py makemigrations
      docker compose run --rm backend python manage.py migrate

------------------ IGNORE ----------------------------

docker docs:
https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#user

dev docker container:
-react
-django
https://www.craigfranklin.dev/python/docker/javascript/2019/05/16/docker-compose-django-cra/

-react
https://github.com/veryacademy/docker-mastery-with-django/tree/main/Part-5%20Dockerize%20a%20React%20Application/core

      -- dockerfile
      https://stackoverflow.com/questions/62556972/docker-image-build-getting-stuck-at-npm-install-for-reactjs

--react-router urls issue--

      https://www.geeksforgeeks.org/reactjs-router/

      https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually

--- choice of api for efficiency --

      https://www.howtographql.com/basics/1-graphql-is-the-better-rest/
