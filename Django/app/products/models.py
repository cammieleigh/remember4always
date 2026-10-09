from django.db import models

# Create your models here.
class Products(models.Model):
    imgpath = models.TextField(db_column='imgPath')  # Field name made lowercase.
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    quantity = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'products'