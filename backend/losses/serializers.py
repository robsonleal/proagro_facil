"""
    Serializer for losses app, convert data in JSON format
"""

from rest_framework import serializers
from losses.models import CropLoss


class CropLossSerializer(serializers.ModelSerializer):
    class Meta:
        model = CropLoss
        fields = '__all__'
