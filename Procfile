release: python3 backend/manage.py migrate
web: cd backend && gunicorn backend.wsgi --preload --log-file -