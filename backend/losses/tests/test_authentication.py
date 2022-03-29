from django.contrib.auth.models import User
from rest_framework.test import APITestCase
from django.contrib.auth import authenticate
from django.urls import reverse
from rest_framework import status


class AuthenticationUserTestCase(APITestCase):
    def setUp(self):
        self.list_url = reverse('perdas-list')
        self.user = User.objects.create_user('usertest', password='123456')

    def test_user_authenticate(self):
        user = authenticate(username='usertest', password='123456')
        self.assertTrue((user is not None) and user.is_authenticated)

    def test_request_with_user_authentication(self):
        self.client.force_authenticate(self.user)
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_request_without_user_authenticated(self):
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
