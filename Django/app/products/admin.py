from django.contrib import admin
from .models import Products

# class ProductsAdmin(admin.ModelAdmin):
#     list_display = ('Imgpath', 'Description', 'Price')
# Register your models here.
admin.site.register(Products)