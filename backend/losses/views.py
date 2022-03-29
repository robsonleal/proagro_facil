from rest_framework import viewsets
from losses.models import CropLoss
from losses.serializers import CropLossSerializer
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated


class CropLossViewSet(viewsets.ModelViewSet):
    queryset = CropLoss.objects.all()
    serializer_class = CropLossSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
