from django.test import TestCase
from losses.models import CropLoss
from losses.serializers import CropLossSerializer


class CropLossSerializerTestCase(TestCase):
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
        self.serializer = CropLossSerializer(instance=self.crop_loss)

    def test_check_serializer_fields(self):
        """ Testing serializer fields """
        data = self.serializer.data
        self.assertEqual(
            set(data.keys()),
            set([
                'id',
                'farmer_name',
                'farmer_email',
                'farmer_cpf',
                'crop_lat',
                'crop_long',
                'crop_type',
                'harvest_date',
                'event_croploss'
            ]))
