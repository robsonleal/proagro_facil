from django.db import models


class CropLoss(models.Model):
    CROP_TYPES = (
        ('milho', 'Milho'),
        ('soja', 'Soja'),
        ('arroz', 'Arroz'),
        ('café', 'Café'),
        ('trigo', 'Trigo'),
        ('feijão', 'Feijão'),
    )

    EVENT_CROPLOSS = (
        ('CHEX', 'Chuva excessiva'),
        ('GEAD', 'Geada'),
        ('GRAN', 'Granizo'),
        ('SECA', 'Seca'),
        ('VEND', 'Vendaval'),
        ('RAIO', 'Raio'),
    )

    farmer_name = models.CharField(
        max_length=255,
        verbose_name='Nome do produtor rural',
        unique=True,
        blank=False,
        null=False,
    )

    farmer_email = models.EmailField(
        max_length=255,
        verbose_name='E-mail do produtor rural',
        unique=True,
        blank=False,
        null=False,
    )

    farmer_cpf = models.CharField(
        max_length=14,
        verbose_name='CPF do produtor rural',
        unique=True,
        blank=False,
        null=False,
    )

    crop_lat = models.IntegerField(
        verbose_name='Latitude da lavoura',
        blank=False,
        null=False,
    )

    crop_long = models.IntegerField(
        verbose_name='Longitude da lavoura',
        blank=False,
        null=False,
    )

    crop_type = models.CharField(
        max_length=7,
        verbose_name='Tipo de lavoura',
        choices=CROP_TYPES,
        blank=False,
        null=False,
    )

    harvest_date = models.DateField(
        verbose_name='Data da colheita'
    )

    event_croploss = models.CharField(
        max_length=4,
        verbose_name='Evento ocorrido',
        choices=EVENT_CROPLOSS,
        blank=False,
        null=False,
    )

    def __str__(self):
        return f'{self.farmer_name}'
