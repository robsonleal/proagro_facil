"""
    Views for losses app
"""

from rest_framework import viewsets
from losses.models import CropLoss
from losses.serializers import CropLossSerializer
from django_filters import rest_framework as filters
# from rest_framework.authentication import BasicAuthentication
# from rest_framework.permissions import IsAuthenticated


class CropLossViewSet(viewsets.ModelViewSet):
    queryset = CropLoss.objects.all()
    serializer_class = CropLossSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ('farmer_cpf',)
    # authentication_classes = [BasicAuthentication]
    # permission_classes = [IsAuthenticated]
