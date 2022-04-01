"""
    backend URL Configuration
"""

from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.views.generic.base import TemplateView


schema_view = get_schema_view(
   openapi.Info(
        title="Proagro Fácil",
        default_version='v1',
        description="Faz o cadastro da comunicação de perdas ocorridas na\
            lavoura, exonerando o produtor rural das reponsabilidades\
            financeiras relativas as operações de crédito",
        terms_of_service="#",
        contact=openapi.Contact(email="devleal@hotmail.com"),
        license=openapi.License(name="MIT License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('', TemplateView.as_view(template_name="index.html"), name="home"),
    path('', include('losses.urls')),
    path(
        'swagger/',
        schema_view.with_ui('swagger', cache_timeout=0),
        name='schema-swagger-ui'
    ),
]
