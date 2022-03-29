"""
    Testing for model crop loss
"""

from django.test import TestCase
from losses.models import CropLoss


class CropLossModelTestCase(TestCase):

    def setUp(self):
        self.crop_loss = CropLoss.objects.create(
            farmer_name = 'Testing Name',
            farmer_email = 'example@testing.com',
            farmer_cpf = '222-111-111-15',
            crop_lat = -53.00000,
            crop_long = -14.00000,
            crop_type = 'Milho',
            harvest_date = '2022-10-10',
            event_croploss = 'CHEX',
        )

    def test_farmer_name(self):
        croploss = CropLoss.objects.get(id=1)
        field_label = croploss._meta.get_field('farmer_name').verbose_name
        self.assertEquals(field_label, 'Nome do produtor rural')

    def test_farmer_email(self):
        croploss = CropLoss.objects.get(id=1)
        field_label = croploss._meta.get_field('farmer_email').verbose_name
        self.assertEquals(field_label, 'E-mail do produtor rural')

    def test_farmer_cpf(self):
        croploss = CropLoss.objects.get(id=1)
        field_label = croploss._meta.get_field('farmer_cpf').verbose_name
        self.assertEquals(field_label, 'CPF do produtor rural')

    def test_crop_lat(self):
        croploss = CropLoss.objects.get(id=1)
        field_label = croploss._meta.get_field('crop_lat').verbose_name
        self.assertEquals(field_label, 'Latitude da lavoura')

    def test_crop_long(self):
        croploss = CropLoss.objects.get(id=1)
        field_label = croploss._meta.get_field('crop_long').verbose_name
        self.assertEquals(field_label, 'Longitude da lavoura')

    def test_crop_type(self):
        croploss = CropLoss.objects.get(id=1)
        field_label = croploss._meta.get_field('crop_type').verbose_name
        self.assertEquals(field_label, 'Tipo de lavoura')

    def test_harvest_date(self):
        croploss = CropLoss.objects.get(id=1)
        field_label = croploss._meta.get_field('harvest_date').verbose_name
        self.assertEquals(field_label, 'Data da colheita')

    def test_event_croploss(self):
        croploss = CropLoss.objects.get(id=1)
        field_label = croploss._meta.get_field('event_croploss').verbose_name
        self.assertEquals(field_label, 'Evento ocorrido')

    def test_object_name_return(self):
        croploss = CropLoss.objects.get(id=1)
        expected_object_name = f'{croploss.farmer_name}'
        self.assertEquals(expected_object_name, str(croploss))
