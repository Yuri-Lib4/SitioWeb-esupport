# Generated by Django 4.2.3 on 2023-07-22 19:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('esupport', '0002_producto_imagen'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='CategoriaProducto',
            new_name='MarcaProducto',
        ),
        migrations.RenameField(
            model_name='producto',
            old_name='categoria',
            new_name='marca',
        ),
    ]
