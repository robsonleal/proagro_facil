# Proagro Fácil
<hr>

### Tópicos 

- [Descrição do projeto](#descrição-do-projeto)

- [Funcionalidades](#funcionalidades)

- [Aplicação](#aplicação)

- [Ferramentas utilizadas](#ferramentas-utilizadas)

- [Acesso ao projeto](#acesso-ao-projeto)

- [Abrir e rodar o projeto](#abrir-e-rodar-o-projeto)

## Descrição do projeto 

<p>
O Proagro fácil é um sistema que facilita o gerenciamento de Proagro(Programa de Garantia de Atividade Agropecuária).
  
Uma das principais etapas do sistema, é o cadastro da comunicação da perda ocorrida, onde o analista deve digitar os dados do produtor rural, da fazenda e o evento que ocasionou a perda.
</p>

## Funcionalidades

:heavy_check_mark: `Funcionalidade 1:` Visualizar, criar, editar e excluir comunicações de perda.

:heavy_check_mark: `Funcionalidade 2:` Ecibir os detalhes de uma comunicação de perda.

:heavy_check_mark: `Funcionalidade 3:` Fazer busca através do CPF de um produtor rural cadastrado no sistema.

:heavy_check_mark: `Funcionalidade 4:` Exibir mapa, com pins, de todas as comunicaões registradas no sistema.

## Aplicação
### Página inicial do sistema
![1648824927992](https://user-images.githubusercontent.com/27708175/161293390-26fcf422-f207-4c88-b281-41612d257db7.png)

### Video usando todos os recursos da aplicação
https://user-images.githubusercontent.com/27708175/161293652-d178796e-058c-49fd-9ac7-679cfba20ad9.mp4

## Ferramentas utilizadas

<p><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" /> Python 3</p>
<p><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" /> Django 4</p>
<p><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /> Javascript</p>
<p><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /> Typescript</p>
<p><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /> HTML</p>
<p><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /> CSS</p>
<p><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" /> Angular CLI 12</p>
<p><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" /> PostgreSQL</p>

## Acesso ao projeto

<a href="https://proagro-facil.herokuapp.com/"><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" /></a>

## Abrir e rodar o projeto localmente

### Backend
```console
git clone git@github.com:robsonleal/proagro_facil.git
cd django-restapi
python -m venv ./venv
source venv/bin/activate
pip install -r 'requirements.txt'
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```
### Frontend
```console
cd frontend
ng build --prod --output-path /{{caminho até o projeto}}/proagro_facil/backend/static/ang --watch --output-hashing none
```

- Abrir o endereço localhost:8000 no navegador de sua preferência;
- Com o build em execução qualquer alteração feita na pasta do projeto angular, será servido como arquivos estático para o Django
