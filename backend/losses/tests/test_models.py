"""
    Testing for model crop loss
"""

from django.test import TestCase
from losses.models import CropLoss


class CropLossModelTestCase(TestCase):

    def setUp(self):
        self.crop_loss = CropLoss.objects.create(
            farmer_name='Testing Name',
            farmer_email='example@testing.com',
            farmer_cpf='222-111-111-15',
            crop_lat=-53.00000,
            crop_long=-14.00000,
            crop_type='Milho',
            harvest_date='2022-10-10',
            event_croploss='CHEX',
        )

    def test_farmer_name(self):
        """ Verify that the 'farmer_name field' has a display text """
        croploss = CropLoss.objects.get(id=1)
        field_label = croploss._meta.get_field('farmer_name').verbose_name
        self.assertEquals(field_label, 'Nome do produtor rural')

    def test_farmer_email(self):
        """ Verify that the 'farmer_email field' has a display text """
        croploss = CropLoss.objects.get(id=1)
        field_label = croploss._meta.get_field('farmer_email').verbose_name
        self.assertEquals(field_label, 'E-mail do produtor rural')

    def test_farmer_cpf(self):
        """ Verify that the 'farmer_cpf field' has a display text """
        croploss = CropLoss.objects.get(id=1)
        field_label = croploss._meta.get_field('farmer_cpf').verbose_name
        self.assertEquals(field_label, 'CPF do produtor rural')

    def test_crop_lat(self):
        """ Verify that the 'crop_lat field' has a display text """
        croploss = CropLoss.objects.get(id=1)
        field_label = croploss._meta.get_field('crop_lat').verbose_name
        self.assertEquals(field_label, 'Latitude da lavoura')

    def test_crop_long(self):
        """ Verify that the 'crop_long field' has a display text """
        croploss = CropLoss.objects.get(id=1)
        field_label = croploss._meta.get_field('crop_long').verbose_name
        self.assertEquals(field_label, 'Longitude da lavoura')

    def test_crop_type(self):
        """ Verify that the 'crop_type field' has a display text """
        croploss = CropLoss.objects.get(id=1)
        field_label = croploss._meta.get_field('crop_type').verbose_name
        self.assertEquals(field_label, 'Tipo de lavoura')

    def test_harvest_date(self):
        """ Verify that the 'haverst_date field' has a display text """
        croploss = CropLoss.objects.get(id=1)
        field_label = croploss._meta.get_field('harvest_date').verbose_name
        self.assertEquals(field_label, 'Data da colheita')

    def test_event_croploss(self):
        """ Verify that the 'event_croploss field' has a display text """
        croploss = CropLoss.objects.get(id=1)
        field_label = croploss._meta.get_field('event_croploss').verbose_name
        self.assertEquals(field_label, 'Evento ocorrido')

    def test_object_name_return(self):
        """
            Checking that the object's string representation method
            returns a string with the farmer_name
        """
        croploss = CropLoss.objects.get(id=1)
        self.assertEquals(croploss.farmer_name, str(croploss))
