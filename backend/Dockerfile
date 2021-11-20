# pull official base image
FROM python:3.9.6-alpine

# set work directory
WORKDIR /code/backend

# set environment variables
ENV PYTHONWRITTENBYCODE 1
ENV PYTHONBUFFERED 1

# install pyscopg2 dependencies
RUN apk update \
  && apk add postgresql-dev gcc python3-dev musl-dev

# install dependencies
RUN pip install --upgrade pip
COPY requirements.txt /code/backend
RUN pip install -r requirements.txt


#copy project
COPY . /code/backend

# make port 800 available for app

EXPOSE 8000

#remember to add 0.0.0.0  to the host within docker container

CMD python manage.py runserver 0.0.0.0:8000