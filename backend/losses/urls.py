"""
    losses URL Configuration
"""

from django.urls import path, include
from rest_framework import routers
from losses.views import CropLossViewSet


router = routers.DefaultRouter()
router.register('perdas', CropLossViewSet, basename='perdas')

urlpatterns = [
    path('', include(router.urls)),
]
