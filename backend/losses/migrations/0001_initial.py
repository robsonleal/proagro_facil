# Generated by Django 4.0.3 on 2022-03-29 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CropLoss',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('farmer_name', models.CharField(max_length=255, unique=True, verbose_name='Nome do produtor rural')),
                ('farmer_email', models.EmailField(max_length=255, unique=True, verbose_name='E-mail do produtor rural')),
                ('farmer_cpf', models.CharField(max_length=14, unique=True, verbose_name='CPF do produtor rural')),
                ('crop_lat', models.IntegerField(verbose_name='Latitude da lavoura')),
                ('crop_long', models.IntegerField(verbose_name='Latitude da lavoura')),
                ('crop_type', models.CharField(choices=[('milho', 'Milho'), ('soja', 'Soja'), ('arroz', 'Arroz'), ('café', 'Café'), ('trigo', 'Trigo'), ('feijão', 'Feijão')], max_length=7, verbose_name='Tipo de lavoura')),
                ('harvest_date', models.DateField(verbose_name='Data da colheita')),
                ('event_croploss', models.CharField(choices=[('CHEX', 'Chuva excessiva'), ('GEAD', 'Geada'), ('GRAN', 'Granizo'), ('SECA', 'Seca'), ('VEND', 'Vendaval'), ('RAIO', 'Raio')], max_length=4, verbose_name='Evento ocorrido')),
            ],
        ),
    ]
